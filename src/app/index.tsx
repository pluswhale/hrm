import './index.css';
import {Routing} from "pages/routing";
import {withProviders} from "./providers";

function App() {
  return (
      <div className="App">
        <div className={"d-flex flex-nowrap"}>
          <Routing/>
        </div>
      </div>
  );
}

export default withProviders(App);
