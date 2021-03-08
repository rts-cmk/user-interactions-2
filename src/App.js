import InputField from "./InputField";

function App() {
  return (
    <div className="App">
      <InputField
        name="firstname"
        label="Firstname"
        type="text"
        pattern={/correctly/i}
      />
    </div>
  );
}

export default App;
