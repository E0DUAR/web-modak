import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  // 👇 AÑADIMOS ESTA SECCIÓN PARA CAMBIAR LA FUENTE
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>

  </StrictMode>,
)
