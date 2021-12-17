import { defineName } from "../utils/name";
import {
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
  ChangeEventHandler,
} from "react";
import Icon from "f6-icons";
import Cell from "../cell";
import { usePropsValue } from "../utils/useValue";
import "./index.less";
import classNames from "classnames";

export type FieldTitlePosition = "top" | "left";

export interface FieldRule {
  test: (val: string) => boolean;
  message: string;
}

export interface FieldProps {
  title?: ReactNode;
  titlePosition: FieldTitlePosition;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  placeholder?: string;
  rules?: FieldRule[];
  immediateCheck?: boolean;
  resetErrorOnClear?: boolean;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  onChange?: (value?: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  showCount?: boolean;
}

const [prefix] = defineName("textarea");

const TextArea: FC<FieldProps> = (props) => {
  const {
    title,
    placeholder,
    titlePosition = "left",
    clearable = true,
    rules = [],
    immediateCheck,
    onFocus,
    onChange,
    onBlur,
    validateOnBlur = true,
    validateOnChange = true,
    resetErrorOnClear = true,
    showCount = true,
    ...restProps
  } = props;
  const [value, setValue] = usePropsValue<string>({
    value: props.value,
    defaultValue: props.defaultValue || "",
  });
  const [error, setError] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (immediateCheck) {
      doCheck(value);
    }
  }, [immediateCheck]);

  const mSetValue = (val: string) => {
    setValue(val);
    onChange?.(val);
    if (validateOnChange) {
      doCheck(val);
    }
    if (resetErrorOnClear && val.length === 0) {
      setError("");
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    const textArea = ref.current;
    textArea.style.height = "auto";
    const height = textArea.scrollHeight;
    textArea.style.height = `${height}px`;
  }, [value]);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const nVal = e.target.value;
    mSetValue(nVal);
  };

  const handleFocus: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    onFocus?.();
  };

  const blurHandle = () => {
    onBlur?.();
    if (validateOnBlur) {
      doCheck(value);
    }
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
    return clearable &&
      !restProps.disabled &&
      !restProps.readOnly &&
      value.length ? (
      <Icon
        className={`${prefix}__clear`}
        name="close-circle-o"
        onClick={clearVal}
      />
    ) : null;
  };

  const renderInput = () => (
    <div>
      <div>
        <div className={`${prefix}__body`}>
          <textarea
            {...restProps}
            ref={ref}
            className={`${prefix}__input`}
            value={value}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={blurHandle}
            onChange={handleChange}
          />
          {renderIcon()}
        </div>
        {error && <div className={`${prefix}__error`}>{error}</div>}
      </div>
      <div className={`${prefix}__count`}>{value.length}</div>
    </div>
  );

  // return renderInput();

  return (
    <Cell
      className={classNames([prefix, `${prefix}--title-${titlePosition}`])}
      titleClass={`${prefix}__title`}
      title={title}
      value={renderInput()}
    />
  );
};

export default TextArea;
