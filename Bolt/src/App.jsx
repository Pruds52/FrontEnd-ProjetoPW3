import "./App.css";
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import GamesList from "./components/pages/GamesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateGame from "./components/pages/CreateGame";
import CreateUser from "./components/pages/CreateUser"
import DetailGame from "./components/pages/DetailGame";
import UpdateGame from "./components/pages/UpdateGame";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>

          <Routes>

            <Route path="/" element={<NavBar />}>
              <Route path="/" element={<Home />} />
              <Route path="/gamesList" element={<GamesList />} />
              <Route path="/createGame" element={<CreateGame />} />
              <Route path="/createUser" element={<CreateUser />} />
              <Route path="/detailGame/:jogoId" element={<DetailGame />} />
              <Route path="/updateGame/:jogoId" element={<UpdateGame />} />
            </Route>

          </Routes>

        </Container>
      </BrowserRouter>
    </>
  );
}
export default App;