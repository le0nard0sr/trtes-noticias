import './style.css'
import NoticiaPrincipal from '../noticia-principal'
import NoticiaSecundaria from '../noticia-secundaria'

function Noticias() {
    return (
        <div className='noticias'>
            <NoticiaPrincipal></NoticiaPrincipal>
            <NoticiaSecundaria></NoticiaSecundaria>
        </div>
    )
}

export default Noticias
