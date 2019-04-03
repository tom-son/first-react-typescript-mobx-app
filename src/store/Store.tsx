import { decorate, observable } from "mobx";
import axios from "axios";

class Store {
  public prevVisited: any = [];

  public fetchApod = (queryParams?: string) => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=5XBFVFLX9MVTPGp5ZUNGrEsU5uARVdzQ9c07DYGX${queryParams 
        ? "&date=" + queryParams
        : ""}`
      )
      .then((res: any) => res.data)
      .then(data => {
        console.log(data);
        this.prevVisited.unshift(data);
      })
      .catch(err => console.log(err));
  };
}

decorate(Store, {
  prevVisited: observable
});

export default Store;