import forest from "../assets/forest.png";
import mountain from "../assets/mountain2.png";

function BgLayer({ svgHover, mouse }) {
  return (
    <div> 
      <img src={forest} alt="" className={`absolute inset-0 w-full h-full object-cover z-10 pointer-events-none scale-110 transition-transform duration-300 ease-out`} 
        style={{
          transform: `
            translate(${svgHover ? mouse.x * 20 : 0}px, ${svgHover ? mouse.y * 8 : 0}px)
            scale(${svgHover ? 1 : 1})
          `,
        }}
      />
            
      <img src={mountain} alt="" className={`absolute inset-0 w-full h-full object-cover z-0 pointer-events-none`}/>
    </div>
  );
}

export default BgLayer