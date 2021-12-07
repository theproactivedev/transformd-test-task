import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import ErrorPage from './ErrorPage';

const Character = ({ novelCharacter }) => {
  if(!novelCharacter) {
    return <ErrorPage />;
  }

  return (
    <>
      <section className="bg-white text-center py-5">
        <Container>
          <img src={novelCharacter?.image} alt={`${novelCharacter?.name}`} />
        </Container>
      </section>
      <section className="py-5">
        <Container>
        <ListGroup>
          <ListGroup.Item>
            <strong>Name:</strong>&nbsp;{novelCharacter?.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Date of Birth:</strong>&nbsp;{novelCharacter?.dob}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Birth Place:</strong>&nbsp;{novelCharacter?.birthPlace}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Nicknames:</strong>&nbsp;{novelCharacter?.nickNames?.join(', ')}
          </ListGroup.Item>
        </ListGroup>
        </Container>
      </section>
    </>
  );
}

export default Character;

Character.propTypes = {
  novelCharacter: PropTypes.object,
}
