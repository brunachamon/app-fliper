import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Loader from "../components/Loader";

const Dashboard = lazy(() => import("../pages/Dashboard"));

const Paths = {
  root: '/',
  dashboard: '/dashboard'
};

const Routes = (props: unknown): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Route exact path={Paths.root}>
        <Redirect to={Paths.dashboard} {...props} />
      </Route>

      <Route
        exact
        path={Paths.dashboard}
        component={Dashboard}
        {...props} />
    </Suspense>
  </BrowserRouter>
);

export default Routes;
