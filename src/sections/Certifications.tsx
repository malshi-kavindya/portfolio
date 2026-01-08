import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from '@mui/material';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    year: '2024',
    link: 'https://aws.amazon.com/certification/',
  },
  {
    title: 'TensorFlow Developer Certificate',
    organization: 'Google',
    year: '2023',
    link: 'https://www.tensorflow.org/certificate',
  },
  {
    title: 'Meta Front-End Developer Professional',
    organization: 'Meta',
    year: '2023',
    link: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
  },
  {
    title: 'Natural Language Processing Specialization',
    organization: 'DeepLearning.AI',
    year: '2023',
    link: 'https://www.coursera.org/specializations/natural-language-processing',
  },
  {
    title: 'MongoDB Certified Developer',
    organization: 'MongoDB University',
    year: '2022',
    link: 'https://university.mongodb.com/certification',
  },
  {
    title: 'Professional Scrum Master I',
    organization: 'Scrum.org',
    year: '2022',
    link: 'https://www.scrum.org/professional-scrum-certifications',
  },
];

export default function Certifications() {
  return (
    <Box
      id="certifications"
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
          Certifications
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}
        >
          Professional certifications and credentials demonstrating expertise in various technologies
        </Typography>

        <Grid container spacing={3}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'background.default',
                  border: '1px solid',
                  borderColor: 'rgba(29, 185, 84, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 30px rgba(29, 185, 84, 0.2)',
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      color: 'secondary.main',
                    }}
                  >
                    <Award size={24} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {cert.organization}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="primary.main"
                    sx={{ fontWeight: 600 }}
                  >
                    {cert.year}
                  </Typography>
                  <Button
                    size="small"
                    endIcon={<ExternalLink size={14} />}
                    component="a"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mt: 2,
                      color: 'secondary.main',
                      '&:hover': {
                        backgroundColor: 'rgba(29, 185, 84, 0.1)',
                      },
                    }}
                  >
                    View Credential
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
