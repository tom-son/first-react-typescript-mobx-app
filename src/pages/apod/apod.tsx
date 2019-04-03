import React, { SyntheticEvent } from "react";
import { observer } from "mobx-react";
import Store from "../../store/Store";
import { RouteComponentProps } from "react-router-dom";
import "./apod.css";
import ImageTile from "../../components/imageTile/imageTile";
import DateController from "../../components/dateController/dateController";

interface State {
  // url: string;
  // title: string;
  // date: string;
  // explanation: string;
  fetchDate: any;
}

interface Props {
  isDateController?: boolean;
  appState?: Store;
}

class Apod extends React.Component<Props & RouteComponentProps> {
  state: State = {
    // url: "",
    // title: "",
    // date: "",
    // explanation: "",
    fetchDate: new Date()
  };

  componentDidMount() {
    // this.fetchApod();
    if (this.props.appState) {
      this.props.appState.fetchApod();
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { fetchDate } = this.state;
    if (prevState.fetchDate !== fetchDate && this.props.appState) {
      const queryParams = `${fetchDate.getFullYear()}-${fetchDate.getMonth()}-${fetchDate.getDate()}`;
      this.props.appState.fetchApod(queryParams);
    }
  }

  // fetchApod = (queryParams?: string) => {
  //   axios
  //     .get(
  //       `https://api.nasa.gov/planetary/apod?api_key=5XBFVFLX9MVTPGp5ZUNGrEsU5uARVdzQ9c07DYGX${queryParams
  //       ? "&date=" + queryParams
  //       : ""}`
  //     )
  //     .then((res: any) => res.data)
  //     .then(data => {
  //       console.log(data);
  //       this.setState(function(prevState: State) {
  //         return {
  //           ...data
  //         };
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  private decDate = (e: SyntheticEvent) => {
    this.setFetchDate(-1);
  };

  private incDate = (e: SyntheticEvent) => {
    this.setFetchDate(1);
  };

  // set a negative numDays to set date backwards
  private setFetchDate = (numDays: number) => {
    this.setState(function(prevState: State) {
      const current = prevState.fetchDate;
      const next = new Date();
      next.setDate(current.getDate() + numDays);
      // console.log(next);
      return {
        fetchDate: next
      };
    });
  };

  public render() {
    const {
      // url, title, date, explanation,
      fetchDate
    } = this.state;
    const { isDateController } = this.props;
    let apodList;

    if (this.props.appState) {
      apodList = this.props.appState.prevVisited.map((element: any, i: number) => (
        <React.Fragment key={i}>
          <ImageTile classNames="apodImageTitle" imgUrl={element.url}>
            <section className="apodImageTitle__content">
              <h4>{element.title}</h4>
              <p>{element.date}</p>
            </section>
          </ImageTile>
          <div className="apod__details">
            <p>{element.explanation}</p>
          </div>
        </React.Fragment>
      ));
    }

    return (
      <div>
        {isDateController && (
          <DateController
            backOnClick={this.decDate}
            nextOnClick={this.incDate}
            title={fetchDate.toString()}
          />
        )}
        {apodList}
      </div>
    );
  }
}

export default observer(Apod);
