import React from 'react';
import { DiferentPlanes } from "./style";


const Planes = () => {
  return (
    <DiferentPlanes>
      <section className="contenedor">
        <article className="planes">
          <h2>Nuestros Planes</h2>
          <p>Planeados pensando en la tranquilidad de tu peludito</p>
          <div className="table">
            <div className="table-header">Básico</div>
            <div className="table-header">Estándar</div>
            <div className="table-header">Premium</div>
            <div className="table-item">20000</div>
            <div className="table-item">28000</div>
            <div className="table-item">36000</div>
            <div className="table-item">Mensual</div>
            <div className="table-item">Mensual</div>
            <div className="table-item">Mensual</div>
          </div>
          <h2>Beneficios de seguro </h2>
          <p>
            Diseñamos nuestros planes para que sean simples y sencillos, de modo
            que puedas pasar menos tiempo eligiendo y más tiempo con tu
            peludito.{" "}
          </p>
        </article>
      </section>
    </DiferentPlanes>
  );
}

export default Planes

