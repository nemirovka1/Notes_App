import {BrowserRouter,Route,Switch} from "react-router-dom";
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { FirebaseState } from "notesPages/context/firebase/FirebaseState";

function App() {
  return (
    <FirebaseState>
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={HomePage}  />
              <Route exact path="/login"   component={LoginPage} />
              <Route  exact path="/register" component={RegisterPage}/>
          </Switch>
        </BrowserRouter>
    </FirebaseState>);
}

export default App;
