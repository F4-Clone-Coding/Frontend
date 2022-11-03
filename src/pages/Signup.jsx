import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Button from '../elements/button'
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { api } from '../shared/apis';

const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = async (payload) => {
        try {
            const res = await api.post("/user/signup", payload)
            if (res.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    background:
                        "#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
                    title: "가입을 축하합니다!",
                    width: 350,
                    height: 200,
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/user/login");
            }
        } catch (error) {
            console.log("회원가입 에러", error)
        }
    }

    const password = watch('password');

    const navigate = useNavigate();
    return (
        <Layout>
            <SignupBox>
                <IoArrowBackOutline className='back' onClick={() => navigate('/user/login')} />
                <Title>회원가입</Title>
                <FormWrap>
                    <FormBox onSubmit={handleSubmit(onSubmit)}>
                        <Stinput placeholder='이메일*'
                            {...register("email",
                                {
                                    pattern: {
                                        value: /^[\w][\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$/,
                                        message: '이메일 형식이 아닙니다!'
                                    }

                                }
                            )}
                        />
                        {errors.email && errors.email.type === "pattern" && <span className='p2'> {errors.email?.message} </span>}

                        <Stinput type="password" placeholder='비밀번호*(영문+숫자,8~20자)'
                            {...register("password", {
                                // required: "비밀번호를 입력해주세요!",
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
                        {errors.password && errors.password.type === "pattern" && <span className='p2'> {errors.password?.message} </span>}
                        <Stinput type="password" placeholder='비밀번호 재확인*'
                            {...register("confirm", {
                                // required: "비밀번호를 확인 해주세요!",
                                validate: {
                                    confirmPw: (v) => { return password === v || "비밀번호가 일치하지 않습니다!" }
                                }
                            })}
                        />
                        {errors.confirm && errors?.confirm.type === "confirmPw" && <span className='p2'> {errors.confirm?.message}</span>}
                        <Stinput placeholder='닉네임*'
                            {...register("nickname", {
                                // required: "닉네임을 입력해주세요!",
                                minLength: {
                                    value: 3,
                                    message: "최소 3자 이상의 닉네임을 입력해주세요!",
                                },
                                maxLength: {
                                    value: 10,
                                    message: "10자 이하의 닉네임만 사용가능합니다!",
                                },
                                pattern: {
                                    value: /^[가-힣0-9]{3,10}$/,
                                    message: "한글, 숫자를 혼용하여 입력해주세요!"
                                },
                            })
                            } />
                        {errors.nickname && errors?.nickname.type === "pattern" && <span className='p2'> {errors.nickname?.message}</span>}
                        <Button btn='btn1' >회원가입</Button>
                    </FormBox>
                </FormWrap>
            </SignupBox>
        </Layout >

    )
}

export default Signup

const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    border:none;
    gap:20px;
    span{
        color: var(--point-color);
    }

`

const FormWrap = styled.div`
    margin-bottom: 70px;
`

const Title = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 361px;
    font-size: 32px;
    margin-bottom: 50px;
    padding-top: 50px;
`

const SignupBox = styled.div`
    padding: 20px;
    .back{
        display:flex;
        cursor: pointer;
        font-size: 24px;
        &:hover{
                color: var(--brand-color)
            }
    }
    
`

const Stinput = styled.input`
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