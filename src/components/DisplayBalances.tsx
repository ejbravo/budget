import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

interface IProps {}

const DisplayBalances = ({}: IProps) => {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Income" value={1253.54} color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="Expenses" value={623.5} color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
