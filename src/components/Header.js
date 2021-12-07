import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand>
          Harry Potter Characters
        </Navbar.Brand>
      </LinkContainer>
    </Container>
  </Navbar>
);

export default Header;
