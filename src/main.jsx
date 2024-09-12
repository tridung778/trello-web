import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import theme from "./theme.js";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
      <ToastContainer />
    </CssVarsProvider>
  </>
);
