import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { IoArrowBackOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import Category from '../components/Category';

const Store = () => {
    const navigate = useNavigate()
    return (
        <Layout>
            <StoreWrap>
                <HeaderBox>
                    <div className='a'>
                        <IoArrowBackOutline className='icon' onClick={() => navigate('/user/login')} />&nbsp;&nbsp;<p>배달만민족</p>
                    </div>
                    <div className='b'>
                        <FaHome className='icon' onClick={() => navigate('/')} />
                        <FaUserAlt className='icon' onClick={() => navigate('/mypage')} />
                    </div>
                </HeaderBox>
                <Category />

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
    font-size:24px;
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
            &:hover{
                color: var(--brand-color)
            }
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
            &:hover{
                color: var(--brand-color)
            }
        }
    }
`