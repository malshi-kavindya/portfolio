import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';

const education = [
  {
    title: 'Bachelor of Science Honours in Computer Science',
    institution: 'University of Jaffna',
    duration: '2022 – 2026',
    details: 'GPA - 3.71',
  },
  {
    title: 'Advanced Level',
    institution: 'Poramadulla Central College',
    duration: '2020',
    details: 'Combined Mathematics - C | Physics - C | ICT - B | English - B',
  },
];

export default function Education() {
  return (
    <Box
      id="education"
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
          Education
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}
        >
          Academic background focused on foundational computer science principles and modern software development practices.
        </Typography>

        <Grid container spacing={4}>
          {education.map((edu, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'background.default',
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
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {edu.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="secondary.main"
                    sx={{ mb: 1, fontWeight: 600 }}
                  >
                    {edu.institution}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                    {edu.duration}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {edu.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
