import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import TicTac from './components/tic_tac_test/tic_tac';
import Test2 from './components/test_2/test_2';

export const router = createBrowserRouter([
  {path: '/', element: <App />}, 
  {path: '/TicTac', element: <TicTac />}, 
  {path: '/test_2', element: <Test2 />}, 
], {basename: process.env.REACT_APP_BASE_URL})