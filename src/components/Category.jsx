import React, { useEffect, useRef } from 'react'

import { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getAllStore, getStore } from '../redux/modules/storeSlice';
import { useDispatch, useSelector } from 'react-redux';
import StoreCard from './StoreCard';
import Button from '../elements/button';


const Category = () => {
    const scrollRef = useRef(null)
    const navigate = useNavigate()
  const dispatch = useDispatch()

    // const [isDrag, setIsDrag] = useState(false)
    // const [startX, setStartX] = useState();

    // const onDragStart = (e) => {
    //     e.preventDefault();
    //     setIsDrag(e.offsetX + scrollRef.current.scrollLeft)
    // }
    // const onDragEnd = () => {
    //     setIsDrag(false)
    // };
    // const onDragMove = (e) => {
    //     if (isDrag) {
    //         const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
    //         scrollRef.current.scrollLeft = startX - e.offsetX;

    //         if (scrollLeft === 0) {
    //             setStartX(e.offsetX)
    //         } else if (scrollWidth <= clientWidth + scrollLeft) {
    //             setStartX(e.offsetX + scrollLeft)
    //         }
    //     }
    // }

    // //쓰로틀 구현
    // const throttle = (func, ms) => {
    //     let throttled = false;
    //     return (...args) => {
    //         if (!throttled) {
    //             throttled = true;
    //             setTimeout(() => {
    //                 func(...args)
    //                 throttled = false
    //             }, ms)
    //         }
    //     }
    // }
    // const delay = 100;
    // const onThrottleDragMove = throttle(onDragMove, delay)


  const { stores } = useSelector((state) => state.stores)
  
  // for (const store of stores.data) {
  //   console.log('여기',store)
  // }

  // console.log('stores', stores)
  // console.log('00',stores.data);
  



    const [categoryId, setCategoryId] = useState(0);



    const handleChange = (event) => {
        setCategoryId(event);
    };
    useEffect(() => {
        dispatch(getAllStore())
    }, [dispatch])


    return (
      <>
        {/* <CategoryBox
                onMouseDown={onDragStart}
                onMouseMove={isDrag ? onThrottleDragMove : null}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
                ref={scrollRef}> */}
        <CategoryBox>
          <Button btn="btn3" onClick={() => handleChange(0)}>
            전체
          </Button>
          <Button btn="btn3" onClick={() => handleChange(1)}>
            한식
          </Button>
          <Button btn="btn3" onClick={() => handleChange(2)}>
            일식
          </Button>
          <Button btn="btn3" onClick={() => handleChange(3)}>
            중식
          </Button>
          <Button btn="btn3" onClick={() => handleChange(4)}>
            양식
          </Button>
          <Button btn="btn3" onClick={() => handleChange(5)}>
            패스트푸드
          </Button>
          <Button btn="btn3" onClick={() => handleChange(6)}>
            카페
          </Button>
        </CategoryBox>

        <CardWrap>
          {categoryId === 0
            ? stores.data?.map((store) => (
                <StoreCard key={store.storeId} store={store} />
              ))
            : stores.data
                ?.filter((store) => store.categoryId === categoryId)
                .map((store) => (
                  <StoreCard key={store.storeId} store={store} />
                ))}
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
            width: 100%;
            height: 50px;
            overflow-y: hidden;
            overflow-x: scroll;
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

