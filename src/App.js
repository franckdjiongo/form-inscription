import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Remerciement from "./composants/Remerciement";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormInscription from "./composants/FormInscription";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path="/" component={FormInscription} />
              <Route path="/inscription" component={FormInscription} />
              <Route path="/merci/:nom" component={Remerciement} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
