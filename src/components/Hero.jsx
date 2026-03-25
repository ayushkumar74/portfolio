import { useEffect, useState, useRef } from 'react';
import { FiEye, FiDownload, FiFileText } from 'react-icons/fi';
import useMagnetic from '../hooks/useMagnetic';
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiTwitter } from 'react-icons/fi';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const typingSpeed = 100;
    const roles = ['Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast'];

    const textRef = useRef(null);
    const imageRef = useRef(null);
    const heroRef = useRef(null);
    const magneticBtn1 = useMagnetic(0.2);
    const magneticBtn2 = useMagnetic(0.2);

    // ── Mouse parallax ─────────────────────────────────────────────
    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) return;
        let frameId;
        const handleMouseMove = (e) => {
            const { innerWidth: width, innerHeight: height } = window;
            if (frameId) cancelAnimationFrame(frameId);
            frameId = requestAnimationFrame(() => {
                const xN = (e.clientX / width - 0.5) * 2;
                const yN = (e.clientY / height - 0.5) * 2;
                if (textRef.current)
                    textRef.current.style.transform = `translate3d(${xN * 12}px, ${yN * 8}px, 0)`;
                if (imageRef.current)
                    imageRef.current.style.transform =
                        `translate3d(${xN * -16}px, ${yN * -12}px, 0) rotateX(${yN * -7}deg) rotateY(${xN * 7}deg)`;
            });
        };
        const hero = heroRef.current;
        if (hero) hero.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            if (hero) hero.removeEventListener('mousemove', handleMouseMove);
            if (frameId) cancelAnimationFrame(frameId);
        };
    }, []);

    // ── Typing animation ───────────────────────────────────────────
    useEffect(() => {
        const ticker = setInterval(() => {
            const fullText = roles[loopNum % roles.length];
            const updated = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);
            setText(updated);
            if (!isDeleting && updated === fullText)
                setTimeout(() => setIsDeleting(true), 1800);
            else if (isDeleting && updated === '') { setIsDeleting(false); setLoopNum(n => n + 1); }
        }, isDeleting ? typingSpeed / 2 : typingSpeed);
        return () => clearInterval(ticker);
    }, [text, isDeleting, loopNum]);

    const socials = [
        { icon: <FiGithub className="w-5 h-5" />, href: 'https://github.com/ayushkumar74', label: 'GitHub', color: '#ffffff', glow: 'rgba(255,255,255,0.4)' },
        { icon: <FiLinkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/ayushkumar74/', label: 'LinkedIn', color: '#0077b5', glow: 'rgba(0,119,181,0.4)' },
        { icon: <FiInstagram className="w-5 h-5" />, href: 'https://instagram.com', label: 'Instagram', color: '#e1306c', glow: 'rgba(225,48,108,0.4)' },
        { icon: <FiTwitter className="w-5 h-5" />, href: 'https://x.com/ayushkumar057', label: 'Twitter', color: '#1DA1F2', glow: 'rgba(29,161,242,0.4)' },
        { icon: <FiMail className="w-5 h-5" />, href: 'mailto:ayushkumar90657@gmail.com', label: 'Email', color: '#ea4335', glow: 'rgba(234,67,53,0.4)' },
    ];

    return (
        <section
            id="home"
            ref={heroRef}
            className="cinema-section is-active relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-animated-mesh"
            style={{ perspective: '1200px' }}
        >
            {/* Ultra Premium Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] animate-blob" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-purple-500/10 blur-[120px] animate-blob" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-pink-500/5 blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />
            </div>

            {/* Scrolling background text */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none z-0 select-none flex whitespace-nowrap opacity-[0.02] dark:opacity-[0.05]">
                <span className="text-[10rem] lg:text-[14rem] font-black stroke-text animate-slide-left">
                    DEVELOPER &bull; CREATOR &bull; BUILDER &bull; DEVELOPER &bull;&nbsp;
                </span>
            </div>

            <div className="z-10 px-6 max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* ── Left: Content ── */}
                <div
                    ref={textRef}
                    className="flex-1 text-center lg:text-left will-change-transform"
                    style={{ transition: 'transform 0.10s linear', transformStyle: 'preserve-3d' }}
                >
                    {/* Status badge */}
                    <div
                        className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full reveal fade-up active"
                        style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.8)]"></span>
                        <p className="text-gradient font-bold tracking-[0.4em] uppercase text-[10px]">
                            Welcome! To My Portfolio
                        </p>
                    </div>

                    {/* Name — full gradient so both words animate together */}
                    <h1 className="reveal fade-up delay-100 active font-black leading-[0.88] tracking-tighter mb-6 text-6xl md:text-8xl lg:text-[7.5rem]">
                        <span
                            className="inline-block text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:skew-x-[-2deg] hover:scale-[1.02] transition-all duration-700 cursor-default"
                            style={{
                                animation: 'text-gradient-x 4s linear infinite',
                                filter: 'drop-shadow(0 0 30px rgba(99,102,241,0.0))'
                            }}
                            onMouseEnter={e => e.currentTarget.style.filter = 'drop-shadow(0 0 50px rgba(168,85,247,0.5))'}
                            onMouseLeave={e => e.currentTarget.style.filter = 'drop-shadow(0 0 30px rgba(99,102,241,0.0))'}
                        >
                            Ayush{' '}
                            <br className="hidden lg:block" />
                            Kumar
                        </span>
                    </h1>

                    {/* Tagline */}
                    <p
                        className="reveal fade-up delay-150 active text-base md:text-lg font-bold tracking-[0.2em] uppercase mb-8 opacity-70"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        Full Stack Developer &bull; Building Solutions
                    </p>

                    {/* Typing role */}
                    <div
                        className="reveal fade-up delay-200 active flex items-center justify-center lg:justify-start gap-3 text-xl md:text-2xl mb-10 h-10"
                    >
                        <span style={{ color: 'var(--text-subtle)' }} className="font-light">I am a</span>
                        <span
                            className="font-bold border-r-[3px] border-[var(--primary)] pr-2 text-gradient"
                        >
                            {text}
                        </span>
                    </div>

                    <div className="reveal fade-up delay-300 active flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-12">
                        {socials.map(({ icon, href, label, color, glow }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="group w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-115 hover:-translate-y-2 hover:rotate-[8deg] relative"
                                style={{
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                    color: 'var(--text-muted)',
                                    boxShadow: 'var(--card-shadow)',
                                    '--hover-color': color,
                                    '--hover-glow': glow
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.color = 'var(--hover-color)';
                                    e.currentTarget.style.borderColor = 'var(--hover-color)';
                                    e.currentTarget.style.boxShadow = `0 20px 40px -8px var(--hover-glow)`;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.color = 'var(--text-muted)';
                                    e.currentTarget.style.borderColor = 'var(--border)';
                                    e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                                }}
                            >
                                <div className="z-10 transition-all duration-500 group-hover:scale-110">
                                    {icon}
                                </div>
                                {/* Subtle brand tint on hover */}
                                <div className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="reveal fade-up delay-400 active flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">

                        {/* 🔥 VIEW PROJECT */}
                        <div ref={magneticBtn1}>
                            <a
                                href="#projects"
                                onClick={e => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="btn-primary inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-base shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                            >
                                View Projects
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>

                        {/* 🔥 CONTACT */}
                        <div ref={magneticBtn2}>
                            <a
                                href="#contact"
                                onClick={e => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="btn-outline inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-base shadow-lg hover:-translate-y-1.5 transition-all duration-300"
                            >
                                Contact Me
                            </a>
                        </div>

                        {/* 🔥 ULTRA RESUME CARD */}
                        <div className="relative group">

                            {/* MAIN CARD */}
                            <div
                                className="w-[190px] h-[130px] flex flex-col items-center justify-center gap-3 rounded-[1.5rem] transition-all duration-500 cursor-pointer relative overflow-hidden"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(14px)'
                                }}
                            >

                                {/* 🔮 GLOW BACKGROUND */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                                    style={{
                                        background: 'radial-gradient(circle at center, rgba(168,85,247,0.25), transparent 70%)'
                                    }}
                                />

                                {/* ICON */}
                                <FiFileText className="text-4xl text-white/80 transition duration-500 group-hover:scale-110 group-hover:rotate-6" />

                                {/* TEXT */}
                                <span className="text-sm font-semibold text-white/80 tracking-wide group-hover:text-purple-400 transition">
                                    Resume
                                </span>

                                {/* BORDER GLOW */}
                                <div className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition duration-500"
                                    style={{
                                        boxShadow: '0 0 40px rgba(168,85,247,0.4)'
                                    }}
                                />

                            </div>

                            {/* 🔥 HOVER OPTIONS */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">

                                {/* GLASS OVERLAY */}
                                <div className="absolute inset-0 rounded-[1.5rem] bg-black/40 backdrop-blur-md" />

                                {/* VIEW */}
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 p-3 rounded-full bg-white/10 hover:bg-purple-500/30 transition-all duration-300 hover:scale-110"
                                >
                                    <FiEye className="text-lg" />
                                </a>

                                {/* DOWNLOAD */}
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="relative z-10 p-3 rounded-full bg-white/10 hover:bg-purple-500/30 transition-all duration-300 hover:scale-110"
                                >
                                    <FiDownload className="text-lg" />
                                </a>

                            </div>
                        </div>

                    </div>
                </div>

                {/* ── Right: Profile image ── */}
                <div className="flex-1 flex justify-center lg:justify-end reveal fade-left delay-400 active relative group">
                    {/* Enhanced background glow orbs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[120px] opacity-40 group-hover:opacity-60 transition-opacity duration-1000"
                        style={{ background: 'radial-gradient(circle, var(--glow-primary) 0%, transparent 70%)' }} />

                    {/* 3D floating orb */}
                    <div
                        ref={imageRef}
                        className="relative w-72 h-72 md:w-[24rem] md:h-[24rem] lg:w-[28rem] lg:h-[28rem] will-change-transform animate-float"
                        style={{ transition: 'transform 0.15s ease-out', transformStyle: 'preserve-3d' }}
                    >
                        {/* Advanced Decorative Rings */}
                        <div className="absolute inset-[-8%] rounded-full border-[1.5px] border-dashed opacity-40 animate-spin-slow"
                            style={{ borderColor: 'var(--primary)', opacity: 0.3 }} />
                        <div className="absolute inset-[-15%] rounded-full border-[1px] border-dashed opacity-20 animate-spin-slow-r"
                            style={{ borderColor: 'var(--accent)', opacity: 0.2 }} />
                        <div className="absolute inset-[-25%] rounded-full border-[0.5px] border-white/5 dark:border-white/10" />

                        {/* Pulsing glow behind image */}
                        <div
                            className="absolute inset-[2%] rounded-full blur-3xl animate-pulse-glow"
                            style={{ background: `linear-gradient(135deg, var(--glow-primary), var(--glow-accent))`, opacity: 0.6 }}
                        />

                        {/* Image container — rounded circle with glowing border */}
                        <div
                            className="absolute inset-0 rounded-full overflow-hidden transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-[1deg]"
                            style={{
                                background: 'var(--surface)',
                                border: '4px solid rgba(168, 85, 247, 0.4)',
                                backgroundClip: 'padding-box',
                                boxShadow: `inset 0 0 20px rgba(168,85,247,0.5), 0 0 0 1px var(--border), 0 30px 100px rgba(0,0,0,0.4), 0 0 60px rgba(139,92,246,0.6)`
                            }}
                        >
                            {/* Profile image */}
                            <img
                                src="/image.jpg"
                                alt="Ayush Kumar"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                style={{ objectPosition: 'center 30%' }}
                            />
                            {/* Subtle glass overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none mix-blend-overlay" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-2 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3 group reveal fade-up delay-700 active z-10"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ cursor: 'pointer' }}
            >
                <span
                    className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-300 group-hover:text-[var(--primary)] group-hover:tracking-[0.6em]"
                    style={{ color: 'var(--text-subtle)' }}
                >
                    Explore
                </span>

                <div
                    className="w-6 md:w-7 h-10 md:h-12 rounded-full border-2 flex justify-center pt-2 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:h-12 md:group-hover:h-14"
                    style={{ borderColor: 'var(--border)' }}
                >
                    <div className="... gap-6 mb-16">
                        <div
                            className="w-1 h-2 md:w-1.5 md:h-3 rounded-full animate-bounce"
                            style={{ background: 'var(--primary)' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
