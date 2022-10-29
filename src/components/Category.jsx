import React, { useEffect } from 'react'

import { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getAllStore, getStore } from '../redux/modules/storeSlice';
import { useDispatch, useSelector } from 'react-redux';
import StoreCard from './StoreCard';
import Button from '../elements/button';


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
                <Button className="bt" btn="btn3" onClick={() => handleChange(0)}>전체</Button>
                <Button className="bt" btn="btn3" onClick={() => handleChange(1)}>한식</Button>
                <Button className="bt" btn="btn3" onClick={() => handleChange(2)}>일식</Button>
                <Button className="bt" btn="btn3" onClick={() => handleChange(3)}>중식</Button>
                <Button className="bt" btn="btn3" onClick={() => handleChange(4)}>양식</Button>
                <Button className="bt" btn="btn3" onClick={() => handleChange(5)}>패스트푸드</Button>
                <Button className="bt" btn="btn3" onClick={() => handleChange(6)}>카페</Button>
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
            border-bottom: 1.5px solid #999;
            overflow-y: hidden;
            overflow-x: auto;
            &::-webkit-scrollbar {
            display: none;
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

