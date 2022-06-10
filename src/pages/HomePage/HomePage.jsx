import { Container, Badge } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>
      <Badge bg="info" as="h1" className="d-block mx-auto fs-1 mt-5">
        Welcome to your Phonebook
      </Badge>
    </Container>
  );
};

export default HomePage;
