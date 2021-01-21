import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../home/Home";
import IFrame from "../common/iFrame/IFrame";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path={[
            "/balswapusdcorbs",
            "/uniswapethorbs",
            "/uniaddethorbs",
            "/baladdusdcorbs",
          ]}
          render={() => <IFrame />}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
