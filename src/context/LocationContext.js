import createDataContext from "./createDataContext";

const locaitonReducer = (state, action) => {
  switch (action.type) {
    case "add_current_locaiton":
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRecording = (dispatch) => () => {};
const stopRecording = (dispatch) => () => {};
const addLocation = (dispatch) => (location) => {
  dispatch({ type: "add_current_location", payload: location });
};

export const { Context, Provider } = createDataContext(
  locaitonReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
  },
  { recording: false, locations: [], currentLocation: null }
);
