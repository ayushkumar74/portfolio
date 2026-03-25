/**
 * SectionWrapper
 * Wraps every portfolio section with the .cinema-section class
 * so useCinematicScroll can apply directional enter/exit animations.
 */
const SectionWrapper = ({ children, id, className = '' }) => {
    return (
        <section
            id={id}
            className={`cinema-section is-below min-h-screen flex items-center justify-center py-24 px-6 sm:px-16 overflow-hidden ${className}`}
        >
            <div className="max-w-7xl w-full mx-auto">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
