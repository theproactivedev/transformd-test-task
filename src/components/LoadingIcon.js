import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';


const LoadingIcon = () => (
  <Container className="py-5 text-center">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </Container>
);

export default LoadingIcon;