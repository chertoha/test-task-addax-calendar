import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import GlobalStyle from "./styles/globalStyles";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <GlobalStyle />
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
