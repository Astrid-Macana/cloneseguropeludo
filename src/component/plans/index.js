import React from 'react';
import { DiferentPlanes } from "./style";


const Planes = () => {
  return (
    <DiferentPlanes>
      <section className="contenedor">
        <article className="nuestros-planes">
          <h1>Nuestros Planes</h1>
          <p className="parf-planes">
            Planeados pensando en la tranquilidad de tu peludito
          </p>
          <div className="container-table">
            <div className="table-plane-columnBasico">
              <p className="p-basic">Básico</p>
              <p className="price-basic">$20.000</p>
              <p className="mensual-b">Mensual</p>
            </div>
            <div className="table-plane-column-Estandar" id="estandar">
              <div className="column-yellow">
                <p>Popular</p>
              </div>
              <p className="p-estandar">Estándar</p>
              <p classNme="price-estandar">$28.000</p>
              <p className="mensual-e">Mensual</p>
              <div className="column-yellow">
                <p>Popular</p>
                </div>
            </div>
            <div className="table-plane-columnPremium">
              <p className="p-premium">Premium</p>
              <p className="price-premium">36.000</p>
              <p className="mensual-p">Mensual</p>
            </div>
          </div>
          <h1>Beneficios de Seguro Peludo</h1>
          <p className="parf-planes">
            Diseñamos nuestros planes para que sean simples y sencillos, de modo
            que puedas pasar menos tiempo eligiendo y más tiempo con tu
            peludito.
          </p>
        </article>
      </section>
    </DiferentPlanes>
  );
}

export default Planes

