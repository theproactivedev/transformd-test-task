import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCharacter } from '../api';
import Header from '../components/Header';
import Character from '../components/Character';
import Footer from '../components/Footer';
import LoadingIcon from '../components/LoadingIcon';

const CharacterPage = () => {
  const { characterId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    getCharacter(characterId)
      .then(item => {
        if(mounted) {
          setCharacter(item);
          setIsLoading(false);
        }
      });
    return () => mounted = false;
  }, [characterId]);

  return (
    <>
      <Header />
      {isLoading &&
        <LoadingIcon />
      }
      {!isLoading &&
        <Character novelCharacter={character} />
      }
      <Footer />
    </>
  );
};

export default CharacterPage;
