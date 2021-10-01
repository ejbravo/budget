import { AnyAction } from "redux";
import {
  ADD_ENTRY,
  EDIT_ENTRY,
  DELETE_ENTRY,
  GET_ENTRY,
} from "../actions/entryAction";
import { IEntries } from "../../utils/interfaces";
import { getId } from "../../utils/helpers";

const initialState: IEntries = {
  entries: [
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      description: "Work income",
      value: 1000.0,
    },
    {
      id: "9b1deb4a-3b7d-4bad-9bdd-2b0d7b3dcb5c",
      description: "Water bill",
      value: 20.0,
      isExpense: true,
    },
    {
      id: "9b1deb4a-3b7d-4bad-9bdd-2b0d7b3dcb3b",
      description: "Rent",
      value: 300.0,
      isExpense: true,
    },
    {
      id: "9b1deb4a-3b7d-4bad-9bdd-2b0d7b3dc11a",
      description: "Power bill",
      value: 50.0,
      isExpense: true,
    },
  ],
};

function entryReducer(state = initialState, action: AnyAction) {
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
    case GET_ENTRY:
      return {};
    default:
      return state;
  }
}

export default entryReducer;
