import './App.css'
import Button from './ui/atoms/Button'

function App() {

  return (
    <main className="flex h-screen items-center justify-center bg-[#f5f5f5] gap-4">
      <Button variant="primary"> Log in </Button>
      <Button variant="secondary"> Get started </Button>
      <Button variant="tertiary"> Get started </Button>
    </main>
  )
}

export default App