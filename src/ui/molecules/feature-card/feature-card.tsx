import { Box, Link, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  gradientColor: string;
  highlight: ReactNode;
  linkUrl?: string;
};

export const FeatureCard = ({ title, description, imageUrl, gradientColor, highlight, linkUrl = "#" }: FeatureCardProps) => {
  return (
    <Box sx={{ width: 480, height: 435, position: "relative", borderRadius: "1.5rem", overflow: "hidden", color: "white", backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      
      {/* Capa de superposición para el gradiente de color  EL GRADIENTE*/}
      <Box sx={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${gradientColor} 25%, transparent 60%)` }} />

        {/* Contenedor para todo el contenido textual */}
        <Box sx={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", padding: "2rem" }} >

          <div className="pt-30" >{highlight}</div>

          {/* Contenido inferior empujado hacia abajo */}
          <div className="mt-auto flex flex-col gap-3">
            <Typography variant="h5" component="h3"sx={{ color: '#ffffff', fontSize: '20px', fontWeight: '600' }}>
              {title}
            </Typography>

            <Typography variant="body1" component="h3"sx={{ color: '#ffffff', fontSize: '18px', fontWeight: '400' }}>{description}</Typography>

            <Link
              href={linkUrl}
              underline="always"
              color="inherit" // Hereda el color blanco del contenedor
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 500,
                marginTop: "0.5rem",
                fontSize: '18px', 
              }}
            >
              Learn more <ArrowForwardIcon fontSize="small" />
            </Link>

          </div>
        </Box>
      </Box>
  );
};
