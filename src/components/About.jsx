import portrait from "../assets/portrait_10.webp";

function About() {

  return (
    <div className ="w-full h-full grid grid-cols-12 grid-rows-12 gap-x-1 p-y-10 "> 
      
      <div className = " col-start-1 col-end-7 row-start-1 row-end-9">
        <p className=" font-serif text-left text-sm">
          I am Liam Makela, <br></br>
          a student at the University of Nebraksa Lincoln, 
          a Computer Science and Mathematics dual major, the assistant editor at the DailyER Nebraksan, 
          a Learning assistant for CSCE 156, and an aspiring full stack developer. 
        </p>
      </div>

      <div className="col-start-7 col-end-13 row-start-1 row-end-9 gap-y-2 flex">
        <img src={portrait} alt="Portrait" className="w-full h-auto shadow-lg object-cover"/>
      </div>

      <div className = "col-start-1 col-end-13 row-start-9 row-end-13">
        <p className=" font-serif text-left text-sm">
          I work well in teams, check my email often, and am open and interested in research
          or internship oportunities happening summer of 2026. I am available for opportunities around both
          Lincoln NE and Lake Villa IL, and am set to graduate May 2028.
        </p>
      </div>

    </div>
  );
}

export default About