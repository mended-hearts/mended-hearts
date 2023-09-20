import React from "react";
import useStore from "../store";
import Image from 'react-bootstrap/Image';
import ArticlePreviews from './ArticlePreviews';
import headshot from '../img/daddio.png';
import '../index.css';

function Home() {
  const articles = useStore((state) => state.articles);
  const message = useStore((state) => state.messages.at(-1));

  return (
    <table>
        <tr><h2>From the President</h2></tr>
        <tr>
            <div className="float-start">
                <Image src={ headshot }></Image><br/>
                <i>President Kevin Montavon</i>
            </div>
            <div>
                <h4>{ message.title }</h4>
                { message.body.map(item => <p>{ item }</p>) }
            </div>
        </tr>
        <tr>
            <h2 style={{marginTop: "50px"}}>Recent Articles</h2><br/>    
            <ArticlePreviews data={ articles.slice(-3) }/>
        </tr>
    </table>
  );
}

export default Home;
