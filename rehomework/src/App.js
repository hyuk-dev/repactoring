import { Login } from "./components/feature/auth/Login.jsx";
import { Expected } from "./components/feature/planner/Expected.jsx";
import { Working } from "./components/feature/planner/Working.jsx";
import { Finished } from "./components/feature/planner/Finished.jsx";
import { PlanController } from "./components/feature/ui/PlanController.jsx";
import { UserStatus } from "./components/information/status/UserStatus.jsx";
import { appStyle } from "./styles/appStyle.jsx";

function App() {
  return (
    <>
      <h1 style={appStyle.titleStyle}>Dev Planner</h1>

      <div style={appStyle.mainStyle}>
        <PlanController/>
        <UserStatus/>
        <Expected/>
        <Working/>
        <Finished/>
      </div>
    </>
  );
}

export default App;
