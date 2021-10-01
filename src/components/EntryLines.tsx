import React, { Fragment } from "react";
import { IEntry } from "../utils/interfaces";
import EntryLine from "./EntryLine";

interface IProps {
  entries: IEntry[];
}

const EntryLines = ({ entries }: IProps) => {
  return (
    <Fragment>
      {entries.map((entry, key) => (
        <EntryLine key={entry.id} entry={entry} />
      ))}
    </Fragment>
  );
};

export default EntryLines;
