import "./App.css";
import MyRoute from "./routes/MyRoute";
import { GlobalStyles } from "@mui/material";

function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          a: {
            textDecoration: "none",
            color: "inherit",
          },
        }}
      />
      <MyRoute />
    </>
  );
}

export default App;
