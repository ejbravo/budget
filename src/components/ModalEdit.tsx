import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

interface IProps {
  isOpen: boolean;
  toggle: () => void;
  description: string;
  value: string;
  isExpense: boolean | undefined;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setIsExpense: React.Dispatch<React.SetStateAction<boolean>>;
  addEntry: () => void;
}

const ModalEdit = ({
  isOpen,
  toggle,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
  addEntry,
}: IProps) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={toggle}>Close</Button>
        <Button onClick={toggle} primary>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
