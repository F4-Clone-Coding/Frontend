import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Button from '../elements/button'
import Input from '../elements/input'
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    return (
        <Layout>
            <LoginWrap>
                <div><IoClose className='cancel' onClick={() => navigate('/')} /></div>
                <FormWrap>
                    <FormBox>
                        <Input inp='inp2' type="email" placeholder='이메일' />
                        <Input inp='inp2' type="password" placeholder='비밀번호' />
                        <Button btn="btn1">로그인</Button>
                    </FormBox>
                    <TextBox>
                        <span>아이디 찾기</span>&nbsp;&nbsp; | &nbsp;&nbsp;<span>비밀번호 찾기</span>
                    </TextBox>
                    <p>혹시, 배달만민족이 처음이신가요? <span style={{ color: "#2AC1BC", cursor: "pointer" }} onClick={() => navigate('/user/signup')}>회원가입</span></p>
                </FormWrap>




            </LoginWrap>
        </Layout >
    )
}

export default Login
const LoginWrap = styled.div`
    display:flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    .cancel{
        display:flex;
        cursor: pointer;
        font-size: 24px;
    }
`
const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap:25px;
    margin-top: 100px;
`

const TextBox = styled.div`
  
`

const FormWrap = styled.div`
    display:flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    gap: 20px;
`