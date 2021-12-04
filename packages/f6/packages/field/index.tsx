import { defineName } from "../utils/name";
import { ChangeEventHandler, FC, useState } from "react";
import Cell from "../cell";
import "./index.less";
import Icon from "f6-icons";

export interface Rule {
  test: (val: string) => boolean;
  message: string;
}

export interface FieldProps {
  label?: string;
  type?: string;
  value?: number | string;
  defaultValue?: number | string;
  disabled?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  placeholder?: string;
  rules?: Rule[];
  onChange?: (value?: number | string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const [prefix] = defineName("field");

const Field: FC<FieldProps> = (props) => {
  const {
    label,
    placeholder,
    defaultValue,
    clearable = true,
    rules = [],
    type = "text",
    onFocus,
  } = props;
  const [value, setValue] = useState(defaultValue ? `${defaultValue}` : "");
  const [error, setError] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const nVal = e.target.value;
    setValue(nVal);
    doCheck(nVal);
  };

  const handleFocus: ChangeEventHandler<HTMLInputElement> = (e) => {
    onFocus?.();
  }

  const doCheck = (val: string) => {
    const rule = rules.find((it) => it.test(val));
    setError(rule ? rule.message : "");
  };

  const clearVal = () => setValue("");

  const renderIcon = () => {
    return clearable && value.length ? (
      <Icon name="close-circle-o" onClick={clearVal} />
    ) : null;
  };

  const input = (
    <>
      <div className={`${prefix}__body`}>
        <input
          onFocus={handleFocus}
          value={value}
          onChange={handleChange}
          className={`${prefix}__input`}
          type={type}
          placeholder={placeholder}
        />
        {renderIcon()}
      </div>
      {error && <div className={`${prefix}__error`}>{error}</div>}
    </>
  );

  return <Cell className={prefix} title={label} value={input}></Cell>;
};

export default Field;