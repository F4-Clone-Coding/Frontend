import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import BeaminImg from '../image/BeaminImg.png'


const StoreCard = ({ store }) => {
  const navigate = useNavigate()

    return (
        <CardBox onClick={() => navigate(`/store/${store?.storeId}`, { state: { storeName: store?.name } })}>
            <img alt="a" className='img' src={store?.imageUrl || BeaminImg} />
            <TextBox>
                <p id="p1">{store?.name}</p>
                <div >
                    <p style={{ marginBottom: "5px" }}>⭐5.0(100+)</p>
                    <span>배달비 무료</span>
                    <span style={{marginLeft: "10px", color: "#999"}}>{store?.distance}</span>
                </div>
            </TextBox>
        </CardBox>
    )

}

export default StoreCard
const CardBox = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    width: 368px;
    height: 100px;
    border: 1px solid #d4d4d4;
    padding: 10px;
    gap: 20px;
    transition: all 0.2s linear;
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
        cursor: pointer;
    }
    .img{
        width: 80px;
        height: 80px;
        border-radius: var(--lg-radius);

    }
`
const TextBox = styled.div`
    
    #p1{
        font-size: 18px;
        margin-bottom: 10px;
    }
    
`