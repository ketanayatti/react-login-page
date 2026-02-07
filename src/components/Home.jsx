import React from "react";

const Home = ({ onLogout }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#333", marginBottom: "20px" }}>Welcome!</h1>
        <p style={{ color: "#666", marginBottom: "30px", fontSize: "18px" }}>
          You have successfully logged in.
        </p>
        <button
          onClick={onLogout}
          style={{
            backgroundColor: "#ff4444",
            color: "white",
            border: "none",
            padding: "14px 40px",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 6px rgba(255, 68, 68, 0.3)",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#cc0000";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 12px rgba(255, 68, 68, 0.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#ff4444";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 6px rgba(255, 68, 68, 0.3)";
          }}
          onMouseDown={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 2px 4px rgba(255, 68, 68, 0.3)";
          }}
          onMouseUp={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 12px rgba(255, 68, 68, 0.4)";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
