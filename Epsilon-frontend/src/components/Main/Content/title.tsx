import React from 'react'
import styled from 'styled-components'

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  color:black;
  padding:15px;
  p{
      font-size:13px;
  }
  a{
      width:80px;
      padding:5px;
      margin:15px 0;
      font-size:14px;
      border-radius:5px;
      background-color: #2d4cff;
      border: none;
      color: white;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  }
`
const Username = styled.span`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.1px;
 
  font-family:'Public Sans', sans-serif;
  @media (max-width: 450px) {
    display: none;
  }
`
const WelcomeText = styled.span`
  font-size: 18px;
  letter-spacing: 0.1px;
  font-family:'Public Sans', sans-serif;
`

const Title = () => {
  return (
    <HeaderContent>
        <Username>Welcome back Javi,</Username>
        <WelcomeText>Here’s your currently workouts</WelcomeText>
        <p>
            Start by adding your first training, and take your progress to the next level.
        </p>
        <a href='/workouts'>Go Now</a>
    </HeaderContent>
  )
}

export default Title