import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MenuCard from "../components/MenuCard";
import ReviewCard from '../components/ReviewCard';
import { getAllMenu } from "../redux/modules/menuSlice";
import styled from "styled-components";
import { FaPhoneAlt, FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import instance from "../shared/apis";
import { getCookieToken } from "../shared/cookie";

const OrderPost = () => {
  const cookie = getCookieToken('accessToken')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { storeId } = useParams();
  const { menus } = useSelector((state) => state.menus);
  const [tabId, setTabId] = useState(0);
  const location = useLocation();
  const storeName = location.state.storeName;

  const [like, setLike] = useState(false)

  const onChangeLike = async () => {
    try {
      const res = await instance.get(`/store/${storeId}/like`)
      console.log("res", res)
      if (res.data.result) {
        setLike(!like)
      }

    } catch (error) {
      console.log("실패닷!", error)
    }

  }


  const tabHandlser = (tabNum) => {
    setTabId(tabNum);
  };
  console.log(tabId);

  useEffect(() => {
    if (!cookie) {
      navigate('/');
    } else {
      dispatch(
        getAllMenu(
          storeId,
        ));
    }
  }, [dispatch, storeId]);


  return (
    <Layout>
      <Header />
      <StWrap>
        <StImgBox />
        <StInfoWrap>
          <p>{storeName}</p>
          <p>별점: ⭐⭐⭐⭐⭐</p>
          <DescWrap1>
            <p>최근리뷰 100개</p>
            <p>댓글 300개</p>
          </DescWrap1>
          <DescWrap2>
            <StBtn>
              <FaPhoneAlt />
              전화
            </StBtn>
            {!like ? <StBtn><FcLikePlaceholder className="unLike" onClick={onChangeLike} /> 찜하기</StBtn> : <StBtn><FcLike className="inLike" onClick={onChangeLike} /> 찜하기</StBtn>}
            <StBtn>
              <FaRegShareSquare />
              공유
            </StBtn>
          </DescWrap2>
        </StInfoWrap>
      </StWrap>
      <StTabWrap>
        <StTab onClick={() => tabHandlser(1)}>메뉴</StTab>
        <StTab onClick={() => tabHandlser(2)}>리뷰</StTab>
      </StTabWrap>
      {tabId !== 2 ? (
        <StScrollWrap>
          <MenuCard menus={menus} storeId={storeId} />
        </StScrollWrap>
      ) : (
        <StScrollWrap>
          <ReviewCard>리뷰 부분</ReviewCard>
        </StScrollWrap>
      )}
    </Layout>
  );
};

export default OrderPost;

const StWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const StImgBox = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("https://cdn.traveltimes.co.kr/news/photo/202109/113022_11185_1829.jpg");
  background-size: cover;
  box-shadow: var(--box-shadow);
`;

const StInfoWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  row-gap: 10px;
  padding: 10px;
`;

const DescWrap1 = styled.div`
  display: flex;
  column-gap: 20px;
`;

const DescWrap2 = styled.div`
  display: flex;
  column-gap: 50px;
`;

const StBtn = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
  &:hover {
    color: var(--brand-color);
  }
  .unLike{
    font-size: 24px;
  }

  .inLike{
    font-size: 24px;
  }

`;

const StTabWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  column-gap: 3px;
`;

const StTab = styled.button`
  background: white;
  width: 50%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 0px lightgray;
  border: 0;
  cursor: pointer;
  &:hover {
    background: var(--brand-color);
    color: white;
  }
  &:focus {
    background: var(--brand-color);
    color: white;
  }
`;

const StScrollWrap = styled.div`
  width: 100%;
  max-height: 310px;
  flex-flow: column;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// ----- 주문하기 -----
// const submitHandler = async () => {
//   const info = { categoryId, title, content, imageUrl };
//   try {
//     const res = await axios.post("url", info);
//     return nav(`/${res.data.orderId}`);
//   } catch (err) {
//     console.log(err);
//     return;
//   }
// };
