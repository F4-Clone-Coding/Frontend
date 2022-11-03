import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Button from "../elements/button";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { api } from '../shared/apis';
import { getCookieToken, setAccessToken, setRefreshToken } from "../shared/cookie";
import { useForm } from "react-hook-form";


const Login = () => {
    const navigate = useNavigate()
    const cookie = getCookieToken("accessToken")
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onClickLogin = (data) => {
        navigator.geolocation.getCurrentPosition(async ({ coords }) => {
            const location = `${coords.latitude}, ${coords.longitude}`
            const info = {
                email: data.email,
                password: data.password,
                location,
            }
            console.log('info', info)
            try {
                const response = await api.post("/user/login", info);
                setAccessToken(response.data.accessToken)
                setRefreshToken(response.data.refreshToken)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    width: 350,
                    heigt: 200,
                    background:
                        "#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
                    title: "로그인에 성공하였습니다!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/store");

            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "다시 확인해주세요!",
                    text: "아이디 또는 비밀번호가 틀렸습니다.",
                    width: 350,
                    heigt: 200,
                    background:
                        "#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
                    showConfirmButton: false,
                    timer: 1500,
                });
                console.log(error)
            }
        })
    }

    useEffect(() => {
        if (cookie) {
            Swal.fire({
                position: 'center',
                width: 350,
                heigt: 200,
                background:
                    "#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
                icon: 'success',
                title: '이미 로그인 됐어요!',
                showConfirmButton: false,
                timer: 1500
            })
            navigate(-1);
        }
    }, [])

    return (
        <Layout>
            <LoginWrap>
                <div><IoClose className='cancel' onClick={() => navigate('/')} /></div>
                <LogoTitle>
                    <p className="logoTitle">우리가<br />어떤 민족<br />입니까?</p>
                    <p className="subTitle">배달<span>만</span>민족</p>
                </LogoTitle>
                <FormBox onSubmit={handleSubmit(onClickLogin)}>
                    <StInput placeholder='이메일'
                        {...register("email",
                            {
                                pattern: {
                                    value: /^[A-Za-z0-9]([-_\.]?[0-9a-zA-z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-z])*\.[a-zA-z]{2,3}$/,
                                    message: "이메일을 입력해주세요!"
                                }
                            }
                        )}
                    />
                    {errors.email && errors.email.type === "pattern" && <span className='p2'> 이메일 형식이 아닙니다. </span>}
                    <StInput type="password" placeholder='비밀번호'
                        {...register("password", {
                            minLength: {
                                value: 8,
                                message: "최소 8자 이상의 비밀번호를 입력해주세요!"
                            },
                            maxLength: {
                                value: 20,
                                message: "20자 이하의 비밀번호만 사용가능합니다!"
                            },
                            pattern: {
                                value: /^(?=[a-zA-Z]*\d)(?=\d*[a-zA-Z])\w{8,20}$/,
                                message: "영문, 숫자를 혼용하여 입력해주세요!"
                            },
                        })}
                    />
                    {errors.email && errors.email.type === "pattern" && <span className='p2'> 비밀번호 형식이 아닙니다. </span>}
                    <Button btn="btn1">로그인</Button>
                </FormBox>
                <TextBox>
                    <div>
                        <span>아이디 찾기</span>&nbsp;&nbsp; | &nbsp;&nbsp;<span>비밀번호 찾기</span>
                    </div>
                    <div>
                        <p>혹시, 배달만민족이 처음이신가요? <span style={{ color: "#2AC1BC" }} onClick={() => navigate('/user/signup')}>회원가입</span></p>
                    </div>
                </TextBox>
            </LoginWrap>
        </Layout >
    )
}

export default Login;
const LoginWrap = styled.div`
    display:flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    .cancel{
        display:flex;
        cursor: pointer;
        font-size: 28px;
        &:hover{
                color: var(--brand-color)
            }
    }
`
const LogoTitle = styled.div`
    display:flex;
    flex-direction: column;
    /* background-color: green; */
    width: 130px;
    height: 100px;
    margin: 0PX 105PX 0PX 135PX;
    .logoTitle{
        font-size: 38px;
        line-height: 2.5rem
    }
    .subTitle{
        margin-top:15px;
        font-size:25px;
        span{
            font-size:20px;
        }
    }
`

const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap:30px;
    margin-top:95px;
    span{
        color: var(--point-color);
    }
    
`

const TextBox = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    gap: 20px;
    span{
        cursor: pointer;
    }
`

const StInput = styled.input`
    width: 361px;
        height: 61px;
        font-size: 16px;
        border: 2px solid #999;
        border-radius: 6px;
        transition: all 0.3s linear;
    &:focus {
        border:2px solid #2AC1BC;
        outline: none;
    }
`