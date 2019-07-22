import {
  ADD_PLACE,
  UPDATE_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "../actions/actionTypes";

const initialState = {
  placeName: "",
  places: [],
  selectedPlace: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random() + action.name,
          name: action.name,
          image: {
            uri:
              "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          }
        })
      };
    case UPDATE_PLACE:
      return {
        ...state,
        placeName: action.name
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: Array.from(state.places).filter((item, i) => {
          return item.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: Array.from(state.places).find(place => {
          return place.key === action.key;
        })
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };

    default:
      return state;
  }
};
export default reducer;
