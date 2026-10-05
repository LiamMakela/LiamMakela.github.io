import Draggable from "react-draggable";
import { useRef } from "react";
import XSymbolSvg from "../assets/x-symbol.svg?react";

function Window({
  open,
  closeWindow,
  width = 420,
  height = 320,
  children,
}) {
  const nodeRef = useRef(null);

  if (!open) return null;

  const actualWidth = Math.min(width, window.innerWidth - 32);
  const actualHeight = Math.min(height, window.innerHeight - 32);

  const startX = Math.max(
    16,
    (window.innerWidth - actualWidth) / 2
  );

  const startY = Math.max(
    16,
    (window.innerHeight - actualHeight) / 2
  );

  return (
    <Draggable
      cancel=".no-drag"
      bounds="parent"
      nodeRef={nodeRef}
      defaultPosition={{
        x: startX,
        y: startY,
      }}
    >
      <div
        ref={nodeRef}
        style={{
          width: actualWidth,
          height: actualHeight,
        }}
        className="
          absolute
          z-30
          bg-[#F5F5F5]
          p-5
          cursor-move
          shadow-xl
          overflow-auto
        "
      >
        <div className="no-drag h-full">
          {children}
        </div>

        <button
          type="button"
          onClick={closeWindow}
          aria-label="Close window"
          className="
            no-drag
            cursor-pointer
            absolute
            top-2
            right-2
            w-7
            h-7
            flex
            items-center
            justify-center
          "
        >
          <XSymbolSvg
            className="
              w-5
              h-5
              fill-[#00A36D]
              hover:fill-[#01744d]
            "
          />
        </button>
      </div>
    </Draggable>
  );
}

export default Window;