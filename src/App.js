import WelcomePage from './pages/WelcomePage';
import MainPage from './pages/MainPage';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { useState } from 'react';




function App() {
  const [page, setPage] = useState('welcome');

  return (
    <ChakraProvider value={defaultSystem}>
      {page === 'welcome' ? (
        <WelcomePage onStart={() => setPage('main')} />
      ) : (
        <MainPage />
      )}
    </ChakraProvider>
  );
}

export default App;