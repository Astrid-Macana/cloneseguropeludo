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

    .planes {
      display: block;
      width: 100%;
      max-width: 752px;
      margin: auto;
    }git
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
      .table{
    width: 90%;
    background-color:white;
    margin: 50px auto;
    display:grid;
    grid-template-columns: repeat(3,1fr) ;
    grid-auto-rows:50px;
    grid-column-start: 1;
    grid-column-end:4;
    
}
.table-header, .table-item{
    display: flex;
    justify-content:center;
    align-items: center;
     line-height:30px ;

}
.table-header{
    font-weight: bold;
    font-size: 1.5em;
    background-color:var( --blue3);
    color:white


    }
    .table-item{
        font-size:24px;
        padding:10px;
        color:var(--blue3) ;
    }
  }
`;
