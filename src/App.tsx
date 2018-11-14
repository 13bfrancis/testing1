import React, { Component } from 'react';
import NewComp from './NewComp';
import './App.css';
import styled from 'styled-components';

const Test = styled<{ hello?: string }, 'div'>('div')`
  width: 100px;
  height: 100px;
  background: ${props => props.hello || 'green'};
  transition: background ease-in 1s;
`;

const Tester = styled(Test)`
  background: purple;
  color: #000;
  &:hover {
    background: green;
  }
`;
interface State {
  testing: string;
  testing2: boolean;
}

class App extends Component<{}, State> {
  state = {
    testing: 'hello',
    testing2: false
  };
  render() {
    const { testing } = this.state;
    return (
      <>
        {testing}
        <Test hello="red" />
        <Tester />
        <NewComp string1="hello" string2="good bye" />
      </>
    );
  }
}

export default App;
