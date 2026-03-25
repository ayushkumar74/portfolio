import SectionWrapper from './SectionWrapper';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
    return (
        <SectionWrapper id="resume">

            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">My Resume</h2>
                <p className="text-gray-400">Download or view my professional resume</p>
            </div>

            {/* CARD */}
            <div className="max-w-3xl mx-auto">

                <div className="relative group p-10 rounded-[2rem] overflow-hidden text-center"
                    style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(15px)'
                    }}
                >

                    {/* 🔥 GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                        style={{
                            background: 'radial-gradient(circle at center, rgba(168,85,247,0.2), transparent 70%)'
                        }}
                    />

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition">
                        Download Resume
                    </h3>

                    <p className="text-gray-400 mb-6">
                        Get a detailed overview of my skills, experience, and projects.
                    </p>

                    {/* BUTTON */}
                    <a
                        href="/resume.pdf"   // 👉 apna resume yaha daal
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:scale-110 transition"
                    >
                        <FiDownload /> Download CV
                    </a>

                    {/* BORDER GLOW */}
                    <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition"
                        style={{
                            boxShadow: '0 0 40px rgba(168,85,247,0.4)'
                        }}
                    />

                </div>

            </div>

        </SectionWrapper>
    );
};

export default Resume;