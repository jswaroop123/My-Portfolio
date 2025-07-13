interface ExperienceCardProps {
    role: string;
    company: string;
    companyUrl: string;
    duration: string;
    description: string;
    projectName?: string; // Optional property for project name
    projectUrl?: string; // Optional property for project URL
  }
  
  const Card = ({
    role,
    company,
    companyUrl,
    duration,
    description,
    projectName,
    projectUrl,
  }: ExperienceCardProps) => {
    return (
      <div className="bg-[#3e3636] p-4 py-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 px-9 w-fit">
        <div className="flex flex-row flex-wrap gap-3 items-center">
          <h2 className="text-start text-xl font-bold text-amber-100">{role}</h2>
  
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-50 hover:text-amber-100 px-1 bg-purple-500 rounded-3xl cursor-pointer"
          >
            {company}
          </a>
  
          <span className="text-sm text-white bg-gray-600 px-1 rounded-3xl">
            {duration}
          </span>
        </div>
  
        <p className="mt-2 text-white">{description}</p>

        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-amber-50 hover:text-amber-100 px-1 bg-purple-500 rounded-3xl cursor-pointer">
          {projectName}
        </a>
      </div>
    );
  };
  
  export default Card;