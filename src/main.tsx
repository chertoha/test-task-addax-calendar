import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./components/App";
import GlobalStyle from "./styles/globalStyles";
import HolidaysProvider from "./components/HolidaysProvider";
import TrashProvider from "./components/TrashProvider";

import { persistor, store } from "./redux/store";

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
