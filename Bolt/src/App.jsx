import "./App.css";
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import GamesList from "./components/pages/GamesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateGame from "./components/pages/CreateGame";
import CreateUser from "./components/pages/CreateUser"

function App() {
  return (
    <>
      <BrowserRouter>

        <Container>

          <Routes>

             <Route path="/" element={<NavBar/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/gamesList" element={<GamesList/>}/>
              <Route path="/createGame" element={<CreateGame/>}/>
              <Route path="/createUser" element={<CreateUser/>}/>
            </Route>

          </Routes>
          
        </Container>

      </BrowserRouter>
    </>
  );
}

export default App;
