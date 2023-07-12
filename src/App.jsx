import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerInfo from "./Frontend/PlayerInfo";
import TeamInfo from "./Frontend/TeamInfo";
import Dashboard from "./Frontend/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/TeamInfo" element={<TeamInfo />} />
          <Route path="/PlayerInfo" element={<PlayerInfo />} />
          <Route path="Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
