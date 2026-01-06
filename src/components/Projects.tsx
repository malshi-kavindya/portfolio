import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface Project {
  title: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A brief description of project one.',
    link: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two.',
    link: 'https://github.com/yourusername/project-two',
  },
  {
    title: 'Project Three',
    description: 'A brief description of project three.',
    link: 'https://github.com/yourusername/project-three',
  },
]

const Projects: React.FC = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map(({ title, description, link }) => (
          <Grid >
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={link} target="_blank" rel="noopener noreferrer">
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Projects
