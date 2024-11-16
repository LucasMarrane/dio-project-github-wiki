import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from './pages/App/App.page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            enabled: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: false,           
             
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
        <ToastContainer position='top-right'/>
    </StrictMode>
);
