import React from "react";
import useStore from "../store";
import Image from 'react-bootstrap/Image';
import headshot from '../img/daddio.png';

function Home() {
  const messages = useStore((state) => state.messages.reverse());

  return (
    <>
        <h2>Messages</h2><br/>
        <div className="float-start">
            <Image src={ headshot }></Image><br/>
            <i>President Kevin Montavon</i>
        </div>
        { messages.map(item => {
            return (
                <>
                    <i>{ item.date }</i>
                    <h4>{ item.title }</h4>
                    { item.body.map(item => <p>{ item }</p>) }
                </>
            );
        })}
    </>
  );
}

export default Home;
