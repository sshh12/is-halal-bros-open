import logoOpen from './open.png';
import logoClosed from './closed.png';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  let [loading, setLoading] = useState(true);
  let [open, setOpen] = useState(false);
  useEffect(() => {
    fetch("https://n.sshh.io/halalbros").then(resp => resp.json()).then(halalStatus => {
      console.log(halalStatus);
      let guadStatus = halalStatus.find(h => h.street_address == '2712 Guadalupe St');
      setOpen(!guadStatus.offline)
      setLoading(false);
    })
  }, [])
  if(loading) {
    return (
      <div className="App">
      <header className="App-header"><p>
            Checking...
          </p></header>
      </div>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        {open ? <>
          <img src={logoOpen} className="App-logo App-logo-Rotate" alt="logo" />
          <p>
            <b>Yes.</b> Halal Bros on Guad is open.
          </p>
          <a
            href="https://ordering.app/halalbros/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'white', fontSize: '0.8em'}}
          >
            Order Pickup
          </a>
        </>: <>
        <img src={logoClosed} className="App-logo" alt="logo" />
          <p>
            <b>No.</b> Halal Bros on Guad is not open. 😭
          </p>
          <a
            href="https://cmhc.utexas.edu/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'white', fontSize: '0.8em'}}
          >
            Support
          </a>
        </>}
      </header>
    </div>
  );
}

export default App;
