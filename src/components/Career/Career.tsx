import { Padding } from "@mui/icons-material";
import React from "react";

const vacancies = [
  { title: "Chief Security Officer (CSO/OIC)", location: "Colombo" },
  { title: "Senior Security Officer (SSO/JSO)", location: "Colombo" },
  { title: "Lead Security Officer (LSO)", location: "Colombo" },
  { title: "Special Guards", location: "Colombo" },
  { title: "Chief Security Officer (CSO/OIC)", location: "Colombo" },
  { title: "Senior Security Officer (SSO/JSO)", location: "Colombo" },
  { title: "Lead Security Officer (LSO)", location: "Colombo" },
  { title: "Special Guards", location: "Colombo" },
];

const CareerPage = () => {
  return (
    <div style={styles.container}>
      {/* <h1 style={styles.header} className="text-black dark:text-white">
        Open Positions in Security Firm
      </h1> */}
      <div style={styles.gridContainer}>
        {vacancies.map((vacancy, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardContent}>
              <h2 style={styles.title}>{vacancy.title}</h2>
              <p style={styles.location}>📍 {vacancy.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: any = {
  container: {
    padding: "0px",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
    PaddingBottom: "10px",
    // backgroundColor: "#f7f9fc",
  },
  header: {
    fontSize: "24px",
    marginBottom: "20px",
    // color: "#333",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  tabButton: {
    marginRight: "10px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    border: "none",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
  },
  cardContent: {
    textAlign: "left",
  },
  title: {
    fontSize: "18px",
    margin: "0 0 10px",
    color: "#007bff",
  },
  location: {
    fontSize: "14px",
    color: "#666",
  },
};

export default CareerPage;
