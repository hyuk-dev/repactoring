import { blockStyle } from "../../../styles/contentBlockStyle";
import { appStyle } from "../../../styles/appStyle";
export function Expected() {
  return (
    <>
      <div style={appStyle.expectedStyle}>
        <div style={blockStyle}>
          <h2>Expected Plans</h2>
          <li>JavaScript Learning 🥵</li>
          <li>React Learning 🥵</li>
          <li>Express Learning 🥵</li>
        </div>
      </div>
    </>
  );
}
