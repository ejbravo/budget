import { IEntry } from "../../utils/interfaces";

export const types = {
  ADD_ENTRY: "ADD_ENTRY",
  DELETE_ENTRY: "DELETE_ENTRY",
  EDIT_ENTRY: "EDIT_ENTRY",
  GET_ENTRY: "GET_ENTRY",
};

const { ADD_ENTRY, DELETE_ENTRY, EDIT_ENTRY, GET_ENTRY } = types;

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
