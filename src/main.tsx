import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Reset } from "styled-reset";
import { Provider } from "react-redux";
import { store } from "./components/reduxToolkit/index.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Reset />
        <Provider  store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
