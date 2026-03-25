import { useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import { FiExternalLink } from 'react-icons/fi';

const certificateCategories = [
  {
    title: 'Programming Languages',
    items: [
      {
        name: 'C Programming',
        platform: 'Iamneo',
        description: 'Strong foundation in C programming and problem solving.',
        year: '2024',
        file: '/C programming(iam neo).pdf'
      },
      {
        name: 'C++ Programming',
        platform: 'Iamneo',
        description: 'Object-oriented programming concepts using C++.',
        year: '2024',
        file: '/C++(iam neo).pdf'
      },
      {
        name: 'Data Structures (DSA)',
        platform: 'Iamneo',
        description: 'Core data structures and problem-solving techniques.',
        year: '2024',
        file: '/DSA(iam neo).pdf'
      },
      {
        name: 'Java Programming',
        platform: 'Iamneo',
        description: 'Java fundamentals and application development.',
        year: '2025',
        file: '/JAVA(iam neo).pdf'
      }
    ]
  },

  {
    title: 'Computer Networks',
    items: [
      {
        name: 'Computer Communications',
        platform: 'University of Colorado, Coursera',
        description: 'Network communication fundamentals and protocols.',
        year: '2024',
        file: '/Complete Computer Communication.pdf'
      },
      {
        name: 'Fundamental of Network Communication',
        platform: 'Coursera',
        description: 'Core networking concepts and communication models.',
        year: '2024',
        file: '/Fundamental network.pdf'
      },
      {
        name: 'Peer-to-Peer Protocols',
        platform: 'Coursera',
        description: 'Understanding decentralized network protocols.',
        year: '2024',
        file: '/Peer-to-Peer Protocols.pdf'
      },
      {
        name: 'Packet Switching Networks',
        platform: 'Coursera',
        description: 'Working of packet switching and routing algorithms.',
        year: '2024',
        file: '/Packet Switching Networks and Algorithms.pdf'
      },
      {
        name: 'TCP/IP and Advanced Topics',
        platform: 'Coursera',
        description: 'Advanced networking concepts including TCP/IP stack.',
        year: '2024',
        file: '/TCPIP and Advanced Topics.pdf'
      },
      {
        name: 'Bits and Bytes of Computer Networking',
        platform: 'Google, Coursera',
        description: 'Networking basics, models, and troubleshooting.',
        year: '2024',
        file: '/bits and bytes.pdf'
      }
    ]
  },

  {
    title: 'Computer Organization and Design',
    items: [
      {
        name: 'Digital Systems',
        platform: 'Coursera',
        description: 'Logic gates to processor design fundamentals.',
        year: '2024',
        file: '/Digital System.pdf'
      },
      {
        name: 'Hardware and Operating Systems',
        platform: 'IBM, Coursera',
        description: 'Computer hardware architecture and OS basics.',
        year: '2024',
        file: '/Introduction to Hardware and Operating Systems.pdf'
      }
    ]
  },

  {
    title: 'Web Development',
    items: [
      {
        name: 'Responsive Web Design',
        platform: 'freeCodeCamp',
        description: 'Modern responsive UI design using HTML & CSS.',
        year: '2023',
        file: '/FreeCodeCamp HTML.pdf'
      }
    ]
  },

  {
    title: 'Hackathon',
    items: [
      {
        name: 'CODE OFF DUTY - Web Hackathon',
        platform: 'Hackathon',
        description: 'Built innovative web solutions under pressure.',
        year: '2024',
        file: '/CODE OFF DUTY CERTIFICATE.pdf'
      }
    ]
  },

  {
    title: 'Software Engineering',
    items: [
      {
        name: 'Software Engineering: Implementation and Testing',
        platform: 'HKUST, Coursera',
        description: 'Software development lifecycle and testing.',
        year: '2024',
        file: '/HONG KONG UNIVERSITY Software Engineering.pdf'
      }
    ]
  }
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ensure the modal can always be cleanly closed via ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  console.log("Certificate Data Check:", certificateCategories);

  return (
    <SectionWrapper id="certificates" className="relative">
      {/* Background glowing effects unique to Certificates */}
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-blob"></div>
      <div className="absolute bottom-1/4 right-0 w-[35rem] h-[35rem] bg-indigo-500/10 dark:bg-purple-600/10 rounded-full blur-[150px] pointer-events-none animate-blob animation-delay-4000"></div>

      <div className="text-center mb-20 relative z-10 reveal fade-up">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-extrabold tracking-[0.3em] uppercase mb-4 text-sm drop-shadow-sm transition-all duration-300">
          Achievements
        </p>
        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-slate-800 dark:text-gray-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-500">
          Certificates
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Continuous learning is core to my journey. Here are the professional certifications and milestones I've achieved along the way.
        </p>
      </div>

      <div className="flex flex-col gap-24 max-w-7xl mx-auto relative z-10 px-4">
        {certificateCategories.map((category, catIndex) => (
          <div key={catIndex} className="w-full">
            {/* Category Heading */}
            <div className="flex items-center gap-6 mb-12 reveal fade-up">
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-gray-100 group cursor-default transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500">
                {category.title}
              </h3>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-blue-500/50 via-purple-500/20 to-transparent" />
            </div>

            {/* Premium Glassmorphism Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((cert, index) => (
                <div
                  key={index}
                  className={`group relative flex flex-col p-8 rounded-[2rem] overflow-hidden transition-all duration-500 ease-out cursor-default reveal fade-up delay-${(index % 3) * 100} hover:-translate-y-[10px] hover:scale-[1.03]`}
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(99, 102, 241, 0.3), inset 0 1px 1px rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255,255,255,0.1)';
                  }}
                >
                  {/* Glass reflection / Shimmer effect */}
                  <div className="absolute top-0 left-0 w-[150%] h-[150%] -translate-x-[120%] -translate-y-[120%] -rotate-45 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:translate-x-[120%] group-hover:translate-y-[120%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                  {/* Hover Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 group-hover:scale-110 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <span
                        className="text-[12px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border transition-all duration-300 group-hover:border-purple-500/40 group-hover:text-purple-600 dark:group-hover:text-purple-300"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          borderColor: 'rgba(255,255,255,0.08)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {cert.year}
                      </span>
                    </div>

                    <h4 className="text-[22px] font-extrabold mb-3 text-slate-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300 tracking-tight">
                      {cert.name}
                    </h4>
                    <p className="text-sm font-black tracking-[0.15em] uppercase mb-4 text-purple-600 dark:text-purple-400">
                      {cert.platform}
                    </p>
                    <p className="text-[15px] leading-relaxed mb-8 flex-1 text-slate-600 dark:text-gray-400 group-hover:dark:text-gray-300 transition-colors duration-300">
                      {cert.description}
                    </p>

                    {/* Actions */}
                    <div className="mt-auto pt-6 border-t border-slate-200/50 dark:border-white/10 group-hover:border-purple-500/30 transition-colors duration-300">
                      {cert.file ? (
                        <button
                          onClick={() => {
                            // Important: Ensure completely unmounted blur state
                            setIsModalOpen(false);
                            // Triggers native browser download or a new-tab preview
                            window.open(cert.file, '_blank');
                          }}
                          className="group/btn relative w-full flex items-center justify-center gap-3 px-6 py-4 text-sm font-black tracking-[0.2em] uppercase rounded-2xl transition-all duration-300 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-[0_4px_15px_rgba(59,130,246,0.2)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.6)] hover:-translate-y-1 hover:scale-[1.02]"
                        >
                          {/* Button hover ripple/sheen */}
                          <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out" />

                          <span className="relative z-10 flex items-center gap-3">
                            View Certificate
                            <FiExternalLink className="text-xl transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                          </span>
                        </button>
                      ) : (
                        <div className="h-[52px]" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay remain intact off-DOM */}
      {isModalOpen && selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
          style={{ background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(8px)' }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] reveal fade-up"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              style={{ background: 'var(--surface-2)', color: 'var(--text)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--primary)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--surface-2)';
                e.currentTarget.style.color = 'var(--text)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Preview Iframe Container */}
            <div className="w-full h-[75vh] sm:h-[80vh] bg-black/5 dark:bg-black/40 p-1">
              <iframe
                src={selectedCertificate}
                className="w-full h-full rounded-[1.25rem] border-none bg-white"
                title="Certificate Preview"
              />
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Certificates;
