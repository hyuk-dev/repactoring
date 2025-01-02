import { blockStyle } from "../../../styles/contentBlockStyle";
import { appStyle } from "../../../styles/appStyle";

export function Working() {
  return (
    <>
      <div style={appStyle.workingStyle}>
        <div style={blockStyle}>
          <h2>Working Plans</h2>
          <li>React Practice 🥵</li>
        </div>
      </div>
    </>
  );
}
