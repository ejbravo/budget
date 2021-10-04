import { AnyAction } from "redux";
import { types } from "../actions/entryAction";
import { IEntries } from "../../utils/interfaces";
import { getId } from "../../utils/helpers";

const initialState: IEntries = {
  entries: [],
};

function entryReducer(state = initialState, action: AnyAction) {
  const {
    ADD_ENTRY,
    DELETE_ENTRY,
    EDIT_ENTRY,
    GET_ENTRIES,
    SET_ENTRIES,
    SET_ENTRY_VALUE,
  } = types;
  switch (action.type) {
    case ADD_ENTRY:
      const { id, ...rest } = action.payload;
      return {
        ...state,
        entries: [...state.entries, { id: getId(), ...rest }],
      };
    case DELETE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter((item) => item.id !== action.payload),
      };
    case EDIT_ENTRY:
      return {
        ...state,
        entries: state.entries.map((item) => {
          if (item.id === action.payload.id) return action.payload;
          else return item;
        }),
      };
    case GET_ENTRIES:
      return {
        ...state,
        entries: [...state.entries],
      };
    case SET_ENTRIES:
      return { ...state, entries: action.payload };
    case SET_ENTRY_VALUE:
      return {
        ...state,
        entries: state.entries.map((item) => {
          const { description } = item;
          if (item.id !== action.payload.id) return item;
          else return { description, ...action.payload };
        }),
      };
    default:
      return state;
  }
}

export default entryReducer;
