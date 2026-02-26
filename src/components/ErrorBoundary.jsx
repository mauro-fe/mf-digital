import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("[ErrorBoundary]", error, info?.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#05070a",
            color: "#d8dee1",
            fontFamily: "Inter, system-ui, sans-serif",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "1rem",
              background: "linear-gradient(135deg, #00f2ff, #0077ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Algo deu errado
          </h1>
          <p
            style={{ color: "#94a3b8", marginBottom: "1.5rem", maxWidth: 420 }}
          >
            Ocorreu um erro inesperado. Tente recarregar a página.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #00f2ff, #00d4e0)",
              color: "#05070a",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              fontSize: "0.95rem",
            }}
          >
            Recarregar
          </button>
          {process.env.NODE_ENV !== "production" && this.state.error && (
            <pre
              style={{
                marginTop: "2rem",
                fontSize: "0.75rem",
                color: "#ef4444",
                maxWidth: "90vw",
                overflow: "auto",
                textAlign: "left",
                background: "rgba(255,255,255,0.04)",
                padding: "1rem",
                borderRadius: "0.5rem",
              }}
            >
              {this.state.error.toString()}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
