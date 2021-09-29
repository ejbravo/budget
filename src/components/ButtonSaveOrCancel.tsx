import React from "react";
import { Button } from "semantic-ui-react";

interface IProps {
  addEntry: () => void;
}

const ButtonSaveOrCancel = ({ addEntry }: IProps) => {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={addEntry}>
        Ok
      </Button>
    </Button.Group>
  );
};

export default ButtonSaveOrCancel;
