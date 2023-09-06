import logo from "./logo.svg";
import "./App.css";
import { styled } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftNav from "./components/includes/LeftNav";
import Header from "./components/includes/Header";
import DashBoard from "./components/screens/DashBoard";
import GuestTraffic from "./components/screens/GuestTraffic";

function App() {
  return (
    <>
      <Router>
        <FirstContainer>
          <LeftNav />
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/guesttraffic" element={<GuestTraffic />} />
              <Route path="/" element={<DashBoard />} />
              <Route path="/" element={<DashBoard />} />
              <Route path="/" element={<DashBoard />} />
            </Routes>
          </Container>
        </FirstContainer>
      </Router>
    </>
  );
}
const FirstContainer = styled.div`
display:flex;
`
const Container = styled.div`
  width: 100%;
`;

export default App;
