import { blockStyle } from "../../../styles/contentBlockStyle";
import { appStyle } from "../../../styles/appStyle";
export function PlanController() {
  return (
    <>
      <div style={appStyle.planControllerStyle}>
        <div style={blockStyle}>
          <h2>User Interface</h2>
          <div>
            Command: <input></input>
          </div>
        </div>
      </div>
    </>
  );
}
