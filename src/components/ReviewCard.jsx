import React from "react";
import styled from "styled-components";
import Button from "../elements/button";
import ReviewItem from './ReviewItem';
import Swal from "sweetalert2";
import instance from '../shared/apis';

const ReviewCard = ({ storeId }) => {

  const reviewHandler = async () => {
    const { value: review } = await Swal.fire({
      width: 350,
      input: "textarea",
      inputLabel: "댓글을 입력해주세요.",
      inputPlaceholder: "댓글 작성란",
      showCancelButton: true,
    });
    
    if (review) {
      try {
        const res = await instance.put(`/store/${storeId}/review`, { review });
        if (res.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            background:
              "#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
            title: "댓글이 등록되었습니다!",
            width: 350,
            height: 200,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (err) {
        Swal.fire({
          position: "center",
          icon: "warning",
          background:
            "#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
          title: "로그인 후 이용해주세요!",
          width: 350,
          height: 200,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    };
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
