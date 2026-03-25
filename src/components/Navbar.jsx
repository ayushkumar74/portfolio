import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Resume', to: 'resume' }, // ✅ ADDED
    { name: 'Certificates', to: 'certificates' },
    { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        let sectionData = [];

        const updateSectionData = () => {
            sectionData = navLinks.map(l => {
                const el = document.getElementById(l.to);
                return { id: l.to, offset: el ? el.offsetTop : 0 };
            });
        };

        updateSectionData();
        setIsScrolled(window.scrollY > 50);

        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);

            for (let i = sectionData.length - 1; i >= 0; i--) {
                if (scrollY >= sectionData[i].offset - 160) {
                    setActiveSection(sectionData[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateSectionData);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateSectionData);
        };
    }, []);

    const scrollTo = (e, id) => {
        e.preventDefault();
        setIsOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
    };

    return (
        <nav
            className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-3 shadow-xl' : 'py-4'
                }`}
            style={{
                background: isScrolled ? 'rgba(10,10,25,0.7)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(16px)' : 'none',
            }}
        >
            <div className="w-full px-4 md:px-10 flex items-center justify-between">

                {/* 🔥 LOGO LEFT */}
                <a
                    href="#home"
                    onClick={(e) => scrollTo(e, 'home')}
                    className="text-2xl font-black text-gradient hover:scale-110 transition"
                >
                    AK.
                </a>

                {/* 🔥 CENTER NAV */}
                <div className="hidden md:flex items-center gap-6">

                    <ul
                        className="flex items-center gap-2 px-3 py-2 rounded-full"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(12px)'
                        }}
                    >
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <a
                                    href={`#${link.to}`}
                                    onClick={(e) => scrollTo(e, link.to)}
                                    className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeSection === link.to
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-purple-400'
                                        }`}
                                >

                                    {/* ACTIVE GLOW */}
                                    {activeSection === link.to && (
                                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-100 blur-md -z-10"></span>
                                    )}

                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* 🔥 THEME BUTTON */}
                    <div
                        className="p-2 rounded-full hover:scale-110 transition"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <ThemeToggle />
                    </div>
                </div>

                {/* 🔥 MOBILE */}
                <div className="md:hidden flex items-center gap-3">
                    <ThemeToggle />

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg bg-white/10"
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* 🔥 MOBILE MENU */}
            <div
                className={`md:hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                style={{
                    background: 'rgba(10,10,25,0.95)',
                    backdropFilter: 'blur(20px)'
                }}
            >
                {navLinks.map(link => (
                    <a
                        key={link.name}
                        href={`#${link.to}`}
                        onClick={(e) => scrollTo(e, link.to)}
                        className={`block text-center py-3 text-lg ${activeSection === link.to
                            ? 'text-purple-400 font-bold'
                            : 'text-gray-300'
                            }`}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;