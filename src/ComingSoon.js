import waitImage from "./imgs/wait2.png";

export const ComingSoon = () => {
  return (
    <div className="countdown-container">
     
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            padding: "20px", // Add some padding around the content
          }}
        >
            <p style={{ marginTop: "30%" }}>Mary's next vacation:</p>
          <h1 style={{ marginBottom: "auto" }}>COMING SOON</h1>
          <img
            src={waitImage}
            alt="Sunglasses Taylor"
            style={{
              width: "100%",
              maxWidth: "600px",
              display: "block",
              margin: "0 auto",
            }} />
        </div>  
    </div>
  );
};
