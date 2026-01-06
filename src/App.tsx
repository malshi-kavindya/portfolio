import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Hero from './components/Hero.tsx'
import Projects from './components/Projects'
import Volunteer from './components/Volunteer.tsx'
import Experience from './components/Experience.tsx'

const App: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Hero />
      <Box my={6}>
        <Projects />
      </Box>
      <Box my={6}>
        <Volunteer />
      </Box>
      <Box my={6}>
        <Experience />
      </Box>
    </Container>
  )
}

export default App
