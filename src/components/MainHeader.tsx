import React from "react";
import { Header } from "semantic-ui-react";

interface IProps {
  title: string;
  type: string;
}

const MainHeader = ({ title, type = "h1" }: IProps) => {
  return <Header as={type}>{title}</Header>;
};

export default MainHeader;
