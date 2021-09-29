import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

interface IProps {
  income: number;
  expense: number;
}

const DisplayBalances = ({ income, expense }: IProps) => {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Income" value={income} color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="Expenses" value={expense} color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
