import type { ReactNode } from "react";
import { Typography } from "@mui/material";


type TrustBadgeProps = {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  className?: string;
};

export const TrustBadge = ({ title, subtitle, icon, className = "" }: TrustBadgeProps) => {
  return (
    <div className={`w-56 flex flex-col items-center text-center gap-1.5 ${className}`}>

      <Typography variant="h4" sx={{ color: '#74a09c' }}>{title}</Typography>

      {icon && <div className="flex items-center justify-center gap-1 text-[#74a09c] text-[9px]">{icon}</div>}

      <Typography variant="body2" sx={{ color: '#74a09c', fontSize: '12px', fontWeight: '500' }}>{subtitle}</Typography>

    </div>
  );
};