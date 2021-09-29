import React, { Fragment } from "react";
import { IEntry } from "../App";
import EntryLine from "./EntryLine";

interface IProps {
  entries: IEntry[];
  deleteEntry: (id: number) => void;
  editEntry: (id: number) => void;
}

const EntryLines = ({ entries, deleteEntry, editEntry }: IProps) => {
  return (
    <Fragment>
      {entries.map((entry, key) => (
        <EntryLine
          key={entry.id}
          entry={entry}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />
      ))}
    </Fragment>
  );
};

export default EntryLines;
