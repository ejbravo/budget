import React, { Fragment } from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";

import { IEntry } from "../App";

interface IProps {
  entry: IEntry;
  deleteEntry: (id: number) => void;
  editEntry: (id: number) => void;
}

const EntryLine = ({
  entry: { id, description, value, isExpense = false },
  deleteEntry,
  editEntry,
}: IProps) => {
  return (
    <Fragment>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              ${value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={() => editEntry(id)} />
              <Icon
                name="trash"
                bordered
                color="red"
                onClick={() => deleteEntry(id)}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
};

export default EntryLine;
