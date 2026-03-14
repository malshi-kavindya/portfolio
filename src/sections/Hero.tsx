import { Box, Container, Typography, IconButton, Avatar } from '@mui/material';
import { Github, Linkedin, Mail } from 'lucide-react';
import dp from './profile.jpeg';

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background:
            'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
          animation: 'pulse 10s ease-in-out infinite',
        },
        '@keyframes pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Avatar
              src={dp}
            alt="Profile"
            sx={{
              width: { xs: 150, md: 200 },
              height: { xs: 150, md: 200 },
              mb: 3,
              border: '4px solid',
              borderColor: 'primary.main',
              boxShadow: '0 0 40px rgba(147, 51, 234, 0.5)',
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              mb: 2,
              background: 'linear-gradient(135deg, #ffffff 0%, #9333ea 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Malshi Wijesinghe
          </Typography>

          <Typography
            variant="h5"
            color="primary.main"
            sx={{
              mb: 2,
              fontWeight: 600,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            Computer Science Undergraduate | AI / ML | Full-Stack Developer
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 680,
              mb: 3,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
            }}
          >
            Passionate about Software Engineering, Artificial Intelligence, and
            Machine Learning with hands-on experience in full-stack development
            and AI research. Skilled at building scalable web applications and
            data-driven solutions using modern technologies.
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 4, fontWeight: 500 }}
          >
            malshiwijesinghe2002@gmail.com • 078 759 5977 • Kandy, Sri Lanka
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton
              component="a"
              href="https://github.com/malshi-kavindya"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.primary',
                backgroundColor: 'background.paper',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 20px rgba(147, 51, 234, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Github size={24} />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/malshi-kavindya-51215b2a6"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.primary',
                backgroundColor: 'background.paper',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 20px rgba(147, 51, 234, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Linkedin size={24} />
            </IconButton>

            <IconButton
              component="a"
              href="mailto:malshiwijesinghe2002@gmail.com"
              sx={{
                color: 'text.primary',
                backgroundColor: 'background.paper',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 20px rgba(147, 51, 234, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Mail size={24} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
