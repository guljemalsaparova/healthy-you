import AppBar from './components/AppBar.js';
import BmiCalculator from './components/BmiCalculator.js';
import ImageCarousel from './components/ImageCarousel.js';
import Contact from './components/Contact.js';
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar />
      <Box sx={{ flex: 1 }}>
        <ImageCarousel />
        <BmiCalculator />
        <Contact />
      </Box>
      <Typography sx={{ textAlign: 'center', borderTop: '1px solid #eee', padding: '10px 0' }} variant="p" gutterBottom>
        © {new Date().getFullYear()} | Guljemal
      </Typography>
    </Box>
  );
}

export default App;
