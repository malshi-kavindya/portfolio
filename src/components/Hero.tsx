import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

const Hero: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems="center"
      gap={3}
      mb={4}
    >
      <Avatar
        alt="Your Name"
        src="https://i.pravatar.cc/150?img=12" // Replace with your photo URL
        sx={{ width: 150, height: 150 }}
      />
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          Your Name
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Your Job Title / Role
        </Typography>
        <Typography variant="body1" maxWidth={400}>
          Brief personal description or introduction. Tell people who you are and what you do.
        </Typography>
      </Box>
    </Box>
  )
}

export default Hero
