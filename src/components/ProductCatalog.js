import React, { useState } from "react";
import styled from "styled-components";
import { X, FunnelSimple, MagnifyingGlass, Plus } from "phosphor-react";
import productData from "../data/productData";
const SearchContainer = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  position: relative;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    width: 90vw;
    height: 4vh;
  }
`;

const FilterButton = styled.button`
  width: 130px;
  height: 42px;
  margin-right: 18px;
  cursor: pointer;
  background: #3a3a3a 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  color: #fff;
  border: none;
  font-size: 0.9em;
  @media only screen and (max-width: 400px) {
    width: 20%;
    font-size: 10px;
  }
`;

const SearchInputContainer = styled.div`
  width: 1055px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 2px;
  opacity: 1;
  margin-right: 18px;

  display: flex;

  align-items: center;
  @media only screen and (max-width: 400px) {
    width: 50%;
  }
`;

const SearchField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  opacity: 1;
  margin: 0 5px;
  padding-left: 13px;
  &:focus {
    outline: none;
  }
`;

const SelectInput = styled.select`
  width: 288px;
  height: 42px;
  padding-left: 10px;

  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d1d5db;
  border-radius: 2px;
  opacity: 1;
  @media only screen and (max-width: 400px) {
    width: 25%;
  }
`;

const Categories = styled.div`
  width: 100%;
  height: 8vh;
  text-align: left;
  font: normal normal normal 14px/18px Strawford;
  letter-spacing: 0px;
  color: #3a3a3a;
  opacity: 1;
  @media only screen and (max-width: 900px) {
    width: 90vw;
    height: 6vh;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
    height: 7vh;
    margin-top: 2px;
  }
`;

const CategoriesContainer = styled.div`
  width: 100%;
  height: 7vh;
  background-color: "green";
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
  overflow-x: scroll;
  transition: all 0.1s;
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Category = styled.button`
  margin: 5px 10px 5px 0px;

  padding: 10px;
  white-space: nowrap;
  border-radius: 999px;
  background-color: #fff;
  border: none;
  text-align: left;
  font: normal normal normal 14px/18px Strawford;
  letter-spacing: 0px;
  color: #3a3a3a;
  opacity: 1;
  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
`;

const ProductsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-content: stretch;
  column-gap: 25px;
  flex-wrap: wrap;
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Product = styled.div`
  width: 245px;
  height: 350px;

  text-align: "left";
  display: flex;
  flex-direction: column;
  position: relative;
  &:hover .image {
    filter: brightness(75%);
    transition: all 0.6s ease;
  }
  @media only screen and (max-width: 900px) {
    width: 240px;
    margin: 2px;
  }
  @media only screen and (max-width: 400px) {
    width: 400px;
  }
`;

const PlusIcon = styled.div`
  width: 22px;
  height: 22px;
  background-color: #fff;
  border-radius: 100%;
  position: absolute;
  bottom: 110px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  visibility: hidden;

  ${Product}:hover & {
    visibility: visible;
    transition: all 0.6s ease;
  }
`;

const ProductCatalog = () => {
  const [showCategories, setShowCategories] = useState(true);

  return (
    <>
      <SearchContainer>
        <FilterButton
          onClick={e => {
            setShowCategories(!showCategories);
            if (showCategories) {
              e.target.style.backgroundColor = "#23574C";
            } else {
              e.target.style.backgroundColor = "#3A3A3A";
            }
          }}
        >
          {showCategories ? (
            <X style={{ marginRight: "5px" }} size={17} />
          ) : (
            <FunnelSimple style={{ marginRight: "10px" }} size={17} />
          )}
          Filter
        </FilterButton>
        <SearchInputContainer>
          <SearchField placeholder="Search Products" />
          <MagnifyingGlass size={28} />
        </SearchInputContainer>

        <SelectInput>
          <option>Newest</option>
        </SelectInput>
      </SearchContainer>
      <Categories>
        {showCategories ? (
          <CategoriesContainer>
            <Category
              style={{ background: "#F2F4F4 0% 0% no-repeat padding-box" }}
            >
              All Categories
            </Category>
            <Category>Living room</Category>
            <Category>Kitchen</Category>
            <Category>Bathroom</Category>
            <Category>Outdoor</Category>
            <Category>Bedroom</Category>
            <Category>Kids</Category>
            <Category>Decor</Category>
            <Category>Textiles</Category>
            <Category>Walls</Category>
            <Category>Art</Category>
            <Category>Modern</Category>
            <Category>Industrial</Category>
            <Category>Kitchen</Category>
            <Category>Bathroom</Category>
          </CategoriesContainer>
        ) : (
          ""
        )}
      </Categories>
      <ProductsContainer>
        {productData.map(prod => {
          return (
            <Product>
              <img
                style={{
                  width: "100%",
                  height: "70%"
                }}
                src={prod.img}
                alt="Some Image"
                className="image"
              />
              <p
                style={{
                  height: "4px",
                  color: "#3A3A3A",
                  opacity: 0.7,
                  whitespace: "nowrap"
                }}
              >
                Brand name
              </p>
              <p
                style={{ height: "4px", color: "3A3A3A", whitespace: "nowrap" }}
              >
                {prod.name}
              </p>
              <p
                style={{
                  color: "#23574C",
                  height: "4px",
                  whitespace: "nowrap"
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
