import Card from 'react-bootstrap/Card';

function Event ({title, datetime, place, description}) {
  return (
    <Card style={{ width: '18rem', padding: "0px" }}>
      <Card.Header>{ title }</Card.Header>
      <Card.Body>
        <Card.Text><b>Date</b>: { datetime }</Card.Text>
        <Card.Text><b>Place</b>: { place }</Card.Text>
        <Card.Text><b>Description</b>: { description }</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Event;