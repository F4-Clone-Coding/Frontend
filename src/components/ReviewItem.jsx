import React, { useState } from "react";
import styled from "styled-components";
// import { FaPencilAlt } from "react-icons/fa"; 수정 아이콘
// import { FaTrash } from "react-icons/fa"; 삭제 아이콘

const ReviewItem = () => {
  // const [isEdit, setIsEdit] = useState(false)
  // const isEditHandler = (e) => {
  //   setIsEdit(!isEdit);
  // }

  // const removeHandler = () => {

  // }

  return (
    <StReviewBox>
      <StWrap>
        <StImg />
        <div style={{ display: "flex", flexFlow: "column", rowGap: "5px" }}>
          <p style={{ fontSize: "14px" }}>NICKNAME</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </StWrap>
      <StReview>맛있게 먹었어요.</StReview>
    </StReviewBox>
  );
};

export default ReviewItem;

const StReviewBox = styled.div`
  height: 80px;
  padding: 8px;
  display: flex;
  flex-flow: column;
  margin-bottom: 15px;
  row-gap: 10px;
  box-shadow: var(--box-shadow);
`;

const StWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`

const StImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background-image: url("https://mblogthumb-phinf.pstatic.net/MjAxOTA1MTdfMjg5/MDAxNTU4MDU5MjY3NzI0.La9iCTKSS9Cue6MbMeNSJADSkjSr0VMPlAsIdQYGjoYg.q_VK0tw6okzVQOBJbXGKFFGJkLJUqLVT26CZ9qe29Xcg.PNG.smartbaedal/%ED%97%A4%ED%97%A4%EB%B0%B0%EB%8B%AC%EC%9D%B4_%EC%9E%90%EB%A5%B8%EA%B2%83.png?type=w800");
  background-size: cover;
`;

const StReview = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 10px;
`;
