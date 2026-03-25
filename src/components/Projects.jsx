import SectionWrapper from './SectionWrapper';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projectBaseInfo = [
    {
        title: "Real-Time-scoreboard",
        description: "A real-time scoreboard for tracking scores of two teams with a timer and point control system.",
        tags: ["React", "Tailwind CSS", "PHP"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        liveUrl: "#",
        githubUrl: "https://github.com/ayushkumar74/Real-Time-scoreboard"
    },
    {
        title: "Parking Solution",
        description: "Smart parking system to find, book and manage parking slots efficiently.",
        tags: ["React", "Node.js", "MongoDB"],
        image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
        liveUrl: "#",
        githubUrl: "https://github.com/ayushkumar74/Parking_Solution"
    },
];

const Projects = () => {
    return (
        <SectionWrapper id="projects">

            {/* HEADER */}
            <div className="text-center mb-20">
                <p className="text-gradient font-bold tracking-[0.3em] uppercase mb-3 text-sm">
                    My Work
                </p>

                <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                    Featured Projects
                </h2>

                <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"></div>

                <p className="max-w-xl mx-auto text-gray-400">
                    Some of my best projects showcasing real-world problem solving and modern tech stack.
                </p>
            </div>

            {/* GRID FIXED + CENTERED */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">

                {projectBaseInfo.map((project, index) => (
                    <div
                        key={index}
                        className="group relative rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03]"
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            backdropFilter: 'blur(12px)'
                        }}
                    >

                        {/* IMAGE */}
                        <div className="relative h-60 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* HOVER OVERLAY */}
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center gap-4">

                                <a
                                    href={project.liveUrl}
                                    className="px-6 py-3 bg-white text-black rounded-full text-sm font-bold flex items-center gap-2 hover:scale-110 transition"
                                >
                                    <FiExternalLink /> Live
                                </a>

                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border border-white text-white rounded-full text-sm font-bold flex items-center gap-2 hover:bg-white hover:text-black transition"
                                >
                                    <FiGithub /> Code
                                </a>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-6 flex flex-col">
                            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-5">
                                {project.description}
                            </p>

                            {/* TAGS */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 hover:border-purple-400 hover:text-purple-400 transition"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* GLOW EFFECT */}
                        <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                            style={{
                                boxShadow: '0 0 40px rgba(168,85,247,0.3)'
                            }}
                        />
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;