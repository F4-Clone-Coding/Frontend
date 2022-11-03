import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import Layout from '../components/Layout'
import Button from '../elements/button';

import styled from 'styled-components'
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import { editUserName, editUserPw } from '../redux/modules/userSlice';
import instance from '../shared/apis';
import Swal from 'sweetalert2';
import { getCookieToken, removeCookieToken, removeRefreshCookieToken } from '../shared/cookie';
import OrderHistoryCard from '../components/OrderHistoryCard';
import EditNickname from '../components/EditNickname';


const MyPage = () => {
    const cookie = getCookieToken('accessToken')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const userNickname = useSelector(state => state.user)
    // console.log("name", userNickname)

    const [info, setInfo] = useState()
    const [orderList, setOrderList] = useState([])
    const [editName, setEditName] = useState();
    const [newEditName, setNewEditName] = useState(editName)

    console.log("킥", orderList)
    console.log("얍222", editName)

    /**유저정보 가져오기 */
    const getUserdata = async () => {
        try {
            const res = await instance.get("/user")
            console.log("성공이다", res)
            setInfo(res.data.user)
            setOrderList(res.data.user?.orderList)
            setEditName(res.data.user?.nickname)

        } catch (error) {
            console.log("실패다", error)
        }
    }

    /**이름 변경 구간 */
    const onChangeName = async (e) => {
        setNewEditName(e.target.value)
    }

    console.log("bi", editName)
    const onSubmitName = (e) => {
        e.preventDefault()
        // const formedData = new FormData();
        // formedData.append('imamge', imageSrc)
        const nameCheck = /^[가-힣0-9]{3,10}$/
        if (editName.length > 2 && editName.length < 11 && nameCheck.test(editName)) {
            dispatch(editUserName({ nickname: editName }))
            // setEditName(userNickname)
            Swal.fire({
                icon: "success",
                title: '닉네임 변경 완료!',
                text: `${editName}님 반가워요!`,
                width: 350,
                heigt: 200,
                background:
                    "#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
                showConfirmButton: false,
                timer: 1500,
            })

        } else {
            Swal.fire({
                icon: "error",
                title: "닉네임 변경 실패!",
                text: "한글,숫자 3~10자리로 부탁드려요!",
                width: 350,
                heigt: 200,
                background:
                    "#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
                showConfirmButton: false,
                timer: 1500,
            });
        }
        getUserdata();
    }

    const editNickname = async (userData) => {
        console.log('userData', userData)
        try {
            const res = await instance.patch("/user/nickname", { nickname: userData })
            console.log("변경성공", res)
        } catch (error) {
            console.log("변경실패", error)
        }
    }





    const [imageSrc, setImageSrc] = useState('https://mblogthumb-phinf.pstatic.net/MjAxOTA1MTdfMjg5/MDAxNTU4MDU5MjY3NzI0.La9iCTKSS9Cue6MbMeNSJADSkjSr0VMPlAsIdQYGjoYg.q_VK0tw6okzVQOBJbXGKFFGJkLJUqLVT26CZ9qe29Xcg.PNG.smartbaedal/%ED%97%A4%ED%97%A4%EB%B0%B0%EB%8B%AC%EC%9D%B4_%EC%9E%90%EB%A5%B8%EA%B2%83.png?type=w800');

    const onChangeImg = (e) => {
        if (e.target.files[0]) {
            encodeFileToBase64(e.target.files[0])
        } else {
            setImageSrc('https://mblogthumb-phinf.pstatic.net/MjAxOTA1MTdfMjg5/MDAxNTU4MDU5MjY3NzI0.La9iCTKSS9Cue6MbMeNSJADSkjSr0VMPlAsIdQYGjoYg.q_VK0tw6okzVQOBJbXGKFFGJkLJUqLVT26CZ9qe29Xcg.PNG.smartbaedal/%ED%97%A4%ED%97%A4%EB%B0%B0%EB%8B%AC%EC%9D%B4_%EC%9E%90%EB%A5%B8%EA%B2%83.png?type=w800')
        }

    }

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
    const logoutHandler = (e) => {
        e.stopPropagation()
        Swal.fire({
            title: '로그아웃 할까요?',
            text: '정말 로그아웃 하는건가요?',
            icon: 'warning',
            width: 350,
            heigt: 200,
            background:
                "#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
            showCancelButton: true,
            confirmButtonColor: '#ff8400',
            cancelButtonColor: '#5ebebb',
            confirmButtonText: 'LogOut'
        }).then((result) => {
            if (result.isConfirmed) {
                removeCookieToken("accessToken");
                removeRefreshCookieToken('refreshToken');
                Swal.fire({
                    icon: "success",
                    title: "로그아웃 완료!",
                    text: "다음에 또 만나요!",
                    width: 350,
                    heigt: 200,
                    background:
                        "#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
                    showConfirmButton: false,
                    timer: 1500,
                })
                navigate('/')
            }
        })
    }


    useEffect(() => {
        if (!cookie) {
            Swal.fire({
                icon: "warning",
                title: "로그인 후 이용해주세요!",
                width: 350,
                heigt: 200,
                background:
                    "#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
                showConfirmButton: false,
                timer: 1500,
            });
            navigate('/');
        }
    }, [])


    useEffect(() => {
        getUserdata()
    }, [])

    return (
        <>
            <Layout>
                <HeaderBox>
                    <IoArrowBackOutline className='icon' onClick={() => navigate(-1)} />
                    <p className='a'>My배민</p>
                    <span className='b' style={{ marginLeft: "-28px" }}>찜목록</span>
                </HeaderBox>
                <NameBox>
                    <div style={{ position: "absolute", marginTop: "-110px" }}>
                        {imageSrc && <img alt='preview-img' src={imageSrc} />}
                    </div>
                    <StLabel htmlFor='photo' />
                    <StFileInput id="photo" type="file" onChange={onChangeImg} />
                    <StNicknameBox>
                        <EditNickname />
                    </StNicknameBox>
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
                <StOrderText>주문내역</StOrderText>
                <OrderList>
                    {orderList && orderList.map((orderCard) => <OrderHistoryCard key={orderCard.length} orderCard={orderCard} />)}
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
            color: var(--point-color)
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
    height: 274px;
    border-bottom: 8px solid #F3F3F3;
    overflow-x: hidden;
    overflow-y: auto;
        &::-webkit-scrollbar {
        display:none;
        }
`
const StOrderText = styled.div`
    display:flex;
    margin: 10px 10px 10px 10px;
    width: 370px;
    height: 30px;
    background-color: #5ebebb39;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LogoutBox = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: center;
    width:390px;
    height:50px;
    color: #999;
    font-size: 18px;
    span{
        margin-right: 20px;
        cursor: pointer;
        &:hover{
            color: var(--point-color)
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
    margin-top: -135.5px;
    
    cursor: pointer;
    width: 54px;
    height: 54px;
     border-radius: 50%;
     /* background-color: green; */
     &:hover{
        background-color: #1f1e1f16;
     }
`

const StNicknameBox = styled.div`
    display:flex;
    align-items: center;
    margin: 30px 0px -100px 0px;

    .c{
        font-size: 20px;
        margin-left: 20px;
        margin-right: -10px;
        cursor: pointer;
        &:hover{
            color: var(--brand-color)
        }
    }

`