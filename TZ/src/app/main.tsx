import {StrictMode} from 'react'

import {createRoot} from 'react-dom/client'
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/merriweather/900.css';
import "./styles/index.scss";

import App from '@/app/App'

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App/>
    </StrictMode>
)