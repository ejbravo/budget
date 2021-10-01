import React from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import { closeModal } from "../redux/actions/modalAction";
import useEntryDetails from "../hooks/useEntryDetails";

interface IProps {
  isOpen: boolean;
  id: string;
  description: string;
  value: number;
  isExpense?: boolean | undefined;
}

const ModalEdit = ({ isOpen, id, description, value, isExpense }: IProps) => {
  const dispatch = useDispatch();

  const entry = useEntryDetails(description, value.toString(), isExpense);

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={entry.description}
          value={entry.value}
          isExpense={entry.isExpense}
          setDescription={entry.setDescription}
          setValue={entry.setValue}
          setIsExpense={entry.setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeModal())}>Close</Button>
        <Button onClick={() => entry.updateEntry(id)} primary>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
