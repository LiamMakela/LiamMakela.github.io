const projects = [
  {
    name: "Virelai",
    description:
      "Distributed video streaming and analytics platform with asynchronous video processing and realtime telemetry.",
    tech:
      "FastAPI · Kafka · PostgreSQL · Redis · React · FFmpeg · AWS",
    github:
      "https://github.com/LiamMakela/Virelai",
  },
  {
    name: "GoLoad",
    description:
      "Reverse proxy and load balancer written in Go with health checks, retries, rate limiting, metrics, and WebSocket support.",
    tech:
      "Go · HTTP · Reverse Proxy · WebSockets · Kubernetes",
    github:
      "https://github.com/LiamMakela/GoLoad",
  },
  {
    name: "Connect-4",
    description:
      "Realtime multiplayer Connect Four application backed by WebSockets and deployed with multiple backend instances.",
    tech:
      "React · FastAPI · WebSockets · Redis · Kubernetes",
    github:
      "https://github.com/LiamMakela/Connect-4",
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-5 pr-5">
      <h1 className="font-serif font-bold text-2xl">
        Projects
      </h1>

      {projects.map((project) => (
        <div
          key={project.name}
          className="border-b border-gray-300 pb-4"
        >
          <h2 className="font-bold text-xl">
            {project.name}
          </h2>

          <p className="text-sm mt-1 leading-relaxed">
            {project.description}
          </p>

          <p className="text-xs text-gray-600 mt-2">
            {project.tech}
          </p>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-2
              underline
              hover:text-[#00A36D]
            "
          >
            GitHub →
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;