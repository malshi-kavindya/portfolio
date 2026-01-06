import React from 'react'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

interface ExperienceItem {
  position: string
  duration: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    position: 'Software Engineer at Company A',
    duration: '2023 - Present',
    description: 'Working on frontend development with React.',
  },
  {
    position: 'Intern at Company B',
    duration: '2021 - 2022',
    description: 'Assisted in building internal tools and dashboards.',
  },
]

const Experience: React.FC = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <List>
        {experiences.map(({ position, duration, description }, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText primary={`${position} (${duration})`} secondary={description} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default Experience
