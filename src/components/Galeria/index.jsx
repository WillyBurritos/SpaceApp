import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"
import Imagen from "./Imagen"


const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`

const ImagenesContainer = styled.section`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 24px;
`


const Galeria = ({fotos= [], setTag, alSeleccionarFoto,
alAlternarFavorito }) => {

    return(
    <>
    <Tag setTag={setTag} />
    <GaleriaContainer>
        <SeccionFluida>
            <Titulo>Navegue por la galería</Titulo>
            <ImagenesContainer>
                {fotos.map(foto=> <Imagen
                foto={foto} key={foto.id}
                alSolicitarZoom={alSeleccionarFoto}
                alAlternarFavorito={alAlternarFavorito} />
                )}
            </ImagenesContainer>
        </SeccionFluida>
        <Populares/>   
    </GaleriaContainer>
    </>
    )
}

export default Galeria