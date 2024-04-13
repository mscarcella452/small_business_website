import { useState, forwardRef } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Dialog,
  ClickAwayListener,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { PageDiv, BoxImg } from "../../Helpers/HelperComponents";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Carousel from "../../Helpers/Carousel/Carousel";
import DialogCarousel from "./Components/DialogCarousel";
import Slide from "@mui/material/Slide";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { touchScreen } from "../../Theme/mediaQueries";
import GalleryImage from "./Components/GalleryImage";

export const galleryImages = [
  "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2016/05/shutterstock_395053261-copy.jpg",
  "https://highlandercleaners.com/wp-content/uploads/2023/03/AdobeStock_217594882-1080x675.jpeg",
  "https://media.timeout.com/images/103663124/image.jpg",
  "http://static5.businessinsider.com/image/54ef5ad3ecad04780b86bcc7-1200-924/tailor-garment-worker-3.jpg",
  "https://alterations-express.com/wp-content/uploads/2021/09/5-2048x1152.png",
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png",
  "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2016/05/shutterstock_395053261-copy.jpg",
  "https://highlandercleaners.com/wp-content/uploads/2023/03/AdobeStock_217594882-1080x675.jpeg",
  "https://media.timeout.com/images/103663124/image.jpg",
  "http://static5.businessinsider.com/image/54ef5ad3ecad04780b86bcc7-1200-924/tailor-garment-worker-3.jpg",
  "https://alterations-express.com/wp-content/uploads/2021/09/5-2048x1152.png",
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png",
];

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

function Gallery() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // const mobileLandscape =
  //   "@media (pointer: coarse) and (orientation: landscape)";
  // const mobilePortrait = "@media (pointer: coarse) and (orientation: portrait)";
  const touchScreen = "@media (pointer: coarse)";

  const handleOpen = index => {
    setSelectedIndex(index);
    // set timeout to hide the carousel shuffle delay when selecting image index
    setTimeout(() => setDialogOpen(true), 1);
  };

  const handleClose = () => setDialogOpen(false);

  return (
    <PageDiv>
      <Box className='flexColumn' gap={2} marginBottom={5}>
        <Typography variant='label' sx={{ textTransform: "uppercase" }}>
          Explore Our Craft
        </Typography>
        <Typography variant='heading2'>Tailored Image Gallery</Typography>
      </Box>

      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xxs: "1fr 1fr",
            // xs: "1fr 1fr",
            sm: "1fr 1fr 1fr",
            // lg: "1fr 1fr",
          },
          gridTemplateRows: "auto",
          gap: 2,
        }}
      >
        {galleryImages.map((image, index) => (
          <Box
            onClick={() => handleOpen(index)}
            className='flexColumn'
            sx={{
              position: "relative",
              aspectRatio: 1.5 / 1,
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: { xxs: 0.5, mobile: 2 },
              "&:hover": {
                "&:before": {
                  content: "''",
                  position: "absolute",
                  [touchScreen]: { display: "none" },
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "#333",
                  zIndex: 2,
                  opacity: 0.5,
                },
                "& .magnifyGlass": {
                  opacity: 1,
                },
              },
            }}
          >
            <GalleryImage image={image} index={index} />

            <ZoomInIcon
              className='magnifyGlass'
              sx={{
                [touchScreen]: { display: "none" },
                fontSize: { xxs: 25, sm: 50 },
                position: "absolute",
                zIndex: 2,
                color: "#fff",
                opacity: 0,
                transition: "opacity .25s ease",
              }}
            />
          </Box>
        ))}
        <DialogCarousel
          open={dialogOpen}
          handleClose={handleClose}
          startIndex={selectedIndex}
          images={galleryImages}
        >
          {(image, index) => <GalleryImage image={image} index={index} />}
        </DialogCarousel>
      </Container>
    </PageDiv>
  );
}

export default Gallery;
