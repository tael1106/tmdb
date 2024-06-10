import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetails from './MovieDetails.tsx';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/movie/:movieId",
    element: <MovieDetails />
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
