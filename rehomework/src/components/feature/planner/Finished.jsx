import { blockStyle } from "../../../styles/contentBlockStyle";
import { appStyle } from "../../../styles/appStyle";
export function Finished() {
  return (
    <>
      <div style={appStyle.finishedStyle}>
        <div style={blockStyle}>
          <h2>Finished Plans</h2>
          <li>Sleep 🤩</li>
          <li>Game 🤩</li>
          <li>Watching TV 🤩</li>
        </div>
      </div>
    </>
  );
}
