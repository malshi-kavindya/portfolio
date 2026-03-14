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
    title: 'Efficient LLM Fine-Tuning (Research)',
    description:
      'Research into Low-Rank Adaptation (LoRA) and adaptive bit quantization to reduce compute cost by 30%+ in low-resource environments while maintaining model quality.',
    techStack: ['PyTorch', 'PEFT', 'LoRA', 'Quantization', 'Large Language Models'],
    link: 'https://github.com/malshi-kavindya',
  },
  {
    title: 'Varrpu Life Skill Development System',
    description:
      'Built an event management and learning platform integrating a React frontend with a Flask + MongoDB backend, boosting user engagement by ~10% in 3 months.',
    techStack: ['React', 'Python', 'Flask', 'MongoDB', 'REST API', 'PyTest'],
    link: 'https://github.com/malshi-kavindya',
  },
  {
    title: 'Blood Bank Management System',
    description:
      'Developed a centralized platform for blood bank information and donation management using Ballerina, React, Docker, and PostgreSQL.',
    techStack: ['Ballerina', 'React', 'Docker', 'PostgreSQL'],
    link: 'https://github.com/malshi-kavindya',
  },
  {
    title: 'CodeVault – Code Snippet Sharing',
    description:
      'Created a web platform for storing and sharing code snippets with real-time collaboration powered by Firebase authentication and database.',
    techStack: ['React', 'Firebase'],
    link: 'https://github.com/malshi-kavindya',
  },
  {
    title: 'Remote Cleanup Bot',
    description:
      'Automated cleanup operations across 100+ LAN-connected Linux PCs using SSH remote execution and a React monitoring dashboard.',
    techStack: ['Python', 'React', 'SSH', 'Linux'],
    link: 'https://github.com/malshi-kavindya',
  },
  {
    title: 'Student Management System',
    description:
      'Built a Java-based student record management application with SQL backend, deployed on Apache for production use.',
    techStack: ['Java', 'SQL', 'Apache'],
    link: 'https://github.com/malshi-kavindya',
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
