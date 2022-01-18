import react, {Component} from "react";
import "./App.css"
import LoginLead from "./componente/pages/CadastroLead/LoginLead";
import Login from "./componente/pages/Login/login";

export default class App extends Component {
    render(){
        return(
           <div className="App">
             <LoginLead/>
           </div>
        );
    }
}