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
import { usePropsValue } from "../utils/useValue";
import "./index.less";
import classNames from "classnames";

export type InputType = "text" | "number" | "password";
export type InputTitlePosition = "top" | "left";

export interface InputRule {
  test: (val: string) => boolean;
  message: string;
}

export interface InputProps {
  type?: InputType;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  placeholder?: string;
  rules?: InputRule[];
  immediateCheck?: boolean;
  resetErrorOnClear?: boolean;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  onChange?: (value?: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const [prefix] = defineName("input");

const Input: FC<InputProps> = (props) => {
  const {
    type = "text",
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
    ...restProps
  } = props;
  const [value, setValue] = usePropsValue<string>({
    value: props.value,
    defaultValue: props.defaultValue || "",
  });
  const [error, setError] = useState("");
  const ref = useRef<HTMLInputElement>(null);

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

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const nVal = e.target.value;
    mSetValue(nVal);
  };

  const handleFocus: ChangeEventHandler<HTMLInputElement> = (e) => {
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
    <div
      className={classNames({
        [prefix]: true,
        [`${prefix}--disabled`]: restProps.disabled,
        [`${prefix}--readonly`]: restProps.readOnly,
      })}
    >
      <div className={`${prefix}__body`}>
        <input
          {...restProps}
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
    </div>
  );

  return renderInput();
};

export default Input;