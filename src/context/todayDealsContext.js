import { createContext, useContext, useState, useEffect } from "react";
import getTodayDeals from "../services/TodayDealsAPI";
const DealsContext = createContext();

export function useDealsContext() {
  return useContext(DealsContext);
}

export default function DealsProvider({ children }) {
  const [deals, setDeals] = useState([]);


  useEffect(() => {
    let mounted = true;
    getTodayDeals().then((items) => {
      if (mounted) {
        setDeals(items);
      }
    });
    return () => (mounted = false);
  }, []);
  

  const handleSetDeals = () => {
    setDeals((prev) => !prev);
  };

  return (
    <DealsContext.Provider value={deals}>{children}</DealsContext.Provider>
  );
}
