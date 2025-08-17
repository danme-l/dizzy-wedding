import { createContext, useContext } from "react";
import weddingConfig from "./config/wedding.json"; 

// context with the JSON as default value
export const ConfigContext = createContext(weddingConfig);

// ucstom hook so components can use useConfig()
export const useConfig = () => useContext(ConfigContext);
