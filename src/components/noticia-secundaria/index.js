import './style.css'
import img_destaque_secundario_01 from '../../images/img-destaque-secundario-01.jpg'
import img_destaque_secundario_02 from '../../images/img-destaque-secundario-02.jpg'
import img_destaque_secundario_03 from '../../images/img-destaque-secundario-03.jpg'

function NoticiaSecundaria() {
    return (
        <div className='noticias-secundaria'>
            <div className='noticia-secundaria'>
                <img className='noticia-secundaria-imagem' src={img_destaque_secundario_01}></img>
                <h3 className='noticia-secundaria-titulo'>“Nós somos o trânsito”: campanha educativa orienta sobre segurança...</h3>
            </div>
            <div className='noticia-secundaria'>
                <img className='noticia-secundaria-imagem' src={img_destaque_secundario_02}></img>
                <h3 className='noticia-secundaria-titulo'>CSJT aprova resoluções que criam programas de apoio à Política...</h3>
            </div>
            <div className='noticia-secundaria'>
                <img className='noticia-secundaria-imagem' src={img_destaque_secundario_03}></img>
                <h3 className='noticia-secundaria-titulo'>Semana Nacional de Conciliação de 2023 tem início nesta segunda-feira,...</h3>
            </div>
        </div>
    )
}

export default NoticiaSecundaria