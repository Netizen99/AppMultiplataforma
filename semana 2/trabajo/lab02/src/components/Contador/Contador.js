import React, {Component} from 'react';

export default class Contador extends Component{
	state = {
		cont:this.props.valor,
		cont2:this.props.valor2
	}
	sumarHandler = () => {
		this.setState({
			cont: this.state.cont + this.state.cont2
		});
	}
	restarHandler = () => {
		this.setState({
			cont: this.state.cont - this.state.cont2
		});
	}
	multiHandler = () => {
		this.setState({
			cont: this.state.cont * this.state.cont2
		});
	}
	diviHandler = () => {
		this.setState({
			cont: this.state.cont / this.state.cont2
		});
	}
	render(){
		let advertencia = (<p>Operaciones</p>);
			if(this.props.valor<=1) advertencia = null;
		return (<div>
			<p>Resultado: {this.state.cont}</p>
			<button onClick={this.sumarHandler}>Sumar</button>
			<button onClick={this.restarHandler}>Restar</button>
			<button onClick={this.multiHandler}>Multiplicar</button>
			<button onClick={this.diviHandler}>Dividir</button>
			
			</div>)
	}

}