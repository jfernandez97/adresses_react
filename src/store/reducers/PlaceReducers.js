import { ADD_PLACE } from "../actions/PlaceAction";
//models
import Place from "../../models/Place";

const initalState = {
  places: [],
};

export default placeReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(Date.now(), action.title);
      return {
        ...state,
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};
