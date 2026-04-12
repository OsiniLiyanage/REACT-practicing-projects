function Layout({ children }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      <header
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "15px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        My App Header
      </header>

      <main
        style={{
          padding: "20px",
        }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#f1f1f1",
          textAlign: "center",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        © 2026 My App
      </footer>
    </div>
  );
}

export default Layout;
