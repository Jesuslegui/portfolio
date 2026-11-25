import { createContext, useState, useEffect, useContext } from "react";
import { initialProjects } from "../data/portfolioData";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [activeView, setActiveView] = useState("bio"); // 'bio' | 'projects' | 'stack' | 'chat' | 'value'
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hola, soy el asistente técnico de Jesús David. Pregúntame sobre su stack backend (C#, Python, PHP, JS), bases de datos o repositorios."
    }
  ]);

  // Carga inicial simulando ciclo de vida con useEffect y Promesa
  useEffect(() => {
    const loadProjectsAsync = () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(initialProjects), 200);
      });

    loadProjectsAsync().then((data) => {
      setProjects(data);
    });
  }, []);

  const addChatMessage = (sender, text) => {
    setChatHistory((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), sender, text }
    ]);
  };

  return (
    <PortfolioContext.Provider
      value={{
        activeView,
        setActiveView,
        projects,
        selectedProject,
        setSelectedProject,
        chatHistory,
        addChatMessage
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);