import { createContext, useContext, useEffect, useState } from "react";
import sampleConfig from './config/sample.json';
export const ConfigContext = createContext(null);

// custom hook so components can just use useConfig()
export const useConfig = () => useContext(ConfigContext);

export function ConfigProvider({ children, appMode }) {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // url to the config file in blob storage
  const configUrl = process.env.REACT_APP_CONFIG_FILE_URL;

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        let data;
        // sample mode
        if (appMode === "sample") {
          data = sampleConfig;
        }
        // local wedding file in dev mode
        else if (process.env.NODE_ENV === 'development') {
          // only import the config in dev mode since it's git ignored
            const weddingConfig = await import('./config/wedding.json');
            data = weddingConfig;
        } 
        else {
          // get config from the blob storage in prod
          const res = await fetch(configUrl);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          data = await res.json();
        }

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
