import { Box, Typography, Divider } from "@mui/material";

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

const companyInfo = [
  {
    title: "Location:",
    info: ["8721 M Central Avenue,", "Los Angeles, CA 90036"],
  },
  {
    title: "Contact:",
    info: ["hello@yourdomain.com", "+12 9 8765 4321"],
  },
  {
    title: "Hours:",
    info: ["Sun – Mon: *appt. only", "Tues: Closed", "Wed – Sat: 9am - 6pm"],
  },
];

export function CompanyInfo({ alignItems = "center" }) {
  return (
    <>
      {companyInfo.map(({ title, info }, index) => (
        <>
          <Box
            className='flexColumn'
            sx={{
              alignItems: alignItems,
              height: 1,

              // border: 1,
              // width: 1,
            }}
          >
            <Typography
              variant='subHeading'
              fontWeight={700}
              sx={{ marginBottom: 2 }}
            >
              {title}
            </Typography>
            <Box className='flexColumn' gap={1} sx={{ height: 1 }}>
              {info.map(information => (
                <Typography variant='p'>{information}</Typography>
              ))}
            </Box>
          </Box>

          {index !== 2 && (
            <Divider
              sx={{
                display: { xxs: "block", sm: "none" },
                width: 1,
                maxWidth: 100,
                height: 2,
              }}
            />
          )}
        </>
      ))}
    </>
  );
}
