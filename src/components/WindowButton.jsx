import { createElement } from "react";

function WindowButton({ onClick, text, IconComponent }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        pointer-events-auto
        flex
        flex-col
        items-center
        gap-1
        cursor-pointer
        group
      "
    >
      {createElement(IconComponent, {
        className:
          "w-12 h-12 transition-transform duration-150 group-hover:fill-[#00A36D] group-hover:scale-110",
      })}

      <span>{text}</span>
    </button>
  );
}

export default WindowButton;