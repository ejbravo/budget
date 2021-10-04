import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEntry, editEntry } from "../redux/actions/entryAction";
import { closeModal } from "../redux/actions/modalAction";

const useEntryDetails = (
  entryDescription = "",
  entryValue = "0",
  entryIsExpense = true
) => {
  const [description, setDescription] = useState<string>(entryDescription);
  const [value, setValue] = useState<string>(entryValue);
  const [isExpense, setIsExpense] = useState<boolean>(entryIsExpense);

  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(entryDescription);
    setValue(entryValue);
    setIsExpense(entryIsExpense);
  }, [entryDescription, entryValue, entryIsExpense]);

  const reset = () => {
    setDescription("");
    setValue("0");
    setIsExpense(true);
  };

  const newEntry = () => {
    dispatch(
      addEntry({
        id: "",
        description,
        value: parseFloat(value),
        isExpense,
      })
    );
    reset();
  };

  const updateEntry = (id: string) => {
    dispatch(
      editEntry({
        id,
        description,
        value: parseFloat(value),
        isExpense,
      })
    );
    dispatch(closeModal());
    reset();
  };

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    newEntry,
    updateEntry,
  };
};

export default useEntryDetails;
