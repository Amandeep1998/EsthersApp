import React from "react";
import styled from "styled-components";
import InstagramHeader from "../components/InstagramHeader/InstagramHeader";
import InstagramFooter from "../components/InstagramFooter/InstagramFooter";
import { Check } from "phosphor-react";

const Title = styled.div`
  width: 80%;
  height: 33px;
  margin-top: 38px;
`;

const PostContainer = styled.div`
  width: 80%;
  height: auto;
  margin-top: 30px;
  margin-bottom: 65px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 30px;
`;
// Post Section
const Post = styled.div`
  width: 366px;
  height: 366px;

  display: flex;
  flex-direction: column;

  position: relative;
`;

const PostImage = styled.img`
  width: 100%;
  height: 306px;
`;

const PostContent = styled.p`
  width: 100%;
  margin: 16px 0px 0px 0px;
  height: 43px;
  text-align: left;
  padding: 0 10px;
  font: normal normal normal 16px/24px Strawford;
  letter-spacing: 0px;
  color: #3a3a3a;
  opacity: 1;
`;

const CircleIcon = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #ffffff;
  border-radius: 999px;
  opacity: 1;
  position: absolute;
  bottom: 70px;
  right: 16px;
`;

const CheckIcon = styled.div`
  width: 32px;
  height: 32px;
  background: #23574c 0% 0% no-repeat padding-box;
  border-radius: 999px;
  opacity: 1;
  position: absolute;
  bottom: 70px;
  right: 16px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Instagram = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",

          margin: "0px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <InstagramHeader />
        <Title>
          <h4
            style={{
              width: "193px",
              height: "33px",
              font: "normal normal bold 28px/40px Strawford",
              color: "#3A3A3A"
            }}
          >
            Instagram post
          </h4>
        </Title>
        <PostContainer>
          <Post>
            <PostImage src={"/assets/pic2.jpeg"} />
            <PostContent>
              Nunc aliquet eros eget neque malesuada, at egestas nunc tempus.
            </PostContent>
            <CircleIcon></CircleIcon>
          </Post>
          <Post>
            <PostImage src={"/assets/pic3.jpeg"} />
            <PostContent>
              Nunc aliquet eros eget neque malesuada, at egestas nunc tempus.
            </PostContent>
            <CheckIcon>
              <Check size={22} />
            </CheckIcon>
          </Post>
          <Post>
            <PostImage src={"/assets/pic4.jpeg"} />
            <PostContent>
              Nunc aliquet eros eget neque malesuada, at egestas nunc tempus.
            </PostContent>
            <CircleIcon></CircleIcon>
          </Post>
          <Post>
            <PostImage src={"/assets/pic5.jpeg"} />
            <PostContent>
              Nunc aliquet eros eget neque malesuada, at egestas nunc tempus.
            </PostContent>
            <CircleIcon></CircleIcon>
          </Post>
          <Post>
            <PostImage src={"/assets/pic6.jpeg"} />
            <PostContent>
              Nunc aliquet eros eget neque malesuada, at egestas nunc tempus.
            </PostContent>
            <CircleIcon></CircleIcon>
          </Post>
          <Post>
            <PostImage src={"/assets/pic7.jpeg"} />
            <PostContent>
              Nunc aliquet eros eget neque malesuada, at egestas nunc tempus.
            </PostContent>
            <CircleIcon></CircleIcon>
          </Post>
          <Post>
            <PostImage src={"/assets/pic8.jpeg"} />
            <PostContent>
              Nunc aliquet eros eget neque malesuada, at egestas nunc tempus.
            </PostContent>
            <CircleIcon></CircleIcon>
          </Post>

          <Post>
            <PostImage src={"/assets/pic2.jpeg"} />
            <PostContent>
              Nunc aliquet eros eget neque malesuada, at egestas nunc tempus.
            </PostContent>
            <CircleIcon></CircleIcon>
          </Post>
          <Post>
            <PostImage src={"/assets/pic2.jpeg"} />
            <PostContent>
              Nunc aliquet eros eget neque malesuada, at egestas nunc tempus.
            </PostContent>
            <CircleIcon></CircleIcon>
          </Post>
          <Post>
            <PostImage src={"/assets/pic4.jpeg"} />
            <PostContent>
              Nunc aliquet eros eget neque malesuada, at egestas nunc tempus.
            </PostContent>
            <CircleIcon></CircleIcon>
          </Post>
          <Post>
            <PostImage src={"/assets/pic5.jpeg"} />
            <PostContent>
              Nunc aliquet eros eget neque malesuada, at egestas nunc tempus.
            </PostContent>
            <CircleIcon></CircleIcon>
          </Post>
          <Post>
            <PostImage src={"/assets/pic6.jpeg"} />
            <PostContent>
              Nunc aliquet eros eget neque malesuada, at egestas nunc tempus.
            </PostContent>
            <CircleIcon></CircleIcon>
          </Post>
        </PostContainer>
        <InstagramFooter />
      </div>
    </>
  );
};

export default Instagram;
