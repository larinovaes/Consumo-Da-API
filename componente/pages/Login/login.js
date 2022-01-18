/* eslint-disable no-unreachable */
import react, {Component} from "react";
import {Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap'
import Header from "../../Header/ComponenteHeader";


export default class Login extends Component {
    constructor(props){
     super(props)
     this.state = {
      message: this.props.state? this.props.state.message: '',
      };
    }    

    signIn = () => {
        const url = "http://localhost:8080/login";
        const data = {
            email: this.emal,
            senha: this.password,
        };
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-type': 'application/json'
            }),
        };
        fetch(url, requestInfo)
        .then(response =>  { //cenário feliz
            if(response.ok){
                console.log("O login foi realizado com sucesso.")
                return response.headers.get("Authorization")
            }
            throw new Error("Login inválido") 
        }).then(token => {
            localStorage.setItem('token', token);

        }).catch( e => { //cenário triste
            this.setState({message: e.message})
            console.log(this.email, this.password)
        }
        ); 
    
    }      
    
    render() {
        return(
            <div className="col-md-6">
              <Header title= "Página de login"/>
              <hr/>
              {
                  this.state.message !== ''? (
                      <Alert color= "danger" className="text-center">{this.state.message}</Alert>
                  ) : ''
              }
                <Form>
                        <FormGroup>
                            <Label for = "email"> Email </Label>
                            <Input type= "text" id= "email" onChange={e => this.email = e.target.value} placeholder="Informe seu email: " />
                        </FormGroup>
                            <FormGroup>
                            <Label for = "password"> Senha </Label>
                            <Input type= "password" id= "password" onChange={e => this.password = e.target.value} placeholder="Informe sua senha: " />
                        </FormGroup>

                    <Button color="primary" block onClick={this.signIn}> Entrar </Button>
                </Form>  
            </div>
       );
    }
}