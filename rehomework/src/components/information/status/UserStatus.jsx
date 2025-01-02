import { blockStyle } from "../../../styles/contentBlockStyle";
import { Finished } from "../../feature/planner/Finished";
import { appStyle } from "../../../styles/appStyle";

export function UserStatus() {
  return (
    <>
      <div style={appStyle.userStatusStyle}>
        <div style={blockStyle}>
          <h2>User Status</h2>
          <div>
            Plan completion rate :{" "}
            <progress
              class="progress"
              id="progress"
              value="50"
              min="0"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </>
  );
}
