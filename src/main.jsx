import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import FirebaseProvider from './firebase/FirebaseProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className='max-w-7xl mx-auto'>
     <QueryClientProvider client={queryClient}>
     <FirebaseProvider>
      <RouterProvider router={router} />
      </FirebaseProvider>
      </QueryClientProvider>
     </div>
   
  </StrictMode>,
)
