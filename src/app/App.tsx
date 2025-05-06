import { AppRouter } from "./router";
import { initLocalStorage } from "./providers/initLocalStorage";

initLocalStorage();

export function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}