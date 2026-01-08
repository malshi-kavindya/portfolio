import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from '@mui/material';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactCards = [
    {
      icon: <Mail size={32} />,
      title: 'Email',
      value: 'john@example.com',
      link: 'mailto:john@example.com',
    },
    {
      icon: <Github size={32} />,
      title: 'GitHub',
      value: '@johndoe',
      link: 'https://github.com',
    },
    {
      icon: <Linkedin size={32} />,
      title: 'LinkedIn',
      value: 'John Doe',
      link: 'https://linkedin.com',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}
        >
          Have a project in mind or want to collaborate? Feel free to reach out!
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                endIcon={<Send size={18} />}
                sx={{
                  py: 1.5,
                  background: 'linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #7e22ce 0%, #6b21a8 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 30px rgba(147, 51, 234, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {contactCards.map((card, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    component="a"
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: 'background.default',
                      border: '1px solid',
                      borderColor: 'rgba(147, 51, 234, 0.2)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateX(8px)',
                        boxShadow: '0 8px 30px rgba(147, 51, 234, 0.3)',
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ color: 'primary.main' }}>{card.icon}</Box>
                        <Box>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            sx={{ mb: 0.5 }}
                          >
                            {card.title}
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {card.value}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}
