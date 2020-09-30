import React, { Component } from "react";

const baseUrl =
  "https://samplerspubcontent.blob.core.windows.net/public/properties.json";

export const AppContext = React.createContext();

export class AppContextProvider extends Component {
  state = {
    data: null,
  };
  async componentDidMount() {
    const response = await fetch(baseUrl);
    const data = await response.json();
    this.setState((state, props) => {
      return { data };
    });
  }
  render() {
    return (
      <AppContext.Provider value={this.state.data}>
        <div className="container-fluid">{this.props.children}</div>
      </AppContext.Provider>
    );
  }
}

export const AppContextConsumer = AppContext.Consumer;
