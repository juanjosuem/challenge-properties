import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const baseUrl =
  "https://samplerspubcontent.blob.core.windows.net/public/properties.json";

export const AppContext = React.createContext();

export const AppContextProvider = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fecthData() {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setData(data);
    }
    fecthData();
  }, []);

  return (
    <AppContext.Provider value={data}>
      <Container fluid>{props.children}</Container>
    </AppContext.Provider>
  );
};
