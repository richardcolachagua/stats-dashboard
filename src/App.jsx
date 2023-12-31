import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerInfo from "./Frontend/PlayerInfo";
import TeamInfo from "./Frontend/TeamInfo";
import AllTeams from "./Frontend/AllTeams";
import AllPlayers from "./Frontend/AllPlayers";
import Dashboard from "./Frontend/Dashboard/Dashboard";
import SideBar from "./Frontend/Dashboard/SideBar";

import FAQ from "./Frontend/Dashboard/Faq";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/AllTeams" element={<AllTeams />} />
          <Route path="/AllPlayers" element={<AllPlayers />} />
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
