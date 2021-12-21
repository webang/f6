import { defineName } from "../utils/name";
import {
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
  ChangeEventHandler,
} from "react";
import classNames from "classnames";
import Icon from "f6-icons";
import { usePropsValue } from "../utils/useValue";
import "./index.less";

export interface FieldRule {
  test: (val: string) => boolean;
  message: string;
}

export interface TextAreaProps {
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
  autoSize?: { minRows: number; maxRows: number } | boolean;
}

const [prefix] = defineName("textarea");

const TextArea: FC<TextAreaProps> = (props) => {
  const {
    placeholder,
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
    autoSize = false,
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
    if (!autoSize) return;
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
    <div className={classNames([prefix])}>
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
      {value.length ? (
        <div className={`${prefix}__count`}>{value.length}</div>
      ) : null}
    </div>
  );

  return renderInput();
};

export default TextArea;
