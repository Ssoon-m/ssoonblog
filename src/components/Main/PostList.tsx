import React from "react"
import styled from "@emotion/styled"
import PostItem from "./PostItem"

const POST_ITEM_DATA = {
  title: "Post Item Title",
  date: "2020.01.29.",
  categories: ["Web", "Frontend", "Testing"],
  summary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!",
  thumbnail:
    "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/rs_quotation_api/ysrimegn/61c98841c46b4834becfb17ae6097027.jpg",
  link: "https://www.google.co.kr",
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`

const PostList: React.FC = () => {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  )
}

export default PostList
