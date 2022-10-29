import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Button from '../elements/button'
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import Input from '../elements/input'

const Signup = () => {
    const navigate = useNavigate()
    return (
        <Layout>
            <SignupBox>
                <IoArrowBackOutline className='back' onClick={() => navigate('/user/login')} />
                <Title>회원가입</Title>
                <FormWrap>
                    <FormBox >
                        <Input inp="inp1" type="email" placeholder='이메일*' />
                        <Input inp="inp1" type="password" placeholder='비밀번호*(영문+숫자,8~20자)' />
                        <Input inp="inp1" type="password" placeholder='비밀번호 재확인*)' />
                        <Input inp="inp1" type="text" placeholder='닉네임*' />
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
    }
    
`