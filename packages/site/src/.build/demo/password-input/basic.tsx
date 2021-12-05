import { PasswordInput, Toast } from "f6";

export default function App() {
  return (
    <div>
      <PasswordInput
        onChange={(val) => {
          Toast.show({ message: val.join("-") });
        }}
      />
    </div>
  );
}
