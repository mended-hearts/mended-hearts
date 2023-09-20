import useStore from "../store";
import Accordion from 'react-bootstrap/Accordion';
import Recipe from './Recipe';


function Recipes () {
  const recipes = useStore((state) => state.recipes);
  return (
    <Accordion defaultActiveKey={ 0 }>
        { recipes
          .map((item, id) => { item.id = id; return item; })
          .map(item => <Recipe data={ item }/> )}
    </Accordion>
  );
}

export default Recipes;