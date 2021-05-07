import { Container } from "react-bootstrap";
import Dashboard from "./components/dashboard/Dashboard";
import TopNavbar from "./components/dashboard/topNavbar/TopNavbar";
import Navbar from "./components/navbar/Navbar";

import CoinContextProvider from "./hooks/CoinContext";

function App() {
  return (
    <CoinContextProvider>
      <div className="App">
        <Container fluid className="app__con">
          <div className="divcon">
            <div className="divcon__inner">
              <div className="divcon__left">
                <Navbar />
              </div>
              <div className="divcon__rigt">
                <TopNavbar />
                <Dashboard />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </CoinContextProvider>
  );
}

export default App;
