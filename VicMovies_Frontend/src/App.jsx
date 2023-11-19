import { BrowserRouter } from 'react-router-dom';
import RoutesIndex from '@/routes/RoutesIndex';
import { AuthProvider } from '@/context/AuthContext';
import { MovieProvider } from '@/context/MovieContext';
import { NavBar } from './components/NavBar/NavBar';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MovieProvider>
          <NavBar />
          <RoutesIndex />
        </MovieProvider>
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;
