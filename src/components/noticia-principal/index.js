import './style.css'
import img_destaque_principal from '../../images/img-destaque-principal.jpg'

function NoticiaPrincipal() {
    return (
        <div className='noticia-principal'>
            <img className='noticia-principal-imagem' src={img_destaque_principal}></img>
            <div className='noticia-principal-resumo'>
                <h2 className='noticia-principal-resumo-titulo'>Promovendo o diálogo: Semana Nacional da Conciliação tem início no TRT-17</h2>
                <p className='noticia-principal-resumo-texto'>As 24 Varas do Trabalho e o Centro Judiciário de Métodos Consensuais de
                Solução de Disputas – CEJUSC do Tribunal Regional do Trabalho da 17ª Região 
                estão mobilizados desde a manhã de segunda-feira (6) em mais um mutirão em prol 
                do diálogo. O objetiv…</p>
            </div>
        </div>
    )
}

export default NoticiaPrincipal