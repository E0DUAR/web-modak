import './App.css'
import Button from './ui/atoms/Button'
import Logo from './ui/atoms/logo'
import Heading from './ui/atoms/Heading';


function App() {

  return (
    <main className="flex h-screen items-center justify-center bg-[#f5f5f5] gap-4">
      <Logo />
      <Heading as="h1" className="text-5xl text-black-700">The money app for families</Heading>
      <Button variant="primary"> Log in </Button>
      <Button variant="secondary"> Get started </Button>
      <Button variant="tertiary"> Get started </Button>
    </main>
  )
}

export default App