import './App.css';
import NavBar from "./components/navbar/NavBar";
import Dialogs from "./components/dialogs/Dialogs";
import { Route, Routes} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";

function App(props) {

    return (

    <div className="app-wraper">
      <HeaderContainer/>
      <NavBar/>
        <div className="app-wraper-content">
            <Routes>
                <Route path='/dialogs/*' element={<Dialogs />}/>
                <Route path='/profile/:userId' element={<ProfileContainer />}/>
                <Route path='/users/*' element={<UsersContainer />}/>
        </Routes>
        </div>

    </div>
  );
}

export default App;
