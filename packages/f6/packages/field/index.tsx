import { defineName } from "../utils/name";
import {
  ChangeEventHandler,
  CSSProperties,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import Cell from "../cell";
import "./index.less";
import Icon from "f6-icons";
import { usePropsValue } from "../utils/useValue";

export type FiledType = "text" | "number" | "textarea" | "password";

export interface FiledRule {
  test: (val: string) => boolean;
  message: string;
}

export interface FieldProps {
  title?: ReactNode;
  type?: FiledType;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  placeholder?: string;
  rules?: FiledRule[];
  immediateCheck?: boolean;
  resetErrorOnClear?: boolean;
  autoSize?: boolean;
  onChange?: (value?: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const [prefix] = defineName("field");

const Field: FC<FieldProps> = (props) => {
  const {
    title,
    placeholder,
    clearable = true,
    rules = [],
    immediateCheck,
    type = "text",
    onFocus,
    onChange,
    onBlur,
    autoSize = true,
    resetErrorOnClear = true,
  } = props;
  const [value, setValue] = usePropsValue<string>({
    value: props.value,
    defaultValue: props.defaultValue || "",
  });
  const [error, setError] = useState("");
  const ref = useRef<HTMLInputElement|HTMLTextAreaElement>(null);
  const hRef = useRef<number>(0);
  const [h, setH] = useState(0);

  useEffect(() => {
    if (immediateCheck) {
      doCheck(value);
    }
  }, [immediateCheck]);

  const mSetValue = (val: string) => {
    setValue(val);
    onChange?.(val);
    doCheck(val);
    if (resetErrorOnClear && val.length === 0) {
      setError("");
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const nVal = e.target.value;
    mSetValue(nVal);
    if (ref.current) {
      // ref.current.style.height = 'auto';
      setH(ref.current!.scrollHeight)
      // hRef.current = ref.current!.scrollHeight;
    }
  };

  const handleFocus: ChangeEventHandler<HTMLInputElement> = (e) => {
    onFocus?.();
  };

  const blurHandle = () => {
    onBlur?.();
  };

  const doCheck = (val: string) => {
    const rule = rules.find((it) => it.test(val));
    setError(rule ? rule.message : "");
  };

  const clearVal = () => {
    mSetValue("");
    ref.current?.focus();
  };

  const renderIcon = () => {
    return clearable && value.length ? (
      <Icon
        className={`${prefix}__clear`}
        name="close-circle-o"
        onClick={clearVal}
      />
    ) : null;
  };

  const renderInput = () => (
    <>
      <div className={`${prefix}__body`}>
        <input
          ref={ref}
          className={`${prefix}__input`}
          value={value}
          type={type}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={blurHandle}
          onChange={handleChange}
        />
        {renderIcon()}
      </div>
      {error && <div className={`${prefix}__error`}>{error}</div>}
    </>
  );

  const renderTextarea = () => {
    const style: CSSProperties = h ? {
      height: (h) + 'px'
    } : {}
    return (
      <>
        <div className={`${prefix}__body`}>
          <textarea
            ref={ref}
            style={style}
            className={`${prefix}__input`}
            value={value}
            type={type}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={blurHandle}
            onChange={handleChange}
          />
          {renderIcon()}
        </div>
        {error && <div className={`${prefix}__error`}>{error}</div>}
      </>
    );
  };

  const body = () => {
    return type === "textarea" ? renderTextarea() : renderInput();
  };

  return (
    <Cell
      className={prefix}
      titleClass={`${prefix}__title`}
      title={title}
      value={body()}
    />
  );
};

export default Field;