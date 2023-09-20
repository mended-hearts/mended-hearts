import Article from './Article';

function Articles ({ data }) {
  return (
    <>
        {data.map(item => <Article title={ item.title } body={ item.body } />)}
    </>
  );
}

export default Articles;