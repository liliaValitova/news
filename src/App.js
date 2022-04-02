import { Route } from "react-router";
import Navibar from "./Components/Navibar/Navibar";
import HomePage from "./Components/HomePage/HomePage";
import NewsPage from './Components/NewsPage/NewsPage';
import { projectData } from "./projectData";

const App = () => {
  return (
    <div>
      <Navibar />
      <Route exact path='/'><HomePage projectData={projectData} /></Route>
      <Route exact path='/articles/:index' component={NewsPage} />
    </div>
  );
}

export default App;
