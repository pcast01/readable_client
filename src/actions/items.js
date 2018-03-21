export function itemsHasErrored(bool) {
  return {
    type: "ITEMS_HAS_ERRORED",
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: "ITEMS_IS_LOADING",
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    items
  };
}

export function itemsFetchData(url, type) {
  return dispatch => {
    dispatch(itemsIsLoading(true));
    const myInit = {
      method: "GET",
      headers: {
        Authorization: "readable"
      }
    };
    fetch(url, myInit)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(items => {
        console.log(items);
        if (type === "categories") {
          dispatch(itemsFetchDataSuccess(items["categories"]));
          //} //else if (type === "posts") {
          //dispatch(itemsFetchDataSuccess(items["posts"]));
        } else {
          dispatch(itemsFetchDataSuccess(items));
        }
      })
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
