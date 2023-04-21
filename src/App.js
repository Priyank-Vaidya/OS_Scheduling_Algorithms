import { HomePage } from './Pages/HomePage';
import { BrowserRouter,Routes, Route } from "react-router-dom"
import {RoundRobin} from './Pages/RoundRobin';
import {ScanCscan} from "./Pages/ScanCscan";
import {Bankers} from "./Pages/Bankers";
import {MRU} from "./Pages/MRU";
import './App.css';
import { BankersAlgo } from './Algorithms/BankersAlgo';
import { AboutUs } from './Pages/AboutUs';
import { CSCAN_SCAN } from './Algorithms/CSCAN_SCAN';
import { MRU_sim } from './Algorithms/MRU_sim';
import { Chatppt } from './chatbot/Chatppt';
import Modal from './Components/Modal';
// import RR from './Algorithms';
// import RoundRobins from './Algorithms/RoundRobins';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <title>OS Project</title>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/roundrobin" element={<RoundRobin/>}/>
        <Route exact path="/scan-cscan" element={<ScanCscan/>}/>
        <Route exact path="/bankersAlgorithm" element = {<Bankers/>}/>
        <Route exact path="/MRU" element ={<MRU/>}/>
        <Route exact path="/about" element={<AboutUs/>}/>
        {/* <Route  path="/roundrobins" element={<RR/>}/> */}
        <Route  path="/simulation_bankers" element={<BankersAlgo/>}/>
        <Route  path="/simulation_cscan_scan" element={<CSCAN_SCAN/>}/>
        <Route  path="/simulation_MRU" element={<MRU_sim/>}/>
        <Route path='/chatbot' element={<Chatppt/>}/>
        <Route path='/chatB' element={<Modal/>}/>
        




      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
