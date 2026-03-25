import { useEffect, useState } from 'react';

const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate a rapid loading sequence up to 100%
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += Math.floor(Math.random() * 15) + 5;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(interval);
            }
            setProgress(currentProgress);
        }, 150); // fast updates

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg-color)] animate-[cinematicFadeOut_1s_ease-in-out_2.5s_forwards] pointer-events-none overflow-hidden">
            {/* Cinematic Background Lines */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent animate-[expand_2s_ease-out_forwards]" />
                <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-accent to-transparent animate-[expandVertical_2s_ease-out_forwards]" />
            </div>

            <div className="relative flex flex-col items-center justify-center z-10">
                {/* Expanding Hexagon / Circle Loader */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-primary/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                    <div className="absolute inset-2 rounded-full border-t-2 border-r-2 border-primary dark:border-neon-blue animate-[spin_1.5s_linear_infinite]" />
                    <div className="absolute inset-4 rounded-full border-b-2 border-l-2 border-accent dark:border-neon-purple animate-[spin_2s_linear_infinite_reverse]" />
                    
                    {/* Glowing Core */}
                    <div className="w-12 h-12 rounded-full bg-primary/20 dark:bg-accent/20 blur-md animate-pulse"></div>
                    
                    {/* Percentage Counter */}
                    <span className="absolute font-mono text-2xl font-bold text-primary dark:text-[var(--color-neon-blue)] neon-text-blue drop-shadow-lg">
                        {progress}%
                    </span>
                </div>
                
                {/* Branding text */}
                <div className="mt-8 overflow-hidden">
                    <h2 className="text-xl tracking-[0.3em] font-light text-slate-700 dark:text-slate-300 animate-[slideUpFade_0.5s_ease-out_forwards] uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                        Portfolio Portfolio
                    </h2>
                </div>
                <div className="w-48 h-1 mt-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out shadow-[0_0_10px_var(--color-primary)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <style>{`
                @keyframes cinematicFadeOut {
                    0% { opacity: 1; transform: scale(1); visibility: visible; }
                    50% { opacity: 1; transform: scale(1.05); }
                    100% { opacity: 0; transform: scale(1.1) translateY(-20px); visibility: hidden; display: none; }
                }
                @keyframes expand {
                    0% { transform: scaleX(0); opacity: 0; }
                    100% { transform: scaleX(1); opacity: 1; }
                }
                @keyframes expandVertical {
                    0% { transform: scaleY(0); opacity: 0; }
                    100% { transform: scaleY(1); opacity: 1; }
                }
                @keyframes slideUpFade {
                    0% { transform: translateY(20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Loader;
