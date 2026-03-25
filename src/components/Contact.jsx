import SectionWrapper from './SectionWrapper';
import { useState } from 'react';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';

const contactInfo = [
    {
        icon: <HiOutlineMail className="text-2xl" />,
        label: 'Email',
        value: 'ayushkumar90657@gmail.com',
        href: 'mailto:ayushkumar90657@gmail.com',
    },
    {
        icon: <HiOutlineLocationMarker className="text-2xl" />,
        label: 'Location',
        value: 'Phagwara, Punjab',
        href: null,
    },
    {
        icon: <HiOutlinePhone className="text-2xl" />,
        label: 'Phone',
        value: '+91 6202041174',
        href: 'tel:+916202041174',
    },
];

const Contact = () => {
    const [formData, setFormData]     = useState({ name: '', email: '', message: '' });
    const [errors, setErrors]         = useState({});
    const [isSubmitting, setSubmitting] = useState(false);
    const [success, setSuccess]       = useState(false);

    const validate = () => {
        const e = {};
        if (!formData.name.trim()) e.name = 'Name is required';
        if (!formData.email)        e.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Email is invalid';
        if (!formData.message.trim()) e.message = 'Message is required';
        setErrors(e);
        return !Object.keys(e).length;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false); setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData(d => ({ ...d, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: null }));
    };

    const inputBase = `w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all bg-transparent text-[var(--text)] placeholder:text-[var(--text-subtle)]`;
    const inputOk   = `border-[var(--border)] focus:border-[var(--primary)] focus:ring-[var(--glow-primary)]`;
    const inputErr  = `border-red-500 focus:ring-red-400`;

    return (
        <SectionWrapper id="contact">
            {/* Header */}
            <div className="text-center mb-16 reveal fade-up">
                <p className="text-gradient font-bold tracking-[0.3em] uppercase mb-3 text-sm">
                    Let's Talk
                </p>
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6" style={{ color: 'var(--text)' }}>
                    Get In Touch
                </h2>
                <div
                    className="w-24 h-1.5 mx-auto rounded-full mb-8"
                    style={{ background: 'linear-gradient(90deg, var(--primary), var(--primary-end))', boxShadow: '0 0 12px var(--glow-primary)' }}
                />
                <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    I'm currently open to new opportunities. Whether you have a project in mind, a question,
                    or just want to say hi — I'd love to hear from you!
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto">

                {/* Left — Contact info */}
                <div className="w-full lg:w-5/12 space-y-6 reveal fade-right">
                    {/* Contact cards */}
                    {contactInfo.map(({ icon, label, value, href }, i) => (
                        <div
                            key={label}
                            className="glass rounded-2xl p-5 flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300"
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{
                                    background: 'linear-gradient(135deg, var(--primary), var(--primary-end))',
                                    color: '#fff',
                                    boxShadow: '0 4px 16px var(--glow-primary)'
                                }}
                            >
                                {icon}
                            </div>
                            <div>
                                <p className="text-xs font-bold tracking-wider uppercase mb-0.5" style={{ color: 'var(--text-subtle)' }}>
                                    {label}
                                </p>
                                {href
                                    ? <a href={href} className="text-sm font-semibold hover:text-[var(--primary)] transition-colors" style={{ color: 'var(--text)' }}>{value}</a>
                                    : <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{value}</p>
                                }
                            </div>
                        </div>
                    ))}

                    {/* Social links */}
                    <div
                        className="glass rounded-2xl p-5"
                    >
                        <p className="text-xs font-bold tracking-wider uppercase mb-4" style={{ color: 'var(--text-subtle)' }}>
                            Find me on
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { icon: <FiGithub    className="w-5 h-5" />, href: 'https://github.com/ayushkumar74',  label: 'GitHub',    color: '#ffffff', glow: 'rgba(255,255,255,0.4)' },
                                { icon: <FiLinkedin  className="w-5 h-5" />, href: 'https://linkedin.com',              label: 'LinkedIn',  color: '#0077b5', glow: 'rgba(0,119,181,0.4)' },
                                { icon: <FiInstagram className="w-5 h-5" />, href: 'https://instagram.com',             label: 'Instagram', color: '#e1306c', glow: 'rgba(225,48,108,0.4)' },
                                { icon: <FiTwitter   className="w-5 h-5" />, href: 'https://twitter.com',               label: 'Twitter',   color: '#1DA1F2', glow: 'rgba(29,161,242,0.4)' },
                                { icon: <FiMail      className="w-5 h-5" />, href: 'mailto:ayushkumar90657@gmail.com', label: 'Email',     color: '#ea4335', glow: 'rgba(234,67,53,0.4)'    },
                            ].map(({ icon, href, label, color, glow }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="group w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-115 hover:-translate-y-2 hover:rotate-[8deg] relative"
                                    style={{
                                        background: 'var(--surface-2)',
                                        border: '1px solid var(--border)',
                                        color: 'var(--text-muted)',
                                        '--hover-color': color,
                                        '--hover-glow': glow
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.color = 'var(--hover-color)';
                                        e.currentTarget.style.borderColor = 'var(--hover-color)';
                                        e.currentTarget.style.boxShadow = `0 10px 20px -5px var(--hover-glow)`;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.color = 'var(--text-muted)';
                                        e.currentTarget.style.borderColor = 'var(--border)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div className="z-10 transition-transform duration-500 group-hover:scale-110">
                                        {icon}
                                    </div>
                                    <div className="absolute inset-0 rounded-xl bg-current opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right — Form */}
                <div className="w-full lg:w-7/12 glass rounded-3xl p-8 reveal fade-left delay-200">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Name</label>
                                <input
                                    type="text" id="name" name="name"
                                    value={formData.name} onChange={handleChange}
                                    className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
                                    placeholder="Your name"
                                />
                                {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Email</label>
                                <input
                                    type="email" id="email" name="email"
                                    value={formData.email} onChange={handleChange}
                                    className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                                    placeholder="your@email.com"
                                />
                                {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Message</label>
                            <textarea
                                id="message" name="message" rows="5"
                                value={formData.message} onChange={handleChange}
                                className={`${inputBase} resize-none ${errors.message ? inputErr : inputOk}`}
                                placeholder="How can I help you?"
                            />
                            {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 rounded-xl font-bold text-white text-base transition-all overflow-hidden relative group ${
                                isSubmitting ? 'opacity-70' : 'btn-primary'
                            }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-700 transition-transform" />
                            <span className="relative z-10">
                                {isSubmitting ? 'Sending…' : 'Send Message →'}
                            </span>
                        </button>

                        <div className={`transition-all duration-400 overflow-hidden ${success ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="text-emerald-500 text-center font-semibold bg-emerald-500/10 py-3 rounded-xl border border-emerald-500/20">
                                ✓ Message sent successfully!
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
