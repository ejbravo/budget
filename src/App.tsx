import React, { useState, useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getEntries } from "./redux/actions/entryAction";

// components
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

// interfaces
import { IEntries, IEntry, IModal } from "./utils/interfaces";

// styles
import { Container } from "semantic-ui-react";
import "./App.css";

function App() {
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [entry, setEntry] = useState<IEntry>({
    id: "",
    description: "",
    value: 0,
    isExpense: true,
  });

  const { isOpen, id } = useSelector(
    (state: { modals: IModal }) => state.modals
  );
  const entries = useSelector(
    (state: { entries: IEntries }) => state.entries.entries
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);

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

  useEffect(() => {
    const _entry = entries.find((item) => item.id === id);
    _entry && setEntry(_entry);
  }, [id, isOpen, entries]);

  return (
    <Container style={{ marginTop: "1em", paddingBottom: "1em" }}>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your balance" value={total} size="small" />

      <DisplayBalances income={totalIncome} expense={totalExpense} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
