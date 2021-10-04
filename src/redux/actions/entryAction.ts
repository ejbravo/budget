import { IEntry } from "../../utils/interfaces";

export const types = {
  ADD_ENTRY: "ADD_ENTRY",
  ADD_ENTRY_RESULT: "ADD_ENTRY_RESULT",
  DELETE_ENTRY: "DELETE_ENTRY",
  DELETE_ENTRY_RESULT: "DELETE_ENTRY_RESULT",
  EDIT_ENTRY: "EDIT_ENTRY",
  GET_ENTRY: "GET_ENTRY",
  GET_ENTRIES: "GET_ENTRIES",
  SET_ENTRIES: "SET_ENTRIES",
  SET_ENTRY_VALUE: "SET_ENTRY_VALUE",
};

const {
  ADD_ENTRY,
  ADD_ENTRY_RESULT,
  DELETE_ENTRY,
  DELETE_ENTRY_RESULT,
  EDIT_ENTRY,
  GET_ENTRY,
  GET_ENTRIES,
  SET_ENTRIES,
  SET_ENTRY_VALUE,
} = types;

const addEntry = (entry: IEntry) => ({
  type: ADD_ENTRY,
  payload: entry,
});

const addEntryResult = (entry: IEntry) => ({
  type: ADD_ENTRY_RESULT,
  payload: entry,
});

const deleteEntry = (id: string) => ({
  type: DELETE_ENTRY,
  payload: id,
});

const deleteEntryResult = (id: string) => ({
  type: DELETE_ENTRY_RESULT,
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

const getEntries = () => ({
  type: GET_ENTRIES,
});

const setEntries = (entries: IEntry[]) => ({
  type: SET_ENTRIES,
  payload: entries,
});

const setEntryValue = (entry: IEntry) => ({
  type: SET_ENTRY_VALUE,
  payload: entry,
});

export {
  addEntry,
  addEntryResult,
  deleteEntry,
  deleteEntryResult,
  editEntry,
  getEntry,
  getEntries,
  setEntries,
  setEntryValue,
};
