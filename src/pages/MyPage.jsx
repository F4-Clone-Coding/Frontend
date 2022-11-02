import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import Layout from '../components/Layout'
import Button from '../elements/button';

import styled from 'styled-components'
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import { editUserName, editUserPw, getUser } from '../redux/modules/userSlice';
import instance from '../shared/apis';
import Swal from 'sweetalert2';

const MyPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [info, setInfo] = useState()
    const [editName, setEditName] = useState();
    console.log("얍222", editName)
    /**유저정보 가져오기 */
    const getUserdata = async () => {
        try {
            const res = await instance.get("/user")
            console.log("성공이다", res)
            setInfo(res.data.user)
            setEditName(res.data.user.nickname)
            console.log("얍", res.data.user.nickname)
        } catch (error) {
            console.log("실패다", error)
        }
    }

    // const getUserdata = () => {
    //     instance.get("/user").then((res) => {
    //         console.log("성공이다", res)
    //         setInfo(res.data.user)
    //         setEditName(res.data.user.nickname)
    //         console.log("얍", res.data.user.nickname)
    //     })
    //         .catch((error) => {
    //             console.log("실패다", error)
    //         })

    // }




    /**이름 변경 구간 */
    const onChangeName = (e) => {
        setEditName(e.target.value)
    }
    console.log("bi", editName)
    const onSubmitName = (e) => {
        e.preventDefault()
        const nameCheck = /^[가-힣0-9]{3,10}$/
        if (editName.length > 2 && editName.length < 11 && nameCheck.test(editName)) {
            dispatch(editUserName({ nickname: editName }))
            Swal.fire(
                '닉네임 변경 완료!',
                `${editName}님 반가워요!`,
                'success'
            )
        } else {
            Swal.fire(
                '닉네임 변경 실패!',
                `한글,숫자 3~10자리로 부탁드려요!`,
                'error'
            )
        }


    }

    /**패스워드 변경 구간 */
    const [editPw, setEditPw] = useState({
        password: "",
        newPassword: "",
    })

    const onChangePw = (e) => {
        const { name, value } = e.target
        setEditPw({ ...editPw, [name]: value })
    }

    const onSubmitPw = (e) => {
        e.preventDefault()
        dispatch(editUserPw({ ...editPw })).then((res) => { console.log("헐", res) })
        setEditPw("")
    }

    // logoutHandler에 refreshToken 넣어서 보내기
    const logoutHandler = () => { }
    const [imageSrc, setImageSrc] = useState('');

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    };



    useEffect(() => {
        getUserdata()
    }, [dispatch])

    return (
        <>
            <Layout>
                <HeaderBox>
                    <IoArrowBackOutline className='icon' onClick={() => navigate(-1)} />
                    <p className='a'>내 정보 수정</p>
                    <p className='b' onClick={onSubmitName} >저장</p>
                </HeaderBox>
                <NameBox>
                    <div style={{ position: "absolute", marginTop: "-110px" }}>
                        {imageSrc && <img alt='preview-img' src={imageSrc} />}
                    </div>
                    <StLabel htmlFor='photo' />
                    <StFileInput id="photo" type="file" onChange={(e) => {
                        encodeFileToBase64(e.target.files[0])
                    }} />
                    <StInput style={{ position: "absolute", marginTop: "50px" }} type="text" value={editName} name="nickname" onChange={onChangeName} />
                </NameBox>
                <PasswordBox>
                    <p>이메일&nbsp;&nbsp; @ {info?.email}</p>
                    <div className='pwInp'>
                        <p>현재 비밀번호</p>
                        <StInput type="password" name='password' value={editPw.password} onChange={onChangePw} />
                    </div>
                    <div className='pwInp'>
                        <p>신규 비밀번호</p>
                        <StInput style={{ margin: '1.8px' }} name="newPassword" type="password" placeholder='10-20자 이내' onChange={onChangePw} />
                    </div>
                    <div className="btn">
                        <Button btn="btn2" onClick={onSubmitPw}>변경</Button>
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

const NameBox = styled.div`
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
        margin-top:8px;
        /* border: 1px solid red */
    }
`

const PasswordBox = styled.div`
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

const StFileInput = styled.input`
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
`

const StLabel = styled.label`
    position: relative;
    margin-top: -105.5px;
    
    cursor: pointer;
    /* background-color: green ; */
    width: 54px;
    height: 54px;
     border-radius: 50%;
     &:hover{
        background-color: #1f1e1f16;
     }
`