import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 1227px;
  height: auto;
  display: flex;
  position: relative;
  margin-top: 59px;
  @media only screen and (max-width: 900px) {
    width: 90vw;
    height: 4vh;
  }
`;

export const FilterButton = styled.button`
  width: 112px;
  height: 46px;
  margin-right: 24px;
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

export const SearchInputContainer = styled.div`
  width: 1086px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #eeeeee;

  border-radius: 2px;
  opacity: 1;
  margin-right: 24px;

  display: flex;
  align-items: center;
  @media only screen and (max-width: 400px) {
    width: 50%;
  }
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
  height: 46px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d1d5db;
  border-radius: 2px;
  opacity: 1;
  padding-left: 10px;
  @media only screen and (max-width: 400px) {
    width: 25%;
  }
`;
export const Arrow = styled.div`
  position: absolute;
  top: 7px;
  right: 18.69px;
`;

export const Categories = styled.div`
  width: 1227px;
  height: 34px;
  text-align: left;
  margin-top: 17px;
  font: normal normal normal 14px/18px Strawford;
  letter-spacing: 0px;
  color: #3a3a3a;
  opacity: 1;
  padding: 0px 14px;

  @media only screen and (max-width: 900px) {
    width: 90vw;
    height: 6vh;
  }
  @media only screen and (max-width: 400px) {
    width: 100vw;
    height: 4vh;
    margin-top: 2px;
  }
`;

export const CategoriesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
  overflow-x: scroll;
  transition: all 0.1s;
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
`;

export const Category = styled.button`
  width: 124px;
  height: 34px;
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
  margin-right: 44px;
  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
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
