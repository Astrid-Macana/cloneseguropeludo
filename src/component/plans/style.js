import styled from 'styled-components';
import imageBackground from "../../imagenes/backgroud.png";



export const DiferentPlanes = styled.section`
  background-image: url(${imageBackground});
  height: 60rem;

  background-repeat: repeat;
  background-size: 150px;

  .contenedor {
    display: flex;
    flex-direction: column;
    padding: 0 30px;

    .planes {
      display: block;
      width: 100%;
      max-width: 752px;
      margin: auto;

      h2 {
        color: white;
        font-size: 30;
        padding-top: 50px;
        padding-bottom: 30px;
        font-family: var(--family-titlle);
        text-align: center;
      }
      p {
        color: white;
        text-align: center;
      }
    }
  }
`;



