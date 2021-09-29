import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

function App() {
  const [entries, setEntries] = useState<IEntry[]>(initialEntries);
  const [description, setDescription] = useState<string>("");
  const [value, setValue] = useState<string>("0");
  const [isExpense, setIsExpense] = useState<boolean>(true);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [entryId, setEntryId] = useState<number | undefined>();
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (!isOpenModal && entryId) {
      const index = entries.findIndex((item) => item.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = parseFloat(value);
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line
  }, [isOpenModal]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map((entry) => {
      if (entry.isExpense) return (totalExpense += entry.value);
      else return (totalIncome += entry.value);
    });
    setTotalExpense(totalExpense);
    setTotalIncome(totalIncome);
    setTotal(totalIncome - totalExpense);
  }, [entries]);

  const resetEntry = () => {
    setDescription("");
    setValue("0");
    setIsExpense(false);
  };

  const deleteEntry = (id: number) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  const addEntry = () => {
    const result = [
      ...entries,
      {
        id: entries.length + 1,
        description,
        value: parseFloat(value),
        isExpense: isExpense ?? false,
      },
    ];
    setEntries(result);
    resetEntry();
  };

  const editEntry = (id: number) => {
    const entry = entries.find((item) => item.id === id);
    if (entry) {
      setEntryId(id);
      setIsOpenModal(true);
      setDescription(entry?.description || "");
      setValue(entry?.value.toString() || "0");
      setIsExpense(entry?.isExpense || false);
    }
  };

  return (
    <Container style={{ marginTop: "1em", paddingBottom: "1em" }}>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your balance" value={total} size="small" />

      <DisplayBalances income={totalIncome} expense={totalExpense} />

      <MainHeader title="History" type="h3" />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
        addEntry={addEntry}
      />
      <ModalEdit
        isOpen={isOpenModal}
        toggle={() => setIsOpenModal(false)}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
        addEntry={addEntry}
      />
    </Container>
  );
}

export default App;

export interface IEntry {
  id: number;
  description: string;
  value: number;
  isExpense?: boolean;
}

const initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000.0,
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.0,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 300.0,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power bill",
    value: 50.0,
    isExpense: true,
  },
];
