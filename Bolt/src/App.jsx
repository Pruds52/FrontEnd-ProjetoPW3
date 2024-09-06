import "./App.css";
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import CreateUser from "./components/pages/CreateUser";
import GamesList from "./components/pages/GamesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>

        <Container>

          <Routes>

             <Route path="/" element={<NavBar/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/gamesList" element={<GamesList/>}/>
              <Route path="/createUser" element={<CreateUser/>}/>
            </Route>

          </Routes>
          
        </Container>

      </BrowserRouter>
    </>
  );
}

export default App;
