import Card from 'react-bootstrap/Card';

function Leader ({ title, name }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>{ name }</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Leader;