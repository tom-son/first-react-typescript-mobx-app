import React, { Component, ReactNode } from "react";
import { Route, Link } from "react-router-dom";
import Store from "./store/Store";
import "./App.css";
import Apod from "./pages/apod/apod";
import ImageTileTitle from "./components/imageTileTitle/imageTileTitle";
import Form from "./components/Form/Form";

interface Props {
  appState?: Store;
}

class App extends Component<Props> {
  public render() {
    return (
      <>
        <Link to="/">Home</Link>
        <Route
          path="/"
          exact
          render={props => (
            <React.Fragment>
              <Link to="/apod">
                <ImageTileTitle
                  classNames="imageTileTitle--offwhite"
                  imgUrl="https://apod.nasa.gov/apod/image/1903/NGC3324_SHO_1024.jpg"
                  title="PICTURE OF THE DAY"
                  centerText
                  backdrop
                  bottomAlign
                />
              </Link>
              <Link to="/gallery">
                <ImageTileTitle
                  classNames="imageTileTitle--offwhite"
                  imgUrl="https://apod.nasa.gov/apod/image/1901/vltlaser_beletsky_960.jpg"
                  title="GALLERY"
                  centerText
                  backdrop
                  bottomAlign
                />
              </Link>
              <Link to="/random">
                <ImageTileTitle
                  classNames="imageTileTitle--offwhite"
                  imgUrl="https://apod.nasa.gov/apod/image/1701/SpaceXLaunch_Shortt_960.jpg"
                  title="RANDOM"
                  centerText
                  backdrop
                  bottomAlign
                />
              </Link>
            </React.Fragment>
          )}
        />
        {/* <Route path="/apod" component={Apod} /> */}
        <Route
          path="/apod"
          render={(props): any => (
            <Apod {...props} appState={this.props.appState} />
          )}
        />
        <Route
          path="/gallery"
          render={(props): any => (
            <Apod {...props} isDateController appState={this.props.appState} />
          )}
        />
        <Route path="/random" component={Form}/>
      </>
    );
  }
}

export default App;
