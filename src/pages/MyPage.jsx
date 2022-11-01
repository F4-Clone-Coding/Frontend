import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import Layout from '../components/Layout'
import Button from '../elements/button';

import styled from 'styled-components'
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import { editUserName, getUser } from '../redux/modules/userSlice';


const MyPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    console.log("user", user)
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    const [editName, setEditName] = useState({
        nickname: user.nickname
    })


    const onSubmitName = () => {
        dispatch(editUserName({ ...editName }))
    }


    // logoutHandler에 refreshToken 넣어서 보내기
    const logoutHandler = () => { }

    return (
        <>
            <Layout>
                <HeaderBox>
                    <IoArrowBackOutline className='icon' onClick={() => navigate(-1)} />
                    <p className='a'>내 정보 수정</p>
                    <p className='b' onClick={onSubmitName} >저장</p>
                </HeaderBox>
                <NameBox>
                    <img alt='a' src="https://mblogthumb-phinf.pstatic.net/MjAxOTA1MTdfMjg5/MDAxNTU4MDU5MjY3NzI0.La9iCTKSS9Cue6MbMeNSJADSkjSr0VMPlAsIdQYGjoYg.q_VK0tw6okzVQOBJbXGKFFGJkLJUqLVT26CZ9qe29Xcg.PNG.smartbaedal/%ED%97%A4%ED%97%A4%EB%B0%B0%EB%8B%AC%EC%9D%B4_%EC%9E%90%EB%A5%B8%EA%B2%83.png?type=w800" />
                    <StInput inp="inp3" type="text" value={user.nickname} placeholder='닉네임' onChange={(e) => { setEditName({ ...editName, nickname: e.target.value }) }} />
                </NameBox>
                <PasswordBox>
                    <p>이메일&nbsp;&nbsp; @ {user.email}</p>
                    <div className='pwInp'>
                        <p>현재 비밀번호</p>
                        <StInput inp="inp3" type="password" />
                    </div>
                    <div className='pwInp'>
                        <p>신규 비밀번호</p>
                        <StInput style={{ margin: '1.8px' }} inp="inp3" type="password" placeholder='10-20자 이내' />
                    </div>
                    <div className="btn">
                        <Button btn="btn2">변경</Button>
                    </div>
                </PasswordBox>
                <OrderList>
                    <p>주문내역</p>
                    <div>주문 카드 들어감</div>
                </OrderList>
                <LogoutBox>
                    <span onClick={logoutHandler}>로그아웃</span>
                </LogoutBox>
            </Layout>
        </>

    )
}

export default MyPage
const HeaderBox = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:85%;
    height: 30px;
    font-size:24px;
    padding: 25px;
    margin: auto;
        .icon{
            cursor: pointer;
            &:hover{
            color: var(--brand-color)
        }
        }
    .b{
        font-size:20px;
        &:hover{
            color: var(--brand-color)
        }
        cursor: pointer;
    }
`

const NameBox = styled.form`
    display:flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;

    
    width:390px;
    height:154px;
    border-bottom: 8px solid #F3F3F3;
   
    img{
        width: 54px;
        height: 54px;
        border-radius: 30px;
        margin-bottom:20px;
        margin-top:-10px;
    }
`

const PasswordBox = styled.form`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    width:95%;
    height:192px;
    padding: 20px 10px 5px 10px;
    gap: 16px;
    .pwInp{
        display:flex;
        align-items: center;
        p{
            margin-right: 10px;
        }
    }
    .btn{
        width:100%;
        display:flex;
        flex-direction: row-reverse;
        button{
            width:91px;
            height:36px;
            margin-right:6px;
            border-radius:3px;
        }
    }
    border-bottom: 8px solid #F3F3F3;
`

const OrderList = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 390px;
    height: 310px;
    border-bottom: 8px solid #F3F3F3;
`

const LogoutBox = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: center;
    width:390px;
    height:59px;
    color: #999;
    font-size: 18px;
    span{
        margin-right: 20px;
        cursor: pointer;
        &:hover{
            color: var(--brand-color)
        }
    }
`

const StInput = styled.input`
    width: 266px;
    height: 33px;
    font-size: 16px;
    border:3px solid #F3F3F3;
        
    transition: all 0.2s linear;
    &:focus {
        border: 3px solid var(--brand-color);
        outline: none
    }
`