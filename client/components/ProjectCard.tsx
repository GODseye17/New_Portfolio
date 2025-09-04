import DevButton from "./DevButton";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string;
  codeLink?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  liveLink,
  codeLink,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col border border-dev-gray max-w-[331px]">
      <img
        src={image}
        alt={title}
        className="w-full h-[201px] object-cover border-b border-dev-gray"
      />

      <div className="flex flex-wrap gap-2 p-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-dev-gray font-fira-code text-base font-normal"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-4 p-4 border-t border-dev-gray">
        <h3 className="text-dev-white font-fira-code text-2xl font-medium">
          {title}
        </h3>
        <p className="text-dev-gray font-fira-code text-base font-normal">
          {description}
        </p>
        <div className="flex gap-4">
          {liveLink && <DevButton variant="primary">Live &lt;~&gt;</DevButton>}
          {codeLink && <DevButton variant="secondary">Cached &gt;=</DevButton>}
        </div>
      </div>
    </div>
  );
}
