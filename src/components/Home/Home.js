import React, { useState } from "react";
import "./Home.css";
import productData from "../../data/productData.json";
import ModalContainer from "../Modal/Modal";
import Header from "../Header";
import Footer from "../Footer";

import {
  Container,
  HeaderContainer,
  LeftHeaderContainer,
  Name,
  SettingsIcon,
  RightHeaderContainer,
  Avatar,
  AvatarLabel,
  Links,
  HomeLinks,
  SearchContainer,
  SearchInputContainer,
  Categories,
  CategoriesContainer,
  Category,
  ProductsContainer,
  Product,
  AddProdButton,
  FilterButton,
  SearchField,
  SelectInput,
  TrashIcon,
  Arrow,
  CloseButton
} from "./Home.style.";
import {
  Gear,
  X,
  FunnelSimple,
  Plus,
  MagnifyingGlass,
  Trash,
  CaretDown
} from "phosphor-react";
import { Button, Modal } from "react-bootstrap";

const Home1 = () => {
  const [showCategories, setShowCategories] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Header />
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Container>
          <HeaderContainer>
            <LeftHeaderContainer>
              <Name>kinjalkhant_cCzAq</Name>
              <SettingsIcon>
                <Gear size={15} />
              </SettingsIcon>
            </LeftHeaderContainer>
            <RightHeaderContainer>
              <Avatar>
                <AvatarLabel>K</AvatarLabel>
              </Avatar>
            </RightHeaderContainer>
          </HeaderContainer>
        </Container>
        <HomeLinks>
          <Links>Posts</Links>
          <Links>Guides</Links>
          <Links>Collections</Links>
          <Links>Drafts</Links>
          <Links style={{ opacity: "1" }}>MyStore</Links>
        </HomeLinks>
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
              <X style={{ marginRight: "8px" }} size={20} />
            ) : (
              <FunnelSimple style={{ marginRight: "8px" }} size={21} />
            )}
            Filter
          </FilterButton>
          <SearchInputContainer>
            <SearchField placeholder="Search Products" />
            <MagnifyingGlass size={28} style={{ marginRight: "20.4px" }} />
          </SearchInputContainer>

          <SelectInput>
            <option style={{ color: "#3A3A3A" }}>Newest</option>
          </SelectInput>
          <Arrow>
            <CaretDown
              style={{ color: "2px solid #3A3A3A", opacity: "0.5" }}
              size={24}
            />
          </Arrow>
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
          <Product>
            <div
              style={{
                width: "288px",
                height: "288px",
                padding: "13px",
                border: "1px solid #EEEEEE"
              }}
            >
              <div
                style={{
                  background: "#F2F4F4 0% 0% no-repeat padding-box",
                  width: "262px",
                  height: "262px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left"
                }}
              >
                <AddProdButton onClick={handleShow}>
                  <Plus size={20} style={{ marginRight: "4px" }} />
                  Add Products
                </AddProdButton>
              </div>
            </div>
            <p
              style={{
                whiteSpace: "nowrap",
                fontSize: "12px",
                font: "normal normal medium 16px/19px Strawford",
                color: "#3A3A3A",
                marginTop: "4px"
              }}
            >
              Select products from catalog
            </p>
          </Product>

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
                <TrashIcon>
                  <Trash size={17} />
                </TrashIcon>
              </Product>
            );
          })}
        </ProductsContainer>
        <ModalContainer showModal={showModal} handleClose={handleClose} />
      </div>
      <Footer />
    </>
  );
};

export default Home1;
