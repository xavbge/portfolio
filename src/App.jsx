import { useState } from "react";
import "./App.css";
import LightRays from "./BackGround.jsx";
import MagicBento from "./MagicBento";
import ProfileCard from "./ProfileCard";
import PillNav from "./PillNav.jsx";
import logo from "../src/assets/razer-logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ width: "100%", height: "auto", position: "absolute" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.2}
          lightSpread={0.5}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        <div
          style={{
            display: "flex", // active flex
            justifyContent: "center", // centre horizontalement
            alignItems: "center",
          }}
        >
          <PillNav
            logo={logo}
            logoAlt="Company Logo"
            items={[
              { label: "Accueil", href: "/home" },
              { label: "CV", href: "/CV-XavBge.pdf" },
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          />
        </div>
        <div
          style={{
            display: "flex", // active flex
            justifyContent: "center", // centre horizontalement
            alignItems: "center", // centre verticalement
            width: "100vw", // toute la largeur
            height: "100vh", // toute la hauteur
            padding: "", // optionnel : un peu d’espace autour
            boxSizing: "border-box",
          }}
        >
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
          <div
            style={{
              display: "flex", // active flex
              justifyContent: "center", // centre horizontalement
              alignItems: "center", // centre verticalement
              paddingLeft: "30px",
              paddingRight: "150px",
            }}
          >
            <ProfileCard
              name="Xavier Bourghelle"
              title="Développeur Fullstack Junior"
              handle="XavBge"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./src/assets/photoP-remove.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
