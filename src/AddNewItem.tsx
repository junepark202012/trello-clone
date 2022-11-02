import React from "react";
import { useState } from "react";
import { AddItemButton } from "./styles";

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

export default function AddNewItem(props: AddNewItemProps) {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    // we're going to render the form here
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
}
