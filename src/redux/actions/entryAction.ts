import { IEntry } from "../../utils/interfaces";

export const ADD_ENTRY = "ADD_ENTRY";
export const DELETE_ENTRY = "DELETE_ENTRY";
export const EDIT_ENTRY = "EDIT_ENTRY";
export const GET_ENTRY = "GET_ENTRY";

const addEntry = (entry: IEntry) => ({
  type: ADD_ENTRY,
  payload: entry,
});

const deleteEntry = (id: string) => ({
  type: DELETE_ENTRY,
  payload: id,
});

const editEntry = (entry: IEntry) => ({
  type: EDIT_ENTRY,
  payload: entry,
});

const getEntry = (id: string) => ({
  type: GET_ENTRY,
  payload: id,
});

export { addEntry, deleteEntry, editEntry, getEntry };
