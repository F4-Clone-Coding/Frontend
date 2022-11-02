import React, { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useFetch from '../hooks/useFetch';

import StoreCard from './StoreCard';
import Button from '../elements/button';

import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';

const Category = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const { stores } = useSelector((state) => state.stores)

  // const [query, setQuery] = useState("")
  const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(0)
  const { loading, error, stores } = useFetch(page, categoryId)
  const loader = useRef(null)

  console.log("store1111", stores)

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    console.log("target", target)
    if (target.isIntersecting) {
      setPage((prev) => prev + 1)
    }
  }, [])

  const handleChange = (event) => {
    setCategoryId(event);
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <>
      <CategoryBox>
        <HorizontalScroll>
          <Button btn="btn3" onClick={() => handleChange(0)}>전체</Button>
          <Button btn="btn3" onClick={() => handleChange(1)}>중식</Button>
          <Button btn="btn3" onClick={() => handleChange(2)}>한식</Button>
          <Button btn="btn3" onClick={() => handleChange(3)}>양식</Button>
          <Button btn="btn3" onClick={() => handleChange(4)}>분식</Button>
          <Button btn="btn3" onClick={() => handleChange(5)}>카페,디저트</Button>
          <Button btn="btn3" onClick={() => handleChange(6)}>일식</Button>
          <Button btn="btn3" onClick={() => handleChange(7)}>치킨</Button>
          <Button btn="btn3" onClick={() => handleChange(8)}>패스트푸드</Button>
          <Button btn="btn3" onClick={() => handleChange(9)}>브런치</Button>
          <Button btn="btn3" onClick={() => handleChange(10)}>기타</Button>
          <Button btn="btn3" onClick={() => handleChange(11)}>아시안</Button>
          <Button btn="btn3" onClick={() => handleChange(12)}>야식</Button>
        </HorizontalScroll>
      </CategoryBox>

      <CardWrap>
        {categoryId === 0
          ? stores?.map((store) => (<StoreCard key={store.storeId} store={store} />))
          : stores?.filter((store) => store.categoryId === categoryId)
            .map((store) => (<StoreCard key={store.storeId} store={store} />))}
        {loading && <p>Loading...</p>}
        {error && <p>error!</p>}
        <div ref={loader} />
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

