import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Leader from './Leader';

function About() {

  var leaders = [
    {title: "President", name: "Kevin Montavon"},
    {title: "Vice President", name: "Ed Newton"},
    {title: "Secretary", name: "Stephanie Zimmermann"},
    {title: "Treasurer", name: "Debbie Montavon"},
    {title: "Visiting Chair", name: "Kevin Montavon"},
    {title: "Hospital Liaison", name: "Megan Sanders"},
    {title: "Program Chair", name: "Megan Sanders"},
    {title: "Chaplain", name: "Suzanne \"Sam\" Martinez, RTS"},
    {title: "Public Relations", name: "Lynette Eeg"},
    {title: "Newsletter Co-Editor", name: "Kevin Montavon"},
    {title: "Newsletter Co-Editor", name: "Debbie Montavon"}
  ]

  return (
    <div style={{marginLeft : "50px", marginRight: "50px"}}>
      <h2 style={{marginTop : "50px"}}>History</h2>
        <h4>Cardiac Rehab Partners</h4>
          <p>Cardiac rehab is dedicated to the recovery and medical care of the heart patient. The Mended Hearts Program is focused on the practical aspects of living with a heart condition. We are partners in heart health cases.</p>
          <p>How did it all begin? Twenty three years ago, when I suffered my first heart attack, I was helicoptered from Good Shepherd Hospital to Sherman Hospital in Elgin. Steve Lewis was the Visiting Chair for Mended Hearts at Sherman and later became the Visiting chair at Good Shepherd Hospital. When Steve visited me in the hospital, we had an immediate connection. I asked a lot of questions and he had ready answers. Driving home from Sherman, the idea for a Mended Hearts chapter at GHS popped into my mind. I did not want to drive to Elgin.</p>
          <p>At that time, Rosie Jeretina was the Administrator of the Rehab Center in Barrington. There were only a few machines in the program and with one-on-one contact, Rosie and I became good friends. With Rosie’s assistance, we were able to establish the Mended Hearts Chapter #337 at Good Shepherd Hospital.</p>
        <h4>Forward 23 years</h4>
          <p></p>After suffering a heart attack in April, I once again began my rehab at GSH. The program has now moved down the hall and is filled with many more machines. Patients now wear heart monitors collecting data on blood pressure before, during and after exercise as well as diabetic blood testing. It works like a well oiled machine evaluating each patient.<p/>
      <h2 style={{marginTop : "50px"}}>Mission</h2>
        <p>The purpose of The Mended Hearts, Inc. is to offer help, support and encouragement to heart disease patients and their families and to achieve this objective in the following manner:</p>
          <ol>
              <li>To visit, with physician approval, and to offer encouragement to heart disease patients and their families.</li>
              <li>To distribute information of specific educational value to members of the Mended Hearts, Inc. and to heart disease patients and their families</li>
              <li>To establish and maintain a program of assistance to physicians, nurses, medical professionals, and health care organizations in their work with heart disease patients and their families.</li>
              <li>To cooperate with other organizations in education and research activities pertaining to heart disease.</li>
              <li>To assist established heart disease rehabilitation programs for members and their families.</li>
              <li>To plan and conduct suitable programs of social and educational interest for members and for heart disease patients and their families.</li>
          </ol>
      <h2 style={{marginTop : "50px"}}>Leadership</h2>
      <Container>
          <Row>{leaders.map(item => <Col xs={4}><Leader title={item.title} name={item.name} /></Col>)}</Row>
      </Container>
  </div>
  );
}

export default About;