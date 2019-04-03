// import React from "react";
import * as React from "react";

interface IProps {
  text: string;
  age?: number;
}

interface IState {
  email: string;
  name: string;
}

class Form extends React.Component<IProps, IState> {
  public state: IState = {
    email: "",
    name: ""
  };

  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { id, value }: any = e.target;
    // @ts-ignore
    this.setState({
      // [name as keyof IState]: value, // type cast to inform TypeScript compiler what is the range of values we might potentially expect from e.target.name
      [id]: value
    });
  };

  public render() {
    const { text } = this.props;
    const { email } = this.state;
    return (
      <form>
        <h1>{text}</h1>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          onChange={this.handleChange}
          value={email}
        />
        <p>{email}</p>
      </form>
    );
  }
}

export default Form;
