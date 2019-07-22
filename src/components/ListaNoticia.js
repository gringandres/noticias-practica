import React from 'react';
import Noticia from './Noticia';
import Proptypes from 'prop-types';

const ListaNoticia = ({ noticias }) => (
    <div className="row">
        {noticias.map(noticia => (
            <Noticia 
                key = {noticia.url}
                noticia = {noticia}
            />
        ))}
    </div>
);

ListaNoticia.propTypes = {
    noticias : Proptypes.array.isRequired
}

export default ListaNoticia;
