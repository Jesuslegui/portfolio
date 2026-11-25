import { PortfolioProvider, usePortfolio } from "./context/PortfolioContext";
import Navbar from "./components/Navbar";
import "./App.css";
import HomeBioView from "./views/HomeBioView";
import ProjectsView from "./views/ProjectsView";
import StackStudiesView from "./views/StackStudiesView";
import AiChatContactView from "./views/AiChatContactView";
import ValuePropView from "./views/ValuePropView";

function MainContent() {
  const { activeView } = usePortfolio();

  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        {activeView === "bio" && <HomeBioView />}
        {activeView === "projects" && <ProjectsView />}
        {activeView === "stack" && <StackStudiesView />}
        {activeView === "chat" && <AiChatContactView />}
        {activeView === "value" && <ValuePropView />}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <MainContent />
    </PortfolioProvider>
  );
}