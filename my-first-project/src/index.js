import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { CardContextProvider } from "./contex/contex";

ReactDOM.render(
  <BrowserRouter>
    <CardContextProvider>
      <App />
    </CardContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
