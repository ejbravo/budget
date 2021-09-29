import React, { Fragment } from "react";
import { Segment, Checkbox, Form } from "semantic-ui-react";

interface IProps {
  description: string;
  value: string;
  isExpense: boolean | undefined;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setIsExpense: React.Dispatch<React.SetStateAction<boolean>>;
}

const EntryForm = ({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}: IProps) => {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          label="Description"
          icon="tags"
          width={12}
          placeholder="New shinny thing"
          value={description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(event.target.value)
          }
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setValue(event.target.value)
          }
        />
      </Form.Group>
      <Segment>
        <Checkbox
          toggle
          label={isExpense ? `Expense` : "Income"}
          checked={isExpense}
          onChange={() => setIsExpense(!isExpense)}
        />
      </Segment>
    </Fragment>
  );
};

export default EntryForm;
