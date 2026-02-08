
function WindowButton({ onClick,  text, Icon}) {

  return (
    <button
        onClick={ onClick }
        className="pointer-events-auto"
    >
        <Icon className = "pointer-events-auto hover:transition-linear hover:fill-[#00A36D] hover:scale-110"/>
        {text}
    </button>
  );
}

export default WindowButton