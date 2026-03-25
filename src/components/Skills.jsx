import SectionWrapper from './SectionWrapper';
import {
    FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
    FaPython, FaPhp, FaJava
} from 'react-icons/fa';

import {
    SiTailwindcss, SiCplusplus,
    SiMongodb, SiMysql, SiPostman
} from 'react-icons/si';

import { VscVscode } from 'react-icons/vsc';

/* ================= DATA ================= */
const frontendSkills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
];

const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'PHP', icon: <FaPhp className="text-[#777BB4]" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-[#F7DF1E]" /> },
    { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
    { name: 'Java', icon: <FaJava className="text-[#f89820]" /> },
    { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: 'C', icon: <span className="font-bold">C</span> },
    { name: 'Spring Boot', icon: <span className="text-xs font-bold">SB</span> },
];

const toolsSkills = [
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" /> },
];

const softSkills = [
    'Problem Solving',
    'Team Player',
    'Adaptability',
    'Leadership',
];

/* ================= SKILL CARD ================= */
const SkillCard = ({ title, skills }) => (
    <div className="relative p-8 rounded-[2rem] w-full group overflow-hidden"
        style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(10px)'
        }}
    >

        {/* GLOW BG */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
                background: 'radial-gradient(circle at center, rgba(168,85,247,0.15), transparent 70%)'
            }}
        />

        <h3 className="text-2xl font-bold text-center mb-8 group-hover:text-purple-400 transition">
            {title}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all duration-500 cursor-pointer group/skill"
                    style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)'
                    }}
                >

                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/skill:opacity-100 transition duration-500"
                        style={{
                            boxShadow: '0 0 25px rgba(168,85,247,0.4)'
                        }}
                    />

                    {/* ICON */}
                    <div className="text-4xl transition duration-500 group-hover/skill:scale-125 group-hover/skill:rotate-6">
                        {skill.icon}
                    </div>

                    {/* NAME */}
                    <p className="text-xs font-bold uppercase tracking-wider text-center text-gray-300 group-hover/skill:text-purple-400 transition">
                        {skill.name}
                    </p>
                </div>
            ))}
        </div>
    </div>
);

/* ================= SOFT SKILLS ================= */
const SoftSkillCard = ({ skills }) => (
    <div className="p-8 rounded-[2rem] w-full text-center"
        style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(10px)'
        }}
    >
        <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>

        <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
                <span
                    key={index}
                    className="px-5 py-2 rounded-full text-sm transition-all duration-300 hover:scale-110 hover:text-purple-400"
                    style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)'
                    }}
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

/* ================= MAIN ================= */
const Skills = () => {
    return (
        <SectionWrapper id="skills">

            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    My Skills
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Technologies & tools I use to build modern applications.
                </p>
            </div>

            <div className="flex flex-col gap-10 max-w-5xl mx-auto">
                <SkillCard title="Frontend" skills={frontendSkills} />
                <SkillCard title="Backend & Languages" skills={backendSkills} />
                <SkillCard title="Database & Tools" skills={toolsSkills} />
                <SoftSkillCard skills={softSkills} />
            </div>

        </SectionWrapper>
    );
};

export default Skills;