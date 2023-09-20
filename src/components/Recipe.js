import Accordion from 'react-bootstrap/Accordion';

function Recipe ({ data }) {
  return (
    <Accordion.Item eventKey={ data.id }>
      <Accordion.Header>{ data.name }</Accordion.Header>
      <Accordion.Body>
        <h4>Nutritional Information</h4>
            { data.nutrition.map(item => <><span>{ item }</span><br/></>)}<br/>
            <h4>Ingredients</h4>
            { data.ingredients.map(item => <><span>{ item }</span><br/></>)}<br/>
            <h4>Directions</h4>
            <ol>
                { data.directions.map(item => <li>{ item }</li>)} 
            </ol>
            <i>{ data.ref }</i><br/><br/>
        </Accordion.Body>
    </Accordion.Item>
  );
}

export default Recipe;