import React, { Component } from 'react';
import Proptypes from 'prop-types';

export default class Formulario extends Component {
    state = {
        categoria: "technology"
    }

    handleCategoria = e => {
        this.setState({
            categoria: e.target.value
        }, () => {
            //pasarlo a la pg principal
            this.props.consultarNoticias(this.state.categoria)

        })
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra Noticias Por Categoria</h2>
                        <div className="input-field col s12 m8 offset-m2">
                            <select onChange={this.handleCategoria}>
                                <option value="technology">Technology</option>
                                <option value="sports">Sports</option>
                                <option value="science">Science</option>
                                <option value="business">Business</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Formulario.propTypes = {
    consultarNoticias: Proptypes.func.isRequired
}