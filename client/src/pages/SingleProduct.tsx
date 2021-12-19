import { useState, useEffect } from 'react';
import "../styles/pageSingleProduct.css";

export default function SingleProduct({ params }: any) {

    useEffect(() => {

    }, [])

    return (
        <div className="container page mb-4">
            <div className="row">
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-4">
                        <div className="scroll-vertical">
                        <img src="/img/products/01.png" width="100%" alt="" />
                        <img src="/img/products/01.png" width="100%" alt="" />
                        <img src="/img/products/01.png" width="100%" alt="" />
                        <img src="/img/products/01.png" width="100%" alt="" />
                    </div>
                        </div>
                        
                        <div className="col-md-8">
                            <img src="/img/products/01.png" width="100%" alt="" />
                        </div>
                    </div>

                    
                </div>

                <div className="col-md-5">
                    <h1 className="text-center">Producto {params.id}</h1>
                </div>
            </div>
        </div>
    )
}
