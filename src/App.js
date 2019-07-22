import React, { Component } from 'react';
import Header from './components/Header';
import ListaNoticia from './components/ListaNoticia';
import Formulario from './components/Formulario';

export default class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'technology') => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=f134f24c42434b25bef765ec5607aa40`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    console.log(noticias)

    this.setState({
      noticias: noticias.articles
    })

  }


  render() {
    return (
      <>
        <Header
          titulo='Noticias Api React'
        />
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias={this.consultarNoticias}
          />
          <ListaNoticia
            noticias={this.state.noticias}
          />
        </div>
      </>
    )
  }
}
