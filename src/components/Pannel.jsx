import WindowButton from "./WindowButton.jsx";
import Mailsvg from "../assets/email.svg?react";
import Linksvg from "../assets/link-variant.svg?react";
import GitHubsvg from "../assets/github.svg?react";
import Questionsvg from "../assets/question.svg?react";

function Pannel({ setWindowAboutOpen,  setWindowOpen, setWindowMailOpen, setWindowLinksOpen}) {

  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 pointer-events-none">

        <div className="pointer-events-auto bg-[#F5F5F5] text-gray-800  stroke-grey-800 font-sans rounded-m shadow-xl/20 p-8 flex flex-col items-center gap-4">
          
          <h1 className="text-5xl font-bold text-gray-800">
            Hi, I’m Liam
          </h1>

          <p>
            Mathematics + Computer Science, UNL 2028
          </p>

          <div className="grid grid-cols-4 gap-16">
            <WindowButton onClick={setWindowAboutOpen} text = {"About"} Icon = {Questionsvg}/>
            <WindowButton onClick={() => {window.open('https://github.com/LiamMakela', '_blank', 'noopener noreferrer'); }} text = {"Projects"} Icon = {GitHubsvg}/>
            <WindowButton onClick={setWindowMailOpen} text = {"Mail"} Icon = {Mailsvg}/>
            <WindowButton onClick={setWindowLinksOpen} text = {"Links"} Icon = {Linksvg}/>
          </div>

        </div>
    </div>
  );
}

export default Pannel