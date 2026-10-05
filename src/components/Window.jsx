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
      handle=".drag-handle"
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
          shadow-xl
          overflow-hidden
        "
      >
        <div
          className="
            drag-handle
            h-9
            cursor-move
            border-b
            border-gray-300
            bg-gray-100
          "
        >
          <button
            type="button"
            onClick={closeWindow}
            aria-label="Close window"
            className="
              absolute
              top-1
              right-1
              w-7
              h-7
              flex
              items-center
              justify-center
              cursor-pointer
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

        <div
          className="
            p-5
            overflow-auto
          "
          style={{
            height: "calc(100% - 2.25rem)",
          }}
        >
          {children}
        </div>
      </div>
    </Draggable>
  );
}

export default Window;