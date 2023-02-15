import { CurrentDisplay } from "./CurrentDisplay";
import { PreviousDispaly } from "./PreviousDisplay";

export function Display(props) {
  return (
    <div id="displayo">
      <PreviousDispaly value={props.value} />
      <div id="display">
        <CurrentDisplay value={props.value} />
      </div>
    </div>
  );
}
