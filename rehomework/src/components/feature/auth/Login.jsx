import { blockStyle } from "../../../styles/contentBlockStyle";

export function Login() {
  return (
    <>
      <div style={blockStyle}>
        <div>
          ID: <input></input>
        </div>
        <div>
          PW: <input></input>
        </div>
        <button>Login</button>
      </div>
    </>
  );
}
