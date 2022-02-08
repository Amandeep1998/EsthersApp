import React, { useState } from "react";
import { Plus } from "phosphor-react";
import productData from "../../data/productData";
import { ProductsContainer, Product, PlusIcon } from "./ProductCatalog.style";

const ProductCatalog = () => {
  return (
    <>
      <ProductsContainer>
        {productData.map(prod => {
          return (
            <Product>
              <img
                style={{
                  width: "100%",
                  height: "288px"
                }}
                src={prod.img}
                alt="Some Image"
                className="image"
              />
              <p
                style={{
                  height: "19px",
                  color: "#3A3A3A",
                  opacity: 0.7,
                  whitespace: "nowrap",
                  marginTop: "15px",
                  marginBottom: "0px"
                }}
              >
                Brand name
              </p>
              <p
                style={{
                  height: "19px",
                  color: "3A3A3A",
                  whitespace: "nowrap",
                  marginTop: "8px",
                  marginBottom: "0px"
                }}
              >
                {prod.name}
              </p>
              <p
                style={{
                  color: "#23574C",
                  height: "21px",
                  whitespace: "nowrap",
                  marginTop: "7px",
                  marginBottom: "0px"
                }}
              >
                ${prod.price}SEK
              </p>
              <PlusIcon>
                <Plus size={17} />
              </PlusIcon>
            </Product>
          );
        })}
      </ProductsContainer>
    </>
  );
};

export default ProductCatalog;
