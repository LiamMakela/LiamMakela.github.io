import WindowButton from "./WindowButton.jsx";
import Mailsvg from "../assets/email.svg?react";
import Linksvg from "../assets/link-variant.svg?react";
import GitHubsvg from "../assets/github.svg?react";
import Questionsvg from "../assets/question.svg?react";

function Panel({
  setWindowAboutOpen,
  setWindowProjectsOpen,
  setWindowMailOpen,
  setWindowLinksOpen,
}) {
  return (
    <div
      className="
        absolute
        inset-0
        z-20
        flex
        flex-col
        items-center
        justify-center
        pointer-events-none
        px-4
      "
    >
      <div
        className="
          pointer-events-auto
          bg-[#F5F5F5]
          text-gray-800
          font-sans
          rounded-md
          shadow-xl
          p-8
          flex
          flex-col
          items-center
          gap-5
          max-w-full
        "
      >
        <h1 className="text-5xl font-bold text-gray-800 text-center">
          Hi, I&apos;m Liam
        </h1>

        <div className="text-center">
          <p className="font-medium">
            Computer Science + Mathematics @ UNL
          </p>

          <p className="text-sm text-gray-600 mt-1">
            Backend · Distributed Systems · Cloud Infrastructure
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-4
            gap-8
            sm:gap-12
            mt-2
          "
        >
          <WindowButton
            onClick={() => setWindowAboutOpen(true)}
            text="About"
            IconComponent={Questionsvg}
          />

          <WindowButton
            onClick={() => setWindowProjectsOpen(true)}
            text="Projects"
            IconComponent={GitHubsvg}
          />

          <WindowButton
            onClick={() => setWindowMailOpen(true)}
            text="Mail"
            IconComponent={Mailsvg}
          />

          <WindowButton
            onClick={() => setWindowLinksOpen(true)}
            text="Links"
            IconComponent={Linksvg}
          />
        </div>
      </div>
    </div>
  );
}

export default Panel;