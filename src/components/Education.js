import { useLocation } from 'react-router-dom';
import Article from './Article';
import useStore from "../store";

function Education () {
  const location = useLocation();
  const articles = useStore((state) => state.articles);
  console.log(location.hash.slice(1))

  return (
    <>
        { articles
            .map((item, id) => { item.id = String(id); return item; })
            .filter(item => item.category === 'Education' && (item.id === location.hash.slice(1) || location.hash === ''))
            .map(item => <Article id={ item.id } title={ item.title } body={ item.body } img={ item.img } category={ item.category }/> )
        }
    </>
  );
}

export default Education;