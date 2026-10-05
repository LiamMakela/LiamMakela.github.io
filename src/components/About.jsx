import portrait from "../assets/portrait_10.webp";

function About() {
  return (
    <div className="flex flex-col gap-5 pr-5">
      <h1 className="font-serif font-bold text-2xl">
        About Me
      </h1>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-[1fr_180px]
          gap-5
          items-start
        "
      >
        <div className="flex flex-col gap-4">
          <p className="font-serif text-sm leading-relaxed">
            I&apos;m Liam Makela, a Computer Science and
            Mathematics student at the University of
            Nebraska–Lincoln graduating in May 2028.
          </p>

          <p className="font-serif text-sm leading-relaxed">
            I&apos;m primarily interested in backend and systems
            engineering, especially distributed systems,
            networking, cloud infrastructure, and performance.
          </p>

          <p className="font-serif text-sm leading-relaxed">
            I currently work as an undergraduate researcher and
            CS learning assistant while building projects involving
            load balancing, distributed applications, Kubernetes,
            streaming systems, and cloud infrastructure.
          </p>

          <p className="font-serif text-sm leading-relaxed">
            I&apos;m currently seeking software engineering
            opportunities for Summer 2027.
          </p>
        </div>

        <img
          src={portrait}
          alt="Liam Makela"
          className="
            w-full
            max-w-[180px]
            mx-auto
            shadow-lg
            object-cover
          "
        />
      </div>
    </div>
  );
}

export default About;