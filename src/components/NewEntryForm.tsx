import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

interface IProps {
  description: string;
  value: string;
  isExpense: boolean | undefined;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setIsExpense: React.Dispatch<React.SetStateAction<boolean>>;
  addEntry: () => void;
}

const NewEntryForm = ({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
  addEntry,
}: IProps) => {
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveOrCancel addEntry={addEntry} />
    </Form>
  );
};

export default NewEntryForm;
