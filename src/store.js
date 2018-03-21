import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import { configureStore } from "./createStore";

let items = [{ name: "blah", path: "path1" }];

// create an object for the default data
const defaultState = {
  items
};

// const prom1 = Promise.resolve(3);

// Promise.all([getCategories, prom1]).then(values => {
//   console.log(values);
//   categories = values[0];
// });

console.log("defaultState");
console.log(defaultState);

const store = configureStore(defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
