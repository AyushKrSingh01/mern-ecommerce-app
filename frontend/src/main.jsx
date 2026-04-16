import {BrowserRouter} from 'react-router-dom';
import {store} from './store/store';
import {Provider} from 'react-redux';
import { createRoot } from 'react-dom/client'
import {toast, ToastContainer} from 'react-toastify'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
        <Provider store={store}>
             <App />
             <ToastContainer/>  
        </Provider>
    </BrowserRouter>
    
)
