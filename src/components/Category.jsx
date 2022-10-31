import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllStore } from '../redux/modules/storeSlice';
import { useDispatch, useSelector } from 'react-redux';

import StoreCard from './StoreCard';
import Button from '../elements/button';

import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';

const Category = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const [isDrag, setIsDrag] = useState(false)
    // const [startX, set]

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
          <HorizontalScroll>
            <Button btn="btn3" onClick={() => handleChange(0)}>전체</Button>
            <Button btn="btn3" onClick={() => handleChange(1)}>한식</Button>
            <Button btn="btn3" onClick={() => handleChange(2)}>일식</Button>
            <Button btn="btn3" onClick={() => handleChange(3)}>중식</Button>
            <Button btn="btn3" onClick={() => handleChange(4)}>양식</Button>
            <Button btn="btn3" onClick={() => handleChange(5)}>패스트푸드</Button>
            <Button btn="btn3" onClick={() => handleChange(6)}>카페</Button>
          </HorizontalScroll>
        </CategoryBox>

        <CardWrap>
          {categoryId === 0
            ? stores.data?.map((store) => (<StoreCard key={store.storeId} store={store} />))
            : stores.data?.filter((store) => store.categoryId === categoryId)
                .map((store) => (<StoreCard key={store.storeId} store={store} />))}
        </CardWrap>
      </>
    );
}


export default Category



const CategoryBox = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 390px;
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

