import { Box, Typography } from "@mui/material";

type HighlightBadgeProps = {
  iconUrl: string;
  title: string;
  subtitle: string;
  className?: string;
};

export const HighlightBadge = ({ iconUrl, title, subtitle, className, }: HighlightBadgeProps ) => {

  return (
    <Box className={`inline-flex items-center gap-4 rounded-[16px] bg-white p-3 pr-5 text-black shadow-lg ${className}`}>

     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#cce8e3]">
        <img
          src={iconUrl}
          alt={title} 
          className="h-6 w-6 object-contain"
        />
      </div>
      
      <div>
            <Typography variant="subtitle1" sx={{ color: '#191c1b', fontSize:'16px', fontWeight:'500', lineHeight:'24px' }}> {title} </Typography>

            <Typography variant="body2" sx={{ color: '#646867', fontSize:'14px', fontWeight:'400', lineHeight:'20px' }}> {subtitle} </Typography>
      </div>

    </Box>
  );

};