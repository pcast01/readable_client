// reducer takes in 2 things
// 1. action about what happened
// 2. copy of current state
// 3. logic to update state
// 4. React handles updates to UI

function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;
