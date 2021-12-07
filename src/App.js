import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import CharacterPage from './containers/CharacterPage';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character/:characterId" element={<CharacterPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
