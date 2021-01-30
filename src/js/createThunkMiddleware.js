console.log('hello world!')

// function createThunkMiddleware(extraArgument) {
//   return ({ dispatch, getState }) => (next) => (action) => {
//     if (typeof action === 'function') {
//       return action(dispatch, getState, extraArgument);
//     }

//     return next(action);
//   };
// }

function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
var _default = thunk;
