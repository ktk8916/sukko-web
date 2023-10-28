import "./App.css";
import MyRoute from "./routes/MyRoute";
import { GlobalStyles } from "@mui/material";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./configs/firebaseConfig";

function App() {
  const app = initializeApp(firebaseConfig);
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
