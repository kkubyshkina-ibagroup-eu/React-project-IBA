import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CardContextProvider } from "./contex/contex";

ReactDOM.render(
  <CardContextProvider>
    <App />
  </CardContextProvider>,
  document.getElementById("root")
);
