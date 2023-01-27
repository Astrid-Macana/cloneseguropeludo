import styled from "styled-components";
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

    .nuestros-planes {
      display: block;
      width: 100%;
      max-width: 752px;
      margin: auto;
    }
    h1 {
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
    .container-table {
      width: 90%;
      background-color: white;
      margin: 50px auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 50px;
      grid-column-start: 1;
      grid-column-end: 4;
      border-radius: 8px;
    }
    .table-plane-columnBasico,
    .table-plane-column-Estandar,
    .table-plane-columnPremium {
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 30px;
    }
    .table-header {
      font-weight: bold;
      font-size: 1.5em;
      background-color: var(--blue3);
      color: white;
    }
    .p-basic,
    .p-premium {
      font-size: 24px;
      padding: 10px;
      color: var(--blue3);
      background-color: #efefef;
    }
    .p-estandar {
      font-weight: lighter;
      font-size: 1.5em;
      background-color: var(--yellow3);
      color: var(--fondo);
    }
    .p-basic {
      border-radius: 8px 0 0;
    }
    .p-premium {
      border-radius: 0 8px 0 0;
    }

    .table-item {
      font-size: 24px;
      padding: 10px;
      color: var(--blue3);
    }
  }
`;
