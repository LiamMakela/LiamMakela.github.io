import { useState } from "react";

import Window from "./components/Window.jsx";
import Forestsvg from "./assets/Asset5.svg?react";
import BgLayer from "./components/BgLayer.jsx";

import Panel from "./components/Panel.jsx";
import About from "./components/About.jsx";
import Mail from "./components/Mail.jsx";
import Links from "./components/Links.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  const [windowAboutOpen, setWindowAboutOpen] = useState(false);
  const [windowProjectsOpen, setWindowProjectsOpen] = useState(false);
  const [windowMailOpen, setWindowMailOpen] = useState(false);
  const [windowLinksOpen, setWindowLinksOpen] = useState(false);

  const [svgHover, setSvgHover] = useState(false);
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      onMouseMove={(e) => {
        if ("ontouchstart" in window) return;
        if (!svgHover) return;

        const x =
          (e.clientX / window.innerWidth - 0.5) * 2;

        const y =
          (e.clientY / window.innerHeight - 0.5) * 2;

        setMouse({ x, y });
      }}
    >
      <Forestsvg
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-full
          z-0
          opacity-0
        "
        onMouseEnter={() => setSvgHover(true)}
        onMouseLeave={() => {
          setSvgHover(false);
          setMouse({ x: 0, y: 0 });
        }}
      />

      <BgLayer
        svgHover={svgHover}
        mouse={mouse}
      />

      <Panel
        setWindowAboutOpen={setWindowAboutOpen}
        setWindowProjectsOpen={setWindowProjectsOpen}
        setWindowMailOpen={setWindowMailOpen}
        setWindowLinksOpen={setWindowLinksOpen}
      />

      <Window
        open={windowAboutOpen}
        closeWindow={() => setWindowAboutOpen(false)}
        width={600}
        height={460}
      >
        <About />
      </Window>

      <Window
        open={windowProjectsOpen}
        closeWindow={() => setWindowProjectsOpen(false)}
        width={720}
        height={560}
      >
        <Projects />
      </Window>

      <Window
        open={windowMailOpen}
        closeWindow={() => setWindowMailOpen(false)}
        width={460}
        height={260}
      >
        <Mail />
      </Window>

      <Window
        open={windowLinksOpen}
        closeWindow={() => setWindowLinksOpen(false)}
        width={420}
        height={320}
      >
        <Links />
      </Window>
    </div>
  );
}