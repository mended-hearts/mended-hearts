import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Article.css';

function Article ({ id, title, body, img, category }) {
  return (
    <Container>
      <Row id={ category.toLowerCase() + "-" + id }>
        <Col>
          <h2 style={{ marginTop: id === 0 ? "0px" : "50px"}}>{ title }</h2>
            { img ? <Image className={ id % 2 === 0 ? 'float-end' : 'float-start' } src={ require('../img/' + img) } style={{maxHeight: "350px", maxWidth: "350px"}}/> : <></>}
            { body.map(item => <p>{ item }</p>) }              
        </Col>
      </Row>
    </Container>
  );
}

export default Article;