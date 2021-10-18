import React from 'react';
import './index.css';

//Nome: Gabriely Colombo RA:2760482021008

class CalculadoraOp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      n1: null, n2: null, res: null
    };
    this.handleN1 = this.handleN1.bind(this);
    this.handleN2 = this.handleN2.bind(this);
  }

  handleN1(event) {
    this.setState({
      n1: Number(event.target.value),
    });
  }

  handleN2(event) {
    this.setState({
      n2: Number(event.target.value),
    });
  }

  operacoes(op) {
    switch (op) {
      case 'adicao':
        this.setState({
          res: this.state.n1 + this.state.n2
        });
        break;
      case 'subtracao':
        this.setState({
          res: this.state.n1 - this.state.n2
        });
        break;
      case 'multiplicacao':
        this.setState({
          res: this.state.n1 * this.state.n2
        });
        break;
      case 'divisao':
        this.setState({
          res: this.state.n1 / this.state.n2
        });
        break;
    }
  }

  render() {
    return (
      <div class="corpo">
        <fieldset class="caixa">
          <form>
            <div class="row">
              <div class="col-md-10">

                <div class="form-group row " align="center">
                  <label> Numero 1: </label>
                  <input type="number" value={this.state.n1} onChange={this.handleN1}/>
                </div>

                <div class="form-group row" align="center">
                  <label> Numero 2: </label>
                  <input type="number" value={this.state.n2} onChange={this.handleN2}/>
                </div>

                <div class="form-group row" >

                  <fieldset class="border p-1">
                    <legend class="w-auto"> Escolha a operação desejada: </legend>

                    <div class="form-group">
                      <label onClick={() => this.operacoes('adicao')}>
                        <input type="radio" name="op" /> Adição
                      </label>
                    </div>

                    <div class="form-group">
                      <label onClick={() => this.operacoes('subtracao')}>
                        <input type="radio" name="op" /> Subtração
                      </label>
                    </div>

                    <div class="form-group">
                      <label onClick={() => this.operacoes('multiplicacao')}>
                        <input type="radio" name="op" /> Multiplicação
                      </label>
                    </div>

                    <div class="form-group">
                      <label onClick={() => this.operacoes('divisao')}>
                        <input type="radio" name="op" /> Divisão
                      </label>
                    </div>

                  </fieldset>

                </div>

                <div class="form-group row" align="center">
                  <label> Resultado: </label>
                  <input type="text" value={this.state.res} readOnly/>
                </div>

              </div>
            </div>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default CalculadoraOp;