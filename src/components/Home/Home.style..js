import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 224px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  background-color: #f1e0cd;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  background-color: #f1e0cd;
`;
export const LeftHeaderContainer = styled.div`
  margin: 30px 0px;
  width: 40vw;
  display: flex;
  align-items: "center";
`;
export const RightHeaderContainer = styled.div`
  margin: 30px 0px;
  width: 40vw;
  display: flex;
  justify-content: flex-end;
`;

export const HomeLinks = styled.div`
  width: 80vw;
  height: 100px;
  display: flex;
  align-items: center;
  margin-bottom: 36px;
`;

export const Links = styled.div`
  width: auto;
  height: 19px;
  margin-right: 33px;
  cursor: pointer;
  text-align: left;
  font: normal normal medium 16px/19px Strawford;
  letter-spacing: 0px;
  color: #3a3a3a;
  opacity: 0.5;
`;

export const SearchContainer = styled.div`
  width: 80vw;
  height: 42px;
  display: flex;
  position: relative;
`;

export const FilterButton = styled.button`
  width: 112px;
  height: 42px;
  margin-right: 24px;
  cursor: pointer;
  background: #3a3a3a 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  color: #fff;
  border: none;
  font-size: 0.9em;
`;

export const AddProdButton = styled.button`
  width: 160px;
  height: 38px;
  margin: 2px;
  cursor: pointer;
  background-color: #2d5e54;
  color: #fff;
  border: none;
`;

export const SearchInputContainer = styled.div`
  width: 1086px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #eeeeee;

  border-radius: 2px;
  opacity: 1;
  margin-right: 24px;

  display: flex;
  align-items: center;
`;

export const SearchField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  opacity: 1;
  margin: 0 5px;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 14px;

  &:focus {
    outline: none;
  }
`;

export const SelectInput = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 288px;
  height: 42px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d1d5db;
  border-radius: 2px;
  opacity: 1;
  padding-left: 10px;
`;
export const Arrow = styled.div`
  position: absolute;
  top: 7px;
  right: 18.69px;
`;

export const Categories = styled.div`
  width: 80vw;
  height: auto;
  text-align: left;
  margin-top: 17px;
  font: normal normal normal 14px/18px Strawford;
  letter-spacing: 0px;
  color: #3a3a3a;
  opacity: 1;
`;

export const CategoriesContainer = styled.div`
  width: 80vw;
  height: auto;
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
  overflow-x: scroll;
  transition: all 0.1s;
`;

export const Category = styled.button`
  width: 124px;
  padding: 9px 16px;
  white-space: nowrap;
  border-radius: 999px;
  background-color: #fff;
  border: none;
  text-align: left;
  font: normal normal normal 14px/18px Strawford;
  letter-spacing: 0px;
  color: #3a3a3a;
  opacity: 1;
  margin-right: 28px;
`;

export const ProductsContainer = styled.div`
  width: 80vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  column-gap: 24px;
  row-gap: 30px;
  margin-top: 36px;
`;

export const Product = styled.div`
  width: 288px;
  height: 377px;
  text-align: left;
  display: flex;
  flex-direction: column;

  position: relative;
  &:hover .image {
    filter: brightness(75%);
    transition: all 0.6s ease;
  }
`;

export const Name = styled.div`
  width: 147px;
  height: 21px;
  margin-right: 12px;
  font: normal normal bold 18px/21px Strawford;
  letter-spacing: 0px;
  color: #3a3a3a;
  opacity: 1;
`;

export const SettingsIcon = styled.div`
  width: 23px;
  height: 23px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 999px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TrashIcon = styled.div`
  width: 22px;
  height: 22px;
  background-color: #fff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  visibility: hidden;
  position: absolute;
  bottom: 100px;
  right: 10px;
  ${Product}:hover & {
    visibility: visible;
  }
`;

export const Avatar = styled.div`
  width: 128px;
  height: 128px;
  background-color: #2d5e54;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarLabel = styled.p`
  font-size: 60px;
  color: white;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  width: 38px;
  height: 38px;
  background-color: #f2f4f4;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  color: #3a3a3a;
`;
