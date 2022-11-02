import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import BeaminImg from '../image/BeaminImg.png'

const OrderHistoryCard = ({ orderCard }) => {
    console.log("oc", orderCard)
    const navigate = useNavigate()

    function displayedAt(createdAt) {
        console.log(createdAt)
        const milliSeconds = new Date() - createdAt
        const seconds = milliSeconds / 1000
        if (seconds < 60) return `방금 전`
        const minutes = seconds / 60
        if (minutes < 60) return `${Math.floor(minutes)}분 전`
        const hours = minutes / 60
        if (hours < 24) return `${Math.floor(hours)}시간 전`
        const days = hours / 24
        if (days < 7) return `${Math.floor(days)}일 전`
        const weeks = days / 7
        if (weeks < 5) return `${Math.floor(weeks)}주 전`
        const months = days / 30
        if (months < 12) return `${Math.floor(months)}개월 전`
        const years = days / 365
        return `${Math.floor(years)}년 전`
    }

    // `/store/${store?.storeId}`

    return (
      <StWrap onClick={() => navigate(`/store/${orderCard?.storeId}`, { state: { storeName: orderCard?.name } })}  >
            <StTextWrap>
                <StTitleBox>
                    <span id="title">{orderCard.name} &nbsp;</span>
                    <span id="time">{displayedAt(Date.now())}</span>
                </StTitleBox>
                <span>
                    {orderCard.menu} 외 {orderCard.menuCount - 1}개
                </span>
                <p>{orderCard.sum}원</p>
            </StTextWrap>
            <Stimg
                src={BeaminImg}
                alt="menuImage"
            />
        </StWrap>
    )
}

export default OrderHistoryCard

const StWrap = styled.div`
    width:350px;
    min-height: 80px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 5px;
    padding: 10px 10px;
    box-shadow: var(--box-shadow);
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover{
        transform: scale(1.02);
        
    }
`;

const StTextWrap = styled.div`
    display: flex;
    flex-flow: column;
    row-gap: 10px;
`;

const Stimg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: var(--lg-radius);
`;

const StTitleBox = styled.div`
    display: flex;
    align-items: center;
    #title{
        font-size:22px;
    }
    #time{
        color:#999;
    }
`