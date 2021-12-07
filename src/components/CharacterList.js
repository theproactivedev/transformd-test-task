import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import ErrorPage from './ErrorPage';

const CharacterList = ({ characters }) => {
  if (!characters) {
    return <ErrorPage />;
  }

  return (
    <section className="bg-light py-5">
      <Container>
        <CardGroup>
          {characters.map((character) => (
            <Card key={character?.id} className="me-3" style={{ width: '18rem' }}>
              <Link to={`/character/${character?.id}`}>
                <Card.Img variant="top" src={character?.image} />
              </Link>
              <Card.Body>
                <LinkContainer to={`/character/${character?.id}`}>
                  <Card.Title as="a" className="h6">
                    {character?.name}
                  </Card.Title>
                </LinkContainer>
                <Card.Text className="d-flex justify-content-between align-items-center pt-3">
                  <LinkContainer to={`/character/${character?.id}`}>
                    <Button variant="outline-secondary">View</Button>
                  </LinkContainer>
                  <span>{character?.dob}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </Container>
    </section>
  );  
}
export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.array,
}
