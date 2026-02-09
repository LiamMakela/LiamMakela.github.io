import { useState, useEffect } from "react";
import Window from "./components/Window.jsx";
import Forestsvg from "./assets/Asset5.svg?react";
import BgLayer from "./components/BgLayer.jsx";
import Pannel from "./components/Pannel.jsx";
import About from "./components/About.jsx";
import Mail from "./components/Mail.jsx";
import Links from "./components/Links.jsx";




export default function App() {
  const [windowAboutOpen, setWindowAboutOpen] = useState(false);
  const [windowMailOpen, setWindowMailOpen] = useState(false);
  const [windowLinksOpen, setWindowLinksOpen] = useState(false);
  const [windowOpen, setWindowOpen] = useState(false);
  const [svgHover, setSvgHover] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      alert("This site is best experienced on desktop.");
    }
  }, []);

  return (
    
    <div className="relative w-screen h-screen overflow-hidden"
      onMouseMove={(e) => {
      if ("ontouchstart" in window) return;
      if (!svgHover) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
      }}
    >

      <Forestsvg className = "absolute bottom-0 left-0 w-full h-full z-0 opacity-0" onMouseEnter={() => setSvgHover(true)} onMouseLeave={() => {setSvgHover(false); setMouse({ x: 0, y: 0 });}}/>

      <BgLayer svgHover={svgHover} mouse={mouse}/>

      <Pannel setWindowAboutOpen={setWindowAboutOpen}
              setWindowOpen={setWindowOpen}
              setWindowMailOpen={setWindowMailOpen}
              setWindowLinksOpen={setWindowLinksOpen}
              />

      <Window open={windowAboutOpen} closeWindow={() => setWindowAboutOpen(false)} Content={About} width={320} height={430}/>
      <Window open={windowMailOpen} closeWindow={() => setWindowMailOpen(false)} Content={Mail}/>
      <Window open={windowLinksOpen} closeWindow={() => setWindowLinksOpen(false)} Content={Links}/>

    </div>
  );
}
