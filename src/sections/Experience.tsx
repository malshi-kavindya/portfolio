import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    organization: 'Tech Innovations Inc.',
    duration: '2023 - Present',
    description:
      'Leading development of AI-powered analytics platform. Built scalable microservices architecture serving 100K+ users. Mentoring junior developers and conducting code reviews.',
  },
  {
    role: 'Machine Learning Engineer',
    organization: 'DataSmart Solutions',
    duration: '2021 - 2023',
    description:
      'Developed NLP models for sentiment analysis and text classification. Improved model accuracy by 25%. Deployed ML pipelines on AWS with automated retraining.',
  },
  {
    role: 'Full-Stack Developer',
    organization: 'WebCraft Studios',
    duration: '2019 - 2021',
    description:
      'Built responsive web applications using React and Node.js. Implemented real-time features with WebSockets. Optimized database queries reducing load times by 40%.',
  },
  {
    role: 'Volunteer Developer',
    organization: 'Code for Good',
    duration: '2020 - Present',
    description:
      'Contributing to open-source projects focused on education technology. Built learning management system for underprivileged communities. Conducted workshops on web development.',
  },
];

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          Experience
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}
        >
          Professional experience and volunteer work in software development and AI
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 20, md: '50%' },
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'primary.main',
              opacity: 0.3,
              transform: { md: 'translateX(-50%)' },
            }}
          />

          {experiences.map((exp, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                mb: 4,
                pl: { xs: 6, md: 0 },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 12, md: '50%' },
                  top: 20,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  border: '3px solid',
                  borderColor: 'background.default',
                  transform: { md: 'translateX(-50%)' },
                  zIndex: 1,
                  boxShadow: '0 0 20px rgba(147, 51, 234, 0.6)',
                }}
              />

              <Box
                sx={{
                  ml: { md: index % 2 === 0 ? 0 : 'auto' },
                  mr: { md: index % 2 === 0 ? 'auto' : 0 },
                  width: { md: 'calc(50% - 40px)' },
                }}
              >
                <Card
                  sx={{
                    backgroundColor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'rgba(147, 51, 234, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 30px rgba(147, 51, 234, 0.3)',
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1,
                        color: 'primary.main',
                      }}
                    >
                      <Briefcase size={20} />
                      <Typography
                        variant="caption"
                        sx={{ ml: 1, fontWeight: 600 }}
                      >
                        {exp.duration}
                      </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
                      {exp.role}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="secondary.main"
                      sx={{ mb: 1.5, fontWeight: 600 }}
                    >
                      {exp.organization}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {exp.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
