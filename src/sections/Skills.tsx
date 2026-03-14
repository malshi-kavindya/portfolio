import { Box, Container, Typography, Chip, Grid } from '@mui/material';

const skills = [
  {
    category: 'Programming & Development',
    items: ['Python', 'PHP', 'Java', 'C++', 'JavaScript', 'Node.js', 'React', 'JSX', 'HTML', 'CSS'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Testing & Automation',
    items: ['Selenium', 'PyTest', 'Postman'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Docker', 'Git'],
  },
  {
    category: 'Concepts & Practice',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Microservices Architecture',
      'Software Development Life Cycle',
      'Agile Frameworks',
      'Version Control',
      'Software Design',
    ],
  },
];

export default function Skills() {
  return (
    <Box
      id="skills"
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
          Skills
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}
        >
          A blend of technical skills, cloud tooling, and software engineering practices aligned to building scalable applications.
        </Typography>

        <Grid container spacing={4}>
          {skills.map((skill) => (
            <Grid item xs={12} md={6} key={skill.category}>
              <Box
                sx={{
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'rgba(147, 51, 234, 0.2)',
                  borderRadius: 2,
                  p: 4,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  {skill.category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skill.items.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(147, 51, 234, 0.1)',
                        color: 'primary.main',
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
