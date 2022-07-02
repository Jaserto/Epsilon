import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Toast } from "../../components/Toast";
import { Epsilon } from "../../components/Epsilon";
import { ToggleTheme } from "../../components/ToggleTheme";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Content from "../../components/Main/Content";
import imgg from "../../assets/images/noprofile.jpg";
import { Input } from "../../components/Input";
import Toggle from "../../components/Toggle";

export const Settings = () => {
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 250px;
    padding: 37px;
    h3 {
      margin: 20px 0 8px 0;
    }
  `;
  const Box = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    min-width: 250px;
    h1 {
      color: white;
    }
  `;

  const NotificationBox = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    border-top: 1px solid white;
    .campo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 12px 7px;
    }
    @media (max-width: 450px) {
      padding: 10px;
    }
  `;
  const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-width: 250px;
    padding: 0 20px;
    color: ${({ theme }: any) =>
      theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
    @media (max-width: 450px) {
      padding: 10px;
    }
  `;

  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <Content>
          <NotificationBox>
            <h3>Settings</h3>
            <span className="campo">Unit System: Metric</span>
            <span className="campo">Calendar week Start:</span>
            <div className="campo">
              <span>Track personal records</span>
              <ToggleTheme i="3" description="Track personal records" />
            </div>
            <span className="campo">Default Weight Increment: 2.5kgs</span>
          </NotificationBox>
          <h3>DATA</h3>
          <NotificationBox>
            <div className="campo">
              <span>Back up</span>
              <ToggleTheme i="1" description="Back up" />
            </div>
            <div className="campo">
              <span>Calculate personal records</span>
              <ToggleTheme i="2" description="Calculate personal records" />
            </div>
            <a className="campo">Spreadsheet Export</a>
            <a className="campo">Delete workout History</a>
          </NotificationBox>
          <h3>OTHER</h3>
          <NotificationBox>
            <span className="campo">Rate Epsilon</span>
            <span className="campo">Feedback</span>
            <span className="campo">Twitter</span>
            <span className="campo">Show tutorials</span>
            <span className="campo">Privacy Policy</span>
          </NotificationBox>
        </Content>
      </Wrapper>
    </>
  );
};
