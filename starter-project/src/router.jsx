import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import TicTac from './components/tic_tac_test/tic_tac';
import Test_2 from './components/test_2/test_2';

export const router = createBrowserRouter([
  {path: '/', element: <App />}, 
  {path: '/TicTac', element: <TicTac />}, 
  {path: '/test_2', element: <Test_2 />}, 
])