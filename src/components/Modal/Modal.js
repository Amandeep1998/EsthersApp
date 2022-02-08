import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ProductCatalog from "../ProductCatalog/ProductCatalog";

import {
  SearchContainer,
  FilterButton,
  SearchInputContainer,
  Categories,
  CategoriesContainer,
  Category,
  Arrow,
  SelectInput,
  SearchField,
  CloseButton
} from "./Modal.style";

import { X, FunnelSimple, MagnifyingGlass, CaretDown } from "phosphor-react";

const ModalContainer = ({ showModal, handleClose }) => {
  const [showCategories, setShowCategories] = useState(true);

  return (
    <>
      <Modal dialogClassName="modal-80w" show={showModal} onHide={handleClose}>
        <Modal.Header
          style={{
            padding: "30px 30px 0px 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            border: "none"
          }}
          closeButton={false}
        >
          <CloseButton onClick={handleClose}>
            <X size={17} />
          </CloseButton>
          <Modal.Title style={{ fontSize: "16.4px" }}>
            Product Catalog
          </Modal.Title>
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
        </Modal.Header>
        <Modal.Body
          style={{ padding: "0px 30px", height: "697px", overflowY: "scroll" }}
        >
          <ProductCatalog />
        </Modal.Body>
        <Modal.Footer style={{ padding: "33px 30px" }}>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalContainer;
