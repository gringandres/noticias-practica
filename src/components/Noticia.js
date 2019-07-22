import React from 'react';
import Proptypes from 'prop-types';

const Noticia = ({ noticia }) => {

    //extraer los datos
    const {
        urlToImage,
        title,
        descripticon,
        source,
        url
    } = noticia;

    //condicionalmente cargar la img si esta disponible

    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
        : null;


    return (
        <div className=" col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{descripticon}</p>
                </div>

                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer" className=" waves-effect wves-light btn">
                        Ver Noticia Completa
                    </a>
                </div>
            </div>
        </div>
    );
}

Noticia.propTypes = {
    noticia : Proptypes.object.isRequired
}

export default Noticia;
