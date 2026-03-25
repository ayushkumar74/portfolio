import SectionWrapper from './SectionWrapper';
import { FiAward, FiBookOpen, FiCoffee, FiCode } from 'react-icons/fi';

const highlights = { 'Full-Stack Developer': true, 'real-world projects': true, 'problem-solving': true };

const HighlightText = ({ children }) => (
    <span className="font-bold text-gradient">{children}</span>
);

const statItems = [
    { icon: <FiAward   className="text-3xl" style={{ color: 'var(--primary)' }} />, label: 'Student',    sub: '3rd Year'   },
    { icon: <FiCode    className="text-3xl" style={{ color: 'var(--accent)' }}  />, label: 'Projects',   sub: '2+ Built'   },
    { icon: <FiBookOpen className="text-3xl" style={{ color: '#10b981' }}        />, label: 'Education',  sub: 'B.Tech CSE' },
    { icon: <FiCoffee  className="text-3xl text-pink-500"                        />, label: 'Passion',    sub: 'Web Dev'    },
];

const About = () => {
    return (
        <SectionWrapper id="about">
            {/* Section header */}
            <div className="text-center mb-16 reveal fade-up">
                <p className="text-gradient font-bold tracking-[0.3em] uppercase mb-3 text-sm">
                    Who I Am
                </p>
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6" style={{ color: 'var(--text)' }}>
                    About Me
                </h2>
                <div
                    className="w-24 h-1.5 mx-auto rounded-full"
                    style={{ background: 'linear-gradient(90deg, var(--primary), var(--primary-end))', boxShadow: '0 0 12px var(--glow-primary)' }}
                />
            </div>

            <div className="flex flex-col xl:flex-row gap-16 items-start">

                {/* Left — Visual card */}
                <div className="w-full xl:w-5/12 reveal fade-right">
                    <div
                        className="glass rounded-3xl p-10 h-full flex flex-col items-center justify-center text-center relative overflow-hidden"
                        style={{ minHeight: '360px' }}
                    >
                        {/* Background gradient wash */}
                        <div
                            className="absolute inset-0 opacity-30"
                            style={{ background: 'linear-gradient(135deg, var(--glow-primary), var(--glow-accent))' }}
                        />
                        <div className="relative z-10">
                            <div
                                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl"
                                style={{
                                    background: 'linear-gradient(135deg, var(--primary), var(--primary-end))',
                                    boxShadow: '0 8px 32px var(--glow-primary)'
                                }}
                            >
                                🧑‍💻
                            </div>
                            <h3 className="text-2xl font-extrabold mb-2 text-gradient">Ayush Kumar</h3>
                            <p className="text-base font-semibold mb-6" style={{ color: 'var(--text-muted)' }}>
                                Full Stack Developer
                            </p>
                            {/* Stat grid */}
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                {statItems.map((s, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-2xl flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform duration-300"
                                        style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
                                    >
                                        {s.icon}
                                        <span className="font-bold text-sm" style={{ color: 'var(--text)' }}>{s.label}</span>
                                        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{s.sub}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right — Professional paragraphs */}
                <div className="w-full xl:w-7/12 space-y-8 reveal fade-left delay-200">
                    <p className="text-xl leading-[1.8] font-medium" style={{ color: 'var(--text)' }}>
                        I am a <HighlightText>Full-Stack Developer</HighlightText> driven by the challenge of turning complex ideas into 
                        smooth, high-performance digital experiences. Currently pursuing my B.Tech in Computer Science, 
                        I bridge the gap between <HighlightText>aesthetic design</HighlightText> and <HighlightText>robust engineering</HighlightText>.
                    </p>

                    <p className="text-lg leading-[1.9]" style={{ color: 'var(--text-muted)' }}>
                        My approach is rooted in building <HighlightText>real-world projects</HighlightText> that solve actual problems. 
                        From developing a real-time scoreboard to engineering comprehensive parking management systems, 
                        I focus on writing clean, maintainable code using <HighlightText>React, Node.js, and modern CSS architectures</HighlightText>.
                    </p>

                    <p className="text-lg leading-[1.9]" style={{ color: 'var(--text-muted)' }}>
                        At my core, I possess a <HighlightText>problem-solving mindset</HighlightText> and an insatiable learning attitude. 
                        I believe that great software is a living entity that requires continuous refinement. I stay at the 
                        forefront of tech to deliver <HighlightText>premium solutions</HighlightText> that leave a lasting impact.
                    </p>

                    {/* Skill highlights bar */}
                    <div
                        className="flex flex-wrap gap-3 mt-6 pt-8"
                        style={{ borderTop: '1px solid var(--border)' }}
                    >
                        {['React.js', 'Node.js', 'Next.js', 'Tailwind', 'MongoDB', 'C++ / DSA'].map(skill => (
                            <div
                                key={skill}
                                className="px-5 py-2.5 rounded-2xl text-[13px] font-bold tracking-wide transition-all glass hover:scale-105"
                                style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                            >
                                <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ background: 'var(--primary)' }} />
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default About;
