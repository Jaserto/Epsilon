import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Toast } from '../../components/Toast';
import { Epsilon } from '../../components/Epsilon';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { PollIntervals } from '../../constants';
import { QUERY_USERS } from '../../graphql/query';
import client from 'src/graphql/client';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useState } from 'react';
import { CREATE_WORKOUT } from '../../graphql/mutation/index';
import { NewWorkoutForm } from '../../components/Forms/newWorkoutForm'


export const Workouts = () => {

  const history = useNavigate();
  

 // const { data, loading, error } = useQuery(QUERY_USERS,{
    //    variables: { userId: user.id },
   //     pollInterval: PollIntervals.profile,
     //   fetchPolicy: 'network-only'
    //  });
    
   //  console.log(data?.users);




  const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 250px;
  padding: 0 20px;
  @media (max-width: 450px) {
    padding: 10px;
  }
`

const Content = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-width: 250px;
color:white;
padding: 37px;
h3{
  margin: 20px 0;
}
`
const Box = styled.div`
display: flex;
margin-top:30px;
flex-direction: row;
height:600px;
width: 100%;
justify-content: space-between;
min-width: 250px;

.caja{
  height:fit-content;
  width:50%;
  padding:15px;
  background-color:#0062ff;
  border-radius:10px;
}
`


return (
  <>
    <Header />
    <Wrapper>      
        <Sidebar />
        <Content>
        <h1>Workouts</h1>
            <Box>
              <div className="caja">
                <h3>New Workout</h3>
                <NewWorkoutForm />
              </div>
            </Box>
         
        </Content>
    </Wrapper>
  </>
 

  )
}