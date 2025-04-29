import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './router';
import './index.css';
import './config/i18next.config';

const queryClient = new QueryClient();

// 🚨 Detectar versión aquí
const APP_VERSION = "2.0.0"; // 🔥 Actualiza este número si cambias cosas importantes

const savedVersion = localStorage.getItem('app_version');
if (savedVersion !== APP_VERSION) {
  localStorage.clear(); // o localStorage.removeItem('results') si prefieres solo limpiar resultados
  localStorage.setItem('app_version', APP_VERSION);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
