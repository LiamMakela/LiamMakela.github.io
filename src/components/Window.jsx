import Draggable from 'react-draggable'
import { useRef } from "react"

function Window({ open , Content}) {
  const nodeRef = useRef(null);
  if (!open) return null;

  return (
    <Draggable bounds="parent" nodeRef={nodeRef} defaultPosition={{ x: window.innerWidth / 2 - 128, y: window.innerHeight / 2 - 128}} >
      <div
        ref={nodeRef}
        className="absolute z-30 w-64 h-64 bg-[#F5F5F5] p-4 cursor-move shadow-xl"
      >
        <Content/>
      </div>
    </Draggable>
  );
}

export default Window