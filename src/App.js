import logo from "./logo.svg";
import "./App.css";
import { styled } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftNav from "./components/includes/LeftNav";
import Header from "./components/includes/Header";
import DashBoard from "./components/screens/DashBoard";
import GuestTraffic from "./components/screens/GuestTraffic";
import GuestName from "./components/screens/GuestName";
import CateringSts from "./components/screens/CateringSts";
import Gift from "./components/screens/Gift";
import Account from "./components/screens/Account";
import Wallet from "./components/screens/Wallet";
import HelpAndSupport from "./components/screens/HelpAndsupport";

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
              <Route path="/cateringsts" element={<CateringSts />} />
              <Route path="/gift" element={<Gift />} />
              <Route path="/account" element={<Account />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/help" element={<HelpAndSupport />} />
              <Route path="/" element={<Header />} />
              
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
