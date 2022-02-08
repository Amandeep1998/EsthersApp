import React from "react";
import { Header, InstaLogo, LogoutButton } from "./InstagramHeader.style";

const InstagramHeader = () => {
  return (
    <>
      <Header>
        <InstaLogo></InstaLogo>
        <LogoutButton>Logout</LogoutButton>
      </Header>
    </>
  );
};

export default InstagramHeader;
