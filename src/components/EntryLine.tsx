import React, { Fragment } from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";

import { IEntry } from "../utils/interfaces";
import { useDispatch } from "react-redux";
import { deleteEntry, editEntry } from "../redux/actions/entryAction";
import { openModal } from "../redux/actions/modalAction";

interface IProps {
  entry: IEntry;
}

const EntryLine = ({
  entry: { id, description, value, isExpense = false },
}: IProps) => {
  const dispatch = useDispatch();

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
              <Icon
                name="edit"
                bordered
                onClick={() => dispatch(openModal(id))}
              />
              <Icon
                name="trash"
                bordered
                color="red"
                onClick={() => dispatch(deleteEntry(id))}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
};

export default EntryLine;
