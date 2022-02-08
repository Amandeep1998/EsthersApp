import styled from "styled-components";
export const InstaFooter = styled.div`
  width: 80%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  background: #ffffff 0% 0% no-repeat padding-box;
  z-index: 10;
`;
export const LeftInstaFooter = styled.div`
  width: 80%;
  height: 65px;
  display: flex;
  align-items: center;
`;
export const RightInstaFooter = styled.div`
  width: 80%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const InstaSelectButton = styled.p`
  text-align: left;
  font: normal normal normal 18px/24px Strawford;
  letter-spacing: 0px;
  color: #3a3a3a;
  margin: 22px 41px 22px 0px;
  text-align: center;
`;
export const InstaClearButton = styled.button`
  width: 136px;
  height: 40px;
  background: #f2f4f4 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  border: none;
  color: #3a3a3a;
`;

export const InstaCancelButton = styled.button`
  width: 86px;
  height: 40px;
  background: #f2f4f4 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  border: none;
  margin-right: 10px;
  color: #3a3a3a;
`;
export const InstaDraftButton = styled.button`
  width: 141px;
  height: 40px;
  background-color: #23574c;
  border-radius: 4px;
  opacity: 1;
  color: #fff;
  border: none;
  font: normal normal medium 14px/17px Strawford;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
