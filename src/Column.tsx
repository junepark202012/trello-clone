import React from "react";
import Card from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
  children: React.ReactNode;
};

export default function Column({ text, children }: ColumnProps) {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Generate app scaffold"></Card>
      <Card text="Learn TypeScript"></Card>
      <Card text="Begin to use static typing"></Card>
      {children}
    </ColumnContainer>
  );
}
