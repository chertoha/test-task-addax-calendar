import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import GlobalStyle from "./styles/globalStyles";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import HolidaysProvider from "./components/HolidaysProvider";
import TrashProvider from "./components/TrashProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <GlobalStyle />
        <HolidaysProvider>
          <TrashProvider>
            <App />
          </TrashProvider>
        </HolidaysProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
