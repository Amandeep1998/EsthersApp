import styled from "styled-components";

export const Header = styled.div`
  width: 80%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InstaLogo = styled.div`
  width: 183px;
  height: 61px;
  background: transparent url("assets/instagram.jfif") 0% 0% no-repeat
    padding-box;
  background-size: contain;

  opacity: 1;
`;

export const LogoutButton = styled.button`
  width: 89px;
  height: 40px;
  background: #3a3a3a 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  margin: 11px 22px 12px 22px;
  font: normal normal medium 14px/17px Strawford;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  border: none;
`;
