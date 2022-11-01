import React from "react";
import styled from "styled-components";
import Button from "../elements/button";
import ReviewItem from './ReviewItem';

const ReviewCard = ({ storeId }) => {
  const reviewHandler = () => {

  }  

  return (
    <>
      <StReviewContainer>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </StReviewContainer>
      <StBtnBox>
        <Button onClick={() => reviewHandler(storeId)} btn="btn1">
          리뷰 작성하기
        </Button>
      </StBtnBox>
    </>
  );
};

export default ReviewCard;

const StReviewContainer = styled.div`
  width: 95%;
  margin-top: 16px;
`;

const StBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;
