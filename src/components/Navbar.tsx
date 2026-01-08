import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  useScrollTrigger,
} from '@mui/material';

interface NavbarProps {
  sections: string[];
}

export default function Navbar({ sections }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: trigger ? 'rgba(10, 10, 15, 0.95)' : 'transparent',
        backdropFilter: trigger ? 'blur(10px)' : 'none',
        boxShadow: trigger ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box
            sx={{
              fontSize: '1.5rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #9333ea 0%, #1db954 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
            }}
            onClick={() => scrollToSection('home')}
          >
            Portfolio
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {sections.map((section) => (
              <Button
                key={section}
                onClick={() => scrollToSection(section)}
                sx={{
                  color: activeSection === section ? 'primary.main' : 'text.primary',
                  fontWeight: activeSection === section ? 600 : 400,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: activeSection === section ? '60%' : '0%',
                    height: '2px',
                    backgroundColor: 'primary.main',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '60%',
                  },
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
