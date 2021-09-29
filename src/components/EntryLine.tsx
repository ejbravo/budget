import React from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";

interface IProps {
  description: string;
  value: number;
  isExpense?: boolean;
}

const EntryLine = ({ description, value, isExpense = false }: IProps) => {
  return (
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
            <Icon name="edit" bordered />
            <Icon name="trash" bordered color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default EntryLine;
