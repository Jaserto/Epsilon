
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Toast } from '../../components/Toast';
import { Epsilon } from '../../components/Epsilon';
import { ToggleTheme } from '../../components/ToggleTheme';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Content from '../../components/Main/Content'
import imgg from '../../assets/images/noprofile.jpg';
import  {Input} from '../../components/Input';

export const Settings = () => {


  const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  padding: 37px;
  h3{
    margin: 20px 0;
  }
  `
  const Box = styled.div`
  display: flex;
  margin-top:30px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  min-width: 250px;
  h1{
    color:white;
  }
  .data{
    flex-direction:column;
    padding:30px;
    display:flex;
    width:59%;
    border: 1px solid gray;
    border-radius:10px;
    height: 400px;
    span{
      font-size: 13px;
    }
  }
  .image{
    display:flex;
    height:400px;
    width: 39%;
    padding:0 40px;
    justify-content:center;
    align-items:center;
    border:1px solid gray;
    border-radius:10px;
    flex-direction: column;
    text-align:center;
    span{
      margin-top: 20px;
      font-size:13px;
    }
  }
  img{
    padding:10px;
    border: 1px solid gray;
    border-radius:150px;
    width:140px;

  }
  `

  const NotificationBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height:300px;
  border: 1px solid gray:
  @media (max-width: 450px) {
    padding: 10px;
  }
  `
  const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 250px;
  padding: 0 20px;
  color:${({ theme }:any) => theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  @media (max-width: 450px) {
    padding: 10px;
  }
  `
  const ContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 250px;
  padding: 0 20px;
  @media (max-width: 450px) {
    padding: 10px;
  }
  `

return (
  <>
    <Header />
    <Wrapper>      
        <Sidebar />
        <Content>
        <h1>Settings</h1>
            <Box>
              <div className="data">
                <span>Unit System:</span>
                <Input />
                <span>Calendar week Start:</span>
                <Input />
                <span>Default Weight Increment:</span>
                <Input />
                <span>Track personal records:</span>
                <Input />
              </div>
            </Box>
          <h3>Data</h3>
          <NotificationBox>
            <span>Back up</span>
            <span>Restore</span>
            <span>Spreadsheet Export</span>
            <span>Calculate personal records</span>
            <span>Delete workout History</span>
          </NotificationBox>
          <h3>Other</h3>
          <NotificationBox>
            <span>Rate Epsilon</span>
            <span>Feedback</span>
            <span>Twitter</span>
            <span>Show tutorials</span>
            <span>Privacy Policy</span>
          </NotificationBox>
        </Content>
    </Wrapper>
  </>
 

  )
}