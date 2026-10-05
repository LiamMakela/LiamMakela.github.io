function Links() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="font-bold font-serif text-2xl">
        Find me online
      </h1>

      <ul className="flex flex-col gap-2">
        <li>
          <a
            href="https://www.linkedin.com/in/liam-makela/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#00A36D]"
          >
            LinkedIn
          </a>
        </li>

        <li>
          <a
            href="https://github.com/LiamMakela"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#00A36D]"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            href="https://leetcode.com/u/LiamMakela/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#00A36D]"
          >
            LeetCode
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;