import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Grid,
} from '@mui/material';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI Chatbot Platform',
    description:
      'Built an intelligent chatbot using NLP and transformers for customer support automation with 95% accuracy.',
    techStack: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
    link: 'https://github.com',
  },
  {
    title: 'E-Commerce Analytics Dashboard',
    description:
      'Full-stack analytics platform with real-time data visualization and predictive insights for retail businesses.',
    techStack: ['React', 'TypeScript', 'D3.js', 'PostgreSQL', 'Express'],
    link: 'https://github.com',
  },
  {
    title: 'Sentiment Analysis Tool',
    description:
      'NLP application that analyzes social media sentiment with multi-language support and trending topic detection.',
    techStack: ['Python', 'BERT', 'FastAPI', 'Docker', 'Redis'],
    link: 'https://github.com',
  },
  {
    title: 'Smart Task Manager',
    description:
      'AI-powered task management system with priority prediction and automated scheduling using machine learning.',
    techStack: ['Vue.js', 'Firebase', 'Python', 'Scikit-learn'],
    link: 'https://github.com',
  },
  {
    title: 'Real-time Collaboration Tool',
    description:
      'WebSocket-based platform for team collaboration with document editing, video calls, and project management.',
    techStack: ['React', 'Socket.io', 'WebRTC', 'Node.js', 'AWS'],
    link: 'https://github.com',
  },
  {
    title: 'Image Recognition API',
    description:
      'RESTful API for image classification and object detection using deep learning with 98% accuracy.',
    techStack: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'GCP'],
    link: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
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
          Featured Projects
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}
        >
          A collection of my recent work showcasing full-stack development, AI/ML, and modern web technologies
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'rgba(147, 51, 234, 0.2)',
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.7 }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(147, 51, 234, 0.1)',
                          color: 'primary.main',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<ExternalLink size={16} />}
                    component="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    sx={{
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                      },
                    }}
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
