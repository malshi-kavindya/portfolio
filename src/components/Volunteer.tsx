import React from 'react'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

interface VolunteerWork {
  role: string
  duration: string
  details: string
}

const volunteerWork: VolunteerWork[] = [
  {
    role: 'Volunteer at XYZ Organization',
    duration: '2022 - Present',
    details: 'Helping with community outreach and events.',
  },
  {
    role: 'Event Organizer at ABC Charity',
    duration: '2020 - 2021',
    details: 'Coordinated multiple fundraising events.',
  },
]

const Volunteer: React.FC = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Volunteer Work
      </Typography>
      <List>
        {volunteerWork.map(({ role, duration, details }, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText primary={`${role} (${duration})`} secondary={details} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default Volunteer
