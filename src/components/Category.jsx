import React, { useEffect } from 'react'

import { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getAllStore, getStore } from '../redux/modules/storeSlice';
import { useDispatch, useSelector } from 'react-redux';
import StoreCard from './StoreCard';


const Category = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { stores } = useSelector((state) => state.stores)
    console.log("잘 드렁왔니?", stores)



    const [categoryId, setCategoryId] = useState(0);



    const handleChange = (event) => {
        setCategoryId(event);
    };
    useEffect(() => {
        dispatch(getAllStore())
    }, [dispatch])


    return (
        <>
            <CategoryBox>
                <div onClick={() => handleChange(0)}>전체</div>
                <div onClick={() => handleChange(1)}>한식</div>
                <div onClick={() => handleChange(2)}>일식</div>
                <div onClick={() => handleChange(3)}>중식</div>
                <div onClick={() => handleChange(4)}>양식</div>
                <div onClick={() => handleChange(5)}>패스트푸드</div>
                <div onClick={() => handleChange(6)}>카페</div>
            </CategoryBox>

            <CardWrap>
                {categoryId === 0 ? stores.map(store => <StoreCard key={store.storeId} store={store} />)
                    :
                    stores.filter((store) => store.storeCategoryId === categoryId).map(store => <StoreCard key={store.storeId} store={store} />)
                }
            </CardWrap>
        </>


    )
}

export default Category
const CategoryBox = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 390px;
    height: 50px;
    border-bottom: 1px solid #999;
    gap: 20px;
    div{
        cursor: pointer;
    }
    overflow-y: auto;
    overflow-x: auto; 
    &::-webkit-scrollbar {
        display:none;
    }
`

const CardWrap = styled.div`
    max-height: 710px;
    display:flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto; 
    &::-webkit-scrollbar {
        display:none;
    }
`

