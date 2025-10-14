import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

// יוצרים מופע של QueryClient – זה האובייקט שמנהל את ה־cache של React Query
const queryClient = new QueryClient();

// עוטפים את כל האפליקציה ב־QueryClientProvider
// זה מאפשר לכל קומפוננטה להשתמש ב־React Query
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
