import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ArticlePreview ({ id, title, body, category}) {
  return (
    <Card id={id} xs={4} style={{ padding: "0px", height: "100%" }}>
      <Card.Header>{ title }</Card.Header>
      <Card.Body>
        <Card.Text>{ body.join(" ").slice(0, 100) + "..."}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button href={ process.env.REACT_APP_PATH + category.toLowerCase() + "#" + id }>Read More</Button>
      </Card.Footer>
    </Card>
  );
}

export default ArticlePreview;