import { Field, Toast } from "f6";

export default function () {
  return (
    <>
      <Field
        placeholder="focus-blur-change"
        onChange={() => {
          Toast.show({ message: "change", duration: 2000 });
        }}
        onFocus={() => {
          Toast.show({ message: "focus", duration: 2000 });
        }}
        onBlur={() => {
          Toast.show({ message: "blur", duration: 2000 });
        }}
      />
    </>
  );
}
