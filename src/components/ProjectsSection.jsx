import { ArrowRight, ExternalLink, Github } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Movie Recommendation system",
    description: "A content-filtering method recommend system.",
    images: [
      "/projects/project1-1.png",
      "/projects/project1-2.png",
      "/projects/project1-3.png",
    ],
    tags: ["Python", "TailwindCSS", "Flask","Ml"],
    demoUrl: "http://16.16.126.1:5000/",
    githubUrl: "https://github.com/periyasamyj/movie_recommendation_system",
  },
  {
    id: 2,
    title: "OD Management Sysetem",
    description:
      "i have developed On duty management system for college ",
    images: ["/projects/project2-1.png",
      "/projects/project2-2.png",
      "/projects/project2-3.png",


    ], // only one image
    tags: ["reactjs", "node.js", "Mongodb"],
    demoUrl: "#",
    githubUrl: "https://github.com/periyasamyj/OD_Management_Sytem",
  },
  {
    id: 3,
    title: "E-Learning Website",
    description:
      "Full-featured E-Learning  platform with user authentication , course and userDetails.",
    images: ["/projects/project3-1.png", "/projects/project3-2.png","/projects/project3-3.png"],
    tags: ["python-flask", "mongoDb-atles ", "Stripe"],
    demoUrl: "https://website-e-earning.onrender.com/#",
    githubUrl: "https://github.com/periyasamyj/website-e-earning",
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, key) => (
    <ProjectCard key={key} project={project} />
  ))}
</div>


        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/periyasamyj"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
