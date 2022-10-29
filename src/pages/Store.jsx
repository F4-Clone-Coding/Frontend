import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { IoArrowBackOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

const Store = () => {
    const navigate = useNavigate()
    return (
        <Layout>
            <StoreWrap>
                <HeaderBox>
                    <div className='a'>
                        <IoArrowBackOutline className='icon' onClick={() => navigate('/user/login')} />&nbsp;&nbsp;<p>1인분</p>
                    </div>
                    <div className='b'>
                        <IoHomeOutline className='icon' onClick={() => navigate('/')} />
                        <IoCartOutline className='icon' />
                    </div>
                </HeaderBox>

            </StoreWrap>
        </Layout>

    )
}

export default Store
const StoreWrap = styled.div`
`
const HeaderBox = styled.div`
    display:flex;
    justify-content: space-between;
    width:95%;
    height: 30px;
    font-size:25px;
    border: none;
    padding: 20px 10px;
    .a{
        display:flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        float:left;
        .icon{
            cursor: pointer;
        }
        
    }
    .b{
        display:flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        float:right;
        gap:18px;
        .icon{
            cursor: pointer;
        }
    }
`