import './App.css'
import Button from '@mui/material/Button';
import { motion } from "motion/react"

function App() {

  return (
    <>
      <Button variant="contained">Hello world</Button>
      <motion.ul animate={{ rotate: 360 }} />
    </>
  )
}

export default App
