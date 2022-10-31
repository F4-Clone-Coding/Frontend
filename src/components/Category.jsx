import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllStore, getStore } from '../redux/modules/storeSlice';
import { useDispatch, useSelector } from 'react-redux';

import StoreCard from './StoreCard';
import Button from '../elements/button';

import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';

const Category = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const { stores } = useSelector((state) => state.stores)
    const [categoryId, setCategoryId] = useState(0);

    const handleChange = (event) => {
        setCategoryId(event);
    };
    useEffect(() => {
        dispatch(getAllStore())
    }, [dispatch])

    return (
        <>
            <CategoryBox >
                <HorizontalScroll>
                    <Button className="btn5" btn="btn3" onClick={() => handleChange(0)}>전체</Button>
                    <Button className="btn5" btn="btn3" onClick={() => handleChange(1)}>한식</Button>
                    <Button className="btn5" btn="btn3" onClick={() => handleChange(2)}>일식</Button>
                    <Button className="btn5" btn="btn3" onClick={() => handleChange(3)}>중식</Button>
                    <Button className="btn5" btn="btn3" onClick={() => handleChange(4)}>양식</Button>
                    <Button className="btn5" btn="btn3" onClick={() => handleChange(5)}>패스트푸드</Button>
                    <Button className="btn5" btn="btn3" onClick={() => handleChange(6)}>카페</Button>
                </HorizontalScroll>
            </CategoryBox >





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
            background-color:gainsboro;
            width: 100%;
            height: 50px;
            
           
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

