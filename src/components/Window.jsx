import Draggable from 'react-draggable'
import { useRef } from "react"
import XSymbolSvg from "../assets/x-symbol.svg?react";

function Window({ open , Content, closeWindow, width, height}) {
  const nodeRef = useRef(null);
  if (!open) return null;

  return (
    <Draggable bounds="parent" nodeRef={nodeRef} defaultPosition={{ x: window.innerWidth / 2 - 128, y: window.innerHeight / 2 - 128}} >
      <div
        ref={nodeRef}
        className={`absolute z-30 w-${width} h-${height} bg-[#F5F5F5] p-4 cursor-move shadow-xl`}
      >
        <Content/>
         <button onClick = {closeWindow} class="absolute top-0.5 right-0.5  text-white rounded w-7 h-7">
          <XSymbolSvg className = " w-3/4 h-3/4 pointer-events-auto hover:transition-linear fill-[#00A36D] hover:fill-[#01744d]"/>
        </button>
      </div>
    </Draggable>
  );
}

export default Window