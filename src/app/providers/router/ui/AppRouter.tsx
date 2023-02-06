import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routesConfig/routesConfig";

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => {
          return (
            <Route
              path={path}
              element={<div className="pageWrapper">{element}</div>}
              key={path}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
