import { useState } from "react";
import { Display } from "./Display";
import { ButtonLayout } from "./ButtonLayout";

function App() {
  const [value, setValue] = useState("");
  const operators = ["+", "-", "*", "/", "."];
  function dotChecker(string) {
    const x = string.split("");
    for (let i = x.length; i > 0; i--) {
      if (operators.includes(x[i])) {
        const y = x.slice(i, x.length);
        return y.includes(".");
      }
    }
  }
  const updateValues = (e) => {
    const target = e.target.innerText;
    if (target === ".") {
      if (dotChecker(value)) {
        return;
      }
    }
    if (value === "" && target === ".") {
      setValue("0.");
      return;
    }
    if (target === "-" && value.slice(-1) !== "-" && value.slice(-1) !== ".") {
      setValue((x) => x + target);
      return;
    }
    if (
      operators.includes(target) &&
      operators.includes(value.slice(-1)) &&
      operators.includes(value.slice(-2, -1))
    ) {
      const temp = value.split("").slice(0, value.length - 2);
      setValue(temp.join("") + target);
      return;
    }
    if (value === "0" && target === "0") return;
    if (operators.includes(target) && operators.includes(value.slice(-1))) {
      const temp = value.split("").slice(0, value.length - 1);
      setValue(temp.join("") + target);
      return;
    }
    if (operators.includes(target) && value === "") return;
    else {
      setValue((x) => x + target);
      return;
    }
  };
  return (
    <div id="frame" className="App">
      <Display value={value} />
      <ButtonLayout value={value} setValue={setValue} onClick={updateValues} />
    </div>
  );
}

export default App;
