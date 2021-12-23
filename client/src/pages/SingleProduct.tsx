import { useState, useEffect } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import "../styles/pageSingleProduct.css";
import Carousel from "../widgets/Carousel";

export default function SingleProduct({ params }: any) {
  useEffect(() => {
    window.scroll(0,0)
  }, []);

  return (
    <div className="container page mb-4">
      <BreadCrumbs />

      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-2">
              <div className="sidebar-images">
                <img src="/img/products/01.png" width="100%" alt="" />
                <img src="/img/products/01.png" width="100%" alt="" />
                <img src="/img/products/01.png" width="100%" alt="" />
                <img src="/img/products/01.png" width="100%" alt="" />
              </div>
            </div>

            <div className="col-md-10">
              <img src="/img/products/01.png" width="100%" alt="" />
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <h1 className="mt-4">Producto {params.id}</h1>
          <h4>
            <b>20$</b>
          </h4>

          <h6 className="text-uppercase mt-4">Descripción</h6>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi
            similique saepe doloremque inventore alias ea autem earum debitis!
            Deserunt ipsa blanditiis distinctio sunt nesciunt, a consequuntur
            ratione facilis sed?
          </p>

          <h6 className="text-uppercase">Detalles</h6>

          <ul>
            <li>100 % algodón</li>
            <li>Lavar en lavadora en frío</li>
            <li>Secar en secadora a baja temperatura</li>
          </ul>

          <h6 className="text-uppercase">Tallas</h6>

          <div className="sizes">
            <div className="size-box">S</div>

            <div className="size-box">M</div>

            <div className="size-box">L</div>

            <div className="size-box">XL</div>
          </div>
        </div>
      </div>

      <Carousel title="Recomendados para ti" />
      <Carousel title="Más vendidos" />

    </div>
  );
}
