import { createContext, useContext, useEffect, useState } from "react";

export const ConfigContext = createContext(null);

// custom hook so components can just use useConfig()
export const useConfig = () => useContext(ConfigContext);

export function ConfigProvider({ children }) {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const configUrl = process.env.REACT_APP_CONFIG_FILE_URL;

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await fetch(configUrl);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setConfig(data);
      } catch (err) {
        console.error("Failed to fetch config:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, [configUrl]);

  if (loading) return <p>Loading wedding info...</p>;
  if (error) return <p>Could not load wedding info.</p>;

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
}
