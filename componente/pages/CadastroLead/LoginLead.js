import react, {Component} from "react";
import {Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap'
import Header from "../../Header/ComponenteHeader";


export default class LoginLead extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message : this.props.state ? this.props.state.message: '',
        };
    }

    signIn = () => {
        const url = "http://localhost:8080/leads";
        const data = {
           nome: this.nome,
           email: this.email,
           observacoes: this.observacoes,
        };
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };
        fetch(url, requestInfo)
        .then( response => {
            console.log("Cadastrado com sucesso")
            this.setState({message: "O cadastro foi efetuado com sucesso"})
            return response
        }).catch( e => {
            console.log("Lead inválido")
        }
        );
    }

    render() {
        return(
            <div>
                <Header title="Cadastro de Lead"/>
              <hr/>
                {
                    this.state.message !== ''? (
                        <Alert color='success' className='text-center'>{this.state.message}</Alert>
                    ) : ''
                }
            
                <Form>
                        <FormGroup>
                            <Label for = "email"> Email </Label>
                            <Input type= "text" id= "email" onChange={e => this.email = e.target.value} placeholder="Informe seu email: "/>
                        </FormGroup>
                    <FormGroup>
                        <Label for = "name"> Nome </Label>
                        <Input type= "name" id= "name" onChange={e => this.nome = e.target.value} placeholder="Informe seu nome: "/>
                    </FormGroup>
                    <FormGroup>
                        <Label for = "observacoes"> Observações </Label>
                        <Input type= "text" id= "observacoes" onChange={e => this.observacoes = e.target.value} placeholder="Observações: "/>
                    </FormGroup>
                    <Button color="primary" onClick={this.signIn}> Enviar </Button>
                 </Form>  
            </div>
      );
    }
}