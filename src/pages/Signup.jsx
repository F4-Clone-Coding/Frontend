import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Button from '../elements/button'
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import Input from '../elements/input'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';


const Signup = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = async (payload) => {
        console.log("함수실행!", payload)

        try {
            const res = await axios.post("http://localhost:3001/user", payload)
            if (res.status === 200) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: '회원가입을 축하합니다!',
                    showConfirmButton: false,
                    timer: 1000
                })
                navigate("/");
            }
        } catch (error) {
            console.log("회원가입 에러", error)
        }
    }


    const password = watch('password')
    console.log("pw", password)
    // const confirm = watch('confirm')
    // const email = watch('email')
    // const nickname = watch('nickname')

    const navigate = useNavigate()
    return (
        <Layout>
            <SignupBox>
                <IoArrowBackOutline className='back' onClick={() => navigate('/user/login')} />
                <Title>회원가입</Title>
                <FormWrap>
                    <FormBox onSubmit={handleSubmit(onSubmit)}>
                        <p>이메일</p>

                        <input placeholder='이메일*'
                            {...register("email",
                                {
                                    required: "Email is required", pattern: /^[A-Za-z0-9]([-_\.]?[0-9a-zA-z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-z])*\.[a-zA-z]{2,3}$/,
                                }
                            )}
                        />
                        {errors.email && errors.email.type === "pattern" && <p className='p2'> 이메일 형식이 아닙니다. </p>}

                        <input type="password" placeholder='비밀번호*(영문+숫자,8~20자)'
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
                        {errors.email && errors.email.type === "pattern" && <span className='p2'> 비밀번호 형식이 아닙니다. </span>}

                        <input type="password" placeholder='비밀번호 재확인*'
                            {...register("confirm", {
                                // required: "비밀번호를 확인 해주세요!",
                                validate: {
                                    confirmPw: (v) => { return password === v || "비밀번호가 일치하지 않습니다!" }
                                }
                            })}
                        />
                        {errors.confirm && errors?.confirm.type === "confirmPw" && <p className='p2'> {errors.confirm?.message}</p>}
                        <input placeholder='닉네임*'
                            {...register("nickname", {
                                // required: "닉네임을 입력해주세요!",
                                minLength: {
                                    value: 3,
                                    message: "최소 3자 이상의 닉네임을 입력해주세요!",
                                },
                                maxLength: {
                                    value: 6,
                                    message: "6자 이하의 닉네임만 사용가능합니다!",
                                },
                                pattern: {
                                    // value:  ,
                                    // message: "영문, 숫자를 혼용하여 입력해주세요!"
                                },

                            })
                            } />
                        {errors.nickname && errors?.nickname.type === "confirmPw" && <p className='p2'> {errors.nickname?.message}</p>}
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
        color: red;
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