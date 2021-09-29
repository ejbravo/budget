import React from "react";
import { Container } from "semantic-ui-react";
import "./App.css";

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container style={{ marginTop: "1em", paddingBottom: "1em" }}>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your balance:" value={2550.53} size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      <EntryLine description="Income" value={10.0} />
      <EntryLine description="Expense" value={10.0} isExpense />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
