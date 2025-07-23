import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import TicTac from './components/tic_tac_test/tic_tac';
import Test2 from './components/test_2/test_2';
import DigGame from './components/dig_game/main.tsx';
import UserPost from './components/user_handler/main.jsx';

export const router = createBrowserRouter([
  {path: '/', element: <App />}, 
  {path: '/TicTac', element: <TicTac />}, 
  {path: '/test_2', element: <Test2 />}, 
  {path: '/dig_game', element: <DigGame />}, 
  {path: '/user', element: <UserPost />}
], {basename: process.env.REACT_APP_BASE_URL})