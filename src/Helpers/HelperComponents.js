import { Box } from "@mui/material";

export function PageDiv({ children, className, sx }) {
  return (
    <Box
      className={className}
      sx={{
        width: 1,
        padding: { xxs: 2, sm: 4, md: 6 },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
export function BoxImg({ src, alt, wrapperSx, imgSx }) {
  return (
    <Box
      className='flexRow'
      sx={{
        width: 1,
        // maxWidth: { xxs: 650, md: 1 },
        height: { xxs: 350, md: 1 },
        position: "relative",
        ...wrapperSx,
      }}
    >
      <Box
        component='img'
        src={src}
        alt={alt}
        sx={{
          position: "absolute",
          height: 1,
          width: { xxs: "100vw", sm: 1 },
          borderRadius: { xxs: 0, sm: 2 },
          objectFit: "cover", // Ensure image covers the entire space
          objectPosition: "center", // Center image within the container
          ...imgSx,
        }}
      />
    </Box>
  );
}
