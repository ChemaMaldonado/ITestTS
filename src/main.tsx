import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { NavigationProvider } from './services/context/Navigation'
import React from 'react'
import ReactDOM from 'react-dom/client'

const CACHE_TIME = 8640000 // One day

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CACHE_TIME,
      cacheTime: CACHE_TIME,
      keepPreviousData: true,
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
