import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { 
    MdOutlineSpaceDashboard, 
    MdStickyNote2, 
    MdOutlineMessage,
    MdWysiwyg,
    MdTune,
    MdSettings
} from "react-icons/md";


const variables = {
  blueColor: '#0062ff',
  grayColor: '#92929d'
}


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #171725;
    font-size: 14px;
    letter-spacing: 0.1px;
    border-left: 3px solid ${({ theme }: any) => theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  }
  svg {
    color:${({ theme }: any) => theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  }
  .active {
    color: ${variables.blueColor};
    border-left: 3px solid ${variables.blueColor};
    svg {
      fill: ${variables.blueColor};
    }
  
 
`
const Icon = styled.div`
  margin: 0 24px;
  display: flex;
  align-items: center;
`
const NameLink = styled.span`
color:${({ theme }: any) => theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  @media (max-width: 620px) {
    display: none;
  }
`

interface IItemProps {
  name: string
  icon: object | string
  link: string
}

const Item: React.FC<IItemProps> = props => {
  const { icon, name, link } = props
  //error 204
  return (
    <Wrapper>
      <NavLink to={link} className={(navData) => navData.isActive ? "active" : "" }>
      <Icon>
        {name==="Dashboard" && <MdOutlineSpaceDashboard />}
        {name==="Messages" && <MdOutlineMessage />}
        {name==="Workouts" && <MdStickyNote2 />}
        {name==="Schedule" && <MdWysiwyg  />}
        {name==="Activity" && <MdTune />}
        {name==="Settings" && <MdSettings />}
      </Icon>
        {/* <Icon>{icon}</Icon> */}
        <NameLink>{name}</NameLink>
      </NavLink>
    </Wrapper>
  )
}

export default Item