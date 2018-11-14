import * as React from 'react';

export interface NewCompProps {
  string1: string;
  string2: string;
}
interface NewCompState {
  string3: string;
  string4: string;
}

export default class NewComp extends React.Component<
  NewCompProps,
  NewCompState
> {
  state = {
    string3: 'hello state',
    string4: 'good bye state'
  };
  public render() {
    return (
      <>
        <h1>{this.props.string1}</h1>
        <h1>{this.props.string2}</h1>
        <h1>{this.state.string3}</h1>
        <h1>{this.state.string4}</h1>
      </>
    );
  }
}
