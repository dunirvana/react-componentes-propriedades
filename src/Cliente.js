import React, { Component } from 'react'

class Cliente extends Component {
    render() {
      return (
            <div>
                <p>Cliente {this.props.nome}</p>
                Endereço: {this.props.endereco}
            </div>
        );
    }
  }

  export default Cliente