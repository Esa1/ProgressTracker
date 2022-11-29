import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Styled from "styled-components"

const Section = Styled.section`
    background-color: #ffffff;
    border: solid 3px grey;
    margin: 4px;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: left;
    font-size: 40px;
    color: #ff6961;
`
const WeekdayTitle = Styled.div`
    display: flex;
    justify-content: center;
    width: 50px;
    border-right: solid 3px lightgrey;
`

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>Progress Tracker</h1>
        <div>
          <Section>
            <WeekdayTitle>M</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>T</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>W</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>T</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>F</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>S</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>S</WeekdayTitle>
          </Section>
        </div>
      </>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

//ReactDOM.render(<Main />, document.getElementById('root'))