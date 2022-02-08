import React from "react";
import {
  InstaFooter,
  LeftInstaFooter,
  RightInstaFooter,
  InstaSelectButton,
  InstaClearButton,
  InstaCancelButton,
  InstaDraftButton
} from "./InstagramFooter.style";

const InstagramFooter = () => {
  return (
    <>
      <InstaFooter>
        <LeftInstaFooter>
          <InstaSelectButton>2 selected of 20 posts</InstaSelectButton>
          <InstaClearButton>Clear selection</InstaClearButton>
        </LeftInstaFooter>
        <RightInstaFooter>
          <InstaCancelButton>Cancel</InstaCancelButton>
          <InstaDraftButton>Import to draft</InstaDraftButton>
        </RightInstaFooter>
      </InstaFooter>
    </>
  );
};

export default InstagramFooter;
