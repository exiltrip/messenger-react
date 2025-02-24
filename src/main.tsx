import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/globals.css'
import App from './App.tsx'
import {SnackbarProvider} from "notistack";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <SnackbarProvider
          anchorOrigin={{vertical: 'top', horizontal: 'right'}}
          autoHideDuration={4500}
          maxSnack={3}>
        <App />
      </SnackbarProvider>
  </StrictMode>,
)
