import { createContext, useState } from 'react';

const RouteContext = createContext();

const RouteProvider = ({ children }) => {
  const [routeData, setRouteData] = useState(null);

  return (
    <RouteContext.Provider value={{ routeData, setRouteData }}>
      {children}
    </RouteContext.Provider>
  );
};

export { RouteProvider, RouteContext };