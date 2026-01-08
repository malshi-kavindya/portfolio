import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme/theme';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

const sections = ['home', 'projects', 'certifications', 'experience', 'contact'];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <Navbar sections={sections} />
        <Hero />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
