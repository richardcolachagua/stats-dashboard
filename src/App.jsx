import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerInfo from "./Frontend/PlayerInfo";
import TeamInfo from "./Frontend/TeamInfo";
import Dashboard from "./Frontend/Dashboard/Dashboard";
import SideBar from "./Frontend/Dashboard/SideBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/TeamInfo" element={<TeamInfo />} />
          <Route path="/PlayerInfo" element={<PlayerInfo />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/SideBar" element={<SideBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
