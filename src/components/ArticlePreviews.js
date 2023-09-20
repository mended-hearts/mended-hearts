import ArticlePreview from './ArticlePreview';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ArticlePreviews ({ data }) {
  return (
    <Container>
      <Row>
          {data.map((item, id) => <Col xs={4} style={{overflow: "auto"}}><ArticlePreview id={ id } title={ item.title } body={ item.body } category={ item.category }/></Col>)}
      </Row>
    </Container>
  );
}

export default ArticlePreviews;