function Mail() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="font-bold font-serif text-2xl">
        Get in touch
      </h1>

      <p>
        The best way to reach me is by email.
      </p>

      <div className="flex flex-col gap-2">
        <a
          href="mailto:liammakela06@gmail.com"
          className="underline hover:text-[#00A36D]"
        >
          liammakela06@gmail.com
        </a>

        <a
          href="mailto:lmakela2@huskers.unl.edu"
          className="underline hover:text-[#00A36D]"
        >
          lmakela2@huskers.unl.edu
        </a>
      </div>
    </div>
  );
}

export default Mail;