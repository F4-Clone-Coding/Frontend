import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import BeaminImg from '../image/BeaminImg.png'


const StoreCard = ({ store }) => {
    const navigate = useNavigate()
    console.log("store22222", store)
    return (
        <CardBox >
            <img alt="a" className='img' src={BeaminImg} onClick={() => navigate(`/store/${store.storeId}`)} />
            <TextBox>
                <p id="p1" onClick={() => navigate(`/store/${store?.storeId}`, { state: { storeName: store?.name } })}>{store?.name}</p>
                <div >
                    <p style={{ marginBottom: "5px" }}>⭐5.0(100+)</p>
                    <p>배달비 무료</p>
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
    &:hover{
        transform: scale(1.05);

    }
    .img{
        width: 80px;
        height: 80px;
        border-radius: var(--lg-radius);
        cursor: pointer;
    }
`
const TextBox = styled.div`
    
    #p1{
        font-size: 18px;
        margin-bottom: 10px;
        cursor: pointer;
    }
    
`