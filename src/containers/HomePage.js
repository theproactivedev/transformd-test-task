import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { getCharacters } from '../api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CharacterList from '../components/CharacterList';
import LoadingIcon from '../components/LoadingIcon';


const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    getCharacters()
      .then(items => {
        if(mounted) {
          setCharacterList(items);
          setIsLoading(false);
        }
      });
    return () => mounted = false;
  }, [])

  return (
    <>
      <Header />
      <section className="bg-white py-5 text-center">
        <Container>
          <h1>Harry Potter Character Database</h1>
          <p>Browse our comprehensive database to out more information about your favourite Harry Potter character.</p>
        </Container>
      </section>
      {isLoading &&
        <LoadingIcon />
      }
      {!isLoading && 
        <CharacterList characters={characterList} />
      }
      <Footer />
    </>
  );
};

export default HomePage;
