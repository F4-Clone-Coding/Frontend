import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ReviewItem = () => {
  return (
    <StReviewBox>
      <p style={{ fontSize: "14px" }}>NICKNAME</p>
      <p
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
      </p>
    </StReviewBox>
  );
};

export default ReviewItem;

const StReviewBox = styled.div`
  height: 70px;
  padding: 8px;
  display: flex;
  flex-flow: column;
  margin-bottom: 10px;
  row-gap: 15px;
  box-shadow: var(--box-shadow);
`;
