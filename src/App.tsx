import React from "react";

import { AppContainer, ColumnContainer } from "./styles";
import Column from "./Column";

const App = () => {
  return (
    <AppContainer>
      <ColumnContainer>
        <Column text="Todo: ">Hi</Column>
      </ColumnContainer>
    </AppContainer>
  );
};

export default App;
