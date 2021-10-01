import { AnyAction } from "redux";
import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modalAction";
import { IModal } from "../../utils/interfaces";

const initialState: IModal = {
  isOpen: false,
};

function modalReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: true, id: action.payload };
    case CLOSE_MODAL:
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

export default modalReducer;
