const Footer = () => {
    return (
        <footer
            style={{
                width: "100%",
                padding: "22px 0",
                background: "linear-gradient(180deg, #020617, #0f172a)",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                textAlign: "center",
            }}
        >
            <p
                style={{
                    fontSize: "15px",
                    color: "#94a3b8",
                    letterSpacing: "0.5px",
                }}
            >
                Designed & Built with{" "}
                <span
                    style={{
                        display: "inline-block",
                        animation: "pulse 1.5s infinite",
                    }}
                >
                    ❤️
                </span>{" "}
                by{" "}
                <span
                    style={{
                        fontWeight: "700",
                        marginLeft: "5px",
                        background: "linear-gradient(90deg, #4f46e5, #a855f7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.filter = "drop-shadow(0 0 8px rgba(168,85,247,0.8))";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.filter = "none";
                    }}
                >
                    Ayush Kumar
                </span>
            </p>

            <style>
                {`
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }
    `}
            </style>
        </footer>
    );
};

export default Footer;
