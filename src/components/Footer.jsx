const Footer = () => {
    return (
        <footer
            className="w-full py-8"
            style={{ borderTop: '1px solid var(--border)' }}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-16 text-center">
                <p className="text-sm font-medium" style={{ color: 'var(--text-subtle)' }}>
                    &copy; {new Date().getFullYear()}{' '}
                    <span className="text-gradient font-semibold">Ayush Kumar</span>.
                    {' '}All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
