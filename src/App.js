import Router from "./routes";
import ScrollToTop from "./components/ScrollToTop";
import ThemeConfig from "./theme";
export default function App() {
  return (
    <div>
      <ThemeConfig>
        <ScrollToTop />
        <Router />
      </ThemeConfig>
    </div>
  );
}
