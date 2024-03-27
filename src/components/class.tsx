"use client";

import React from "react";

type ClassProps = {
  type: string;
};

export class Class extends React.Component<ClassProps> {
  state = {
    name: "name",
    country: "country",
    count: 0,
  };

  add = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  subtract = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <p>{this.state.name}</p>
        <p>{this.state.country}</p>

        <button onClick={this.add}>add</button>
        <button onClick={this.subtract}>subtract</button>
      </>
    );
  }
}
