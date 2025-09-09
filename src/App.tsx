import './App.css'
import { Logo, Button } from './ui/atoms'
import { TrustBadge } from './ui/molecules'
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';

function App() {

  return (
    <main className="flex flexDirection:'row' items-center justify-center gap-12 bg-[#f5f5f5]">

      <Logo />
      <Typography variant="h3">Welcome to modak</Typography>
      <Button variant='primary'>Get Started</Button>
      <Button variant='secondary'>Get Started</Button>
      <Button variant='tertiary'>Get Started</Button>

      <TrustBadge
        title="4.8"
        subtitle="APP STORE RATING"
        icon={
          <>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} sx={{ fontSize: 20 }} />
            ))}
          </>
        }
      />
      <TrustBadge title="24/7" subtitle="CUSTOMER SUPPORT" />
      <TrustBadge title="$0" subtitle="NO MONTHLY FEES*, NO MINIMUM DEPOSITS*" />


    </main>
  )
}

export default App