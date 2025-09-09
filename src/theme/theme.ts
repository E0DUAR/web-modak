// src/theme.ts

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light", // Mantenemos el modo claro
    text: {
      primary: "#1E2022", // Un color oscuro, casi negro para títulos principales
      secondary: "#54575A", // Un gris más suave para el cuerpo del texto y subtítulos
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",

    // Para el titular más grande, ej: "Family Banking Made Easy"
    h1: {
      fontSize: "3.75rem", // 60px
      fontWeight: 800, // Extra-Bold para máximo impacto
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
      color: "#1E2022",
    },
    // Para títulos de secciones importantes, ej: "The ultimate money app for families"
    h2: {
      fontSize: "3rem", // 48px
      fontWeight: 700, // Bold
      lineHeight: 1.2,
      color: "#1E2022",
    },
    // Para subtítulos de características, ej: "Chores & Allowance"
    h3: {
      fontSize: "2rem", // 32px
      fontWeight: 700, // Bold
      lineHeight: 1.3,
      color: "#1E2022",
    },
    // Para encabezados más pequeños o títulos de tarjetas
    h4: {
      fontSize: "1.75rem", // 28px
      fontWeight: 600, // Semi-Bold
      lineHeight: 1.4,
      color: "#1E2022",
    },
    // Títulos de menor jerarquía
    h5: {
      fontSize: "1.5rem", // 24px
      fontWeight: 600, // Semi-Bold
      color: "#1E2022",
    },
    // Para texto destacado o encabezados de pie de página
    h6: {
      fontSize: "1.25rem", // 20px
      fontWeight: 600, // Semi-Bold
      color: "#1E2022",
    },
    // Cuerpo de texto principal y párrafos
    body1: {
      fontSize: "1rem", // 16px
      fontWeight: 400, // Regular
      lineHeight: 1.6,
      color: "#54575A",
    },
    // Texto secundario, descripciones más pequeñas o legales
    body2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 400, // Regular
      lineHeight: 1.6,
      color: "#54575A",
    },
    // Similar a body1 pero con un peso mayor, para destacar
    subtitle1: {
      fontSize: "1rem", // 16px
      fontWeight: 500, // Medium
      lineHeight: 1.5,
      color: "#54575A",
    },
    // Similar a body2 con peso mayor
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500, // Medium
      lineHeight: 1.5,
      color: "#54575A",
    },
    // Estilo para los botones
    button: {
      fontSize: "1rem", // 16px
      fontWeight: 700, // Bold para que destaque
      textTransform: "none",
      lineHeight: 1.5,
    },
  },
});
