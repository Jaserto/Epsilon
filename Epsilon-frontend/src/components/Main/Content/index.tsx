import styled from "styled-components";
import faker from "faker";
import Title from "./title";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_WORKOUT_AUTHOR } from "../../../../src/graphql/query/index";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const datos = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Public Sans", sans-serif;
  width: 100%;
  min-width: 250px;
  padding: 40px;
  @media (max-width: 450px) {
    padding: 10px;
  }
`;
const Welcome = styled.div`
  height: 160px;
  border-radius: 10px;
  padding: 10px;
  background-color: #5299ff;
`;
const ContentBoxes = styled.div`
  height: 150px;
  margin-top: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Box = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  height:100%;
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  padding 15px;
  border-radius:10px;
  width: 30%;
  border: 1px solid gray; 
  h2{
    padding-bottom:10px;
    border-bottom: 1px solid #2d4cff;
    font-size: 16px;
    color:${({ theme }: any) =>
      theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  }
  span{
    font-size: 25px;
    font-weight:700;
    color:${({ theme }: any) =>
      theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  }
`;
const ContentBoxWeight = styled.div`
  height: 300px;
  margin-top: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LatestWorkouts = styled.div`
  border-radius: 8px;
  margin-top: 30px;
  height: 400px;
  padding: 15px;
  color: ${({ theme }: any) =>
    theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  border: 1px solid gray;
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  h2 {
    font-size: 18px;
  }
  span {
    font-size: 15px;
    font-weight: 700;
  }
  .workoutsLine {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
const BoxWeight = styled.div`
  border-radius: 8px;
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  width: 100%;
  padding: 20px;
  height: auto;
  border: 1px solid gray;
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    font-size: 18px;
    margin-bottom: 10px;
    color: ${({ theme }: any) =>
      theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  }
  span {
    font-size: 25px;
    font-weight: 700;
    color: ${({ theme }: any) =>
      theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  }
`;

export const data1 = {
  labels: ["Weight", "Gym", "Running"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Content = () => {
  const arrayInt: any = [];
  const { data, loading, error } = useQuery(QUERY_WORKOUT_AUTHOR, {
    variables: { workoutWeightId: "62c07e976aaa93b42994228a" },
    fetchPolicy: "network-only",
  });

  console.log(data?.workoutWeight);
  data?.workoutWeight.map((x: any) => arrayInt.push(parseInt(x.weight)));
  let total = arrayInt.reduce((a: number, b: number) => a + b, 0);
  let date = new Date(data?.workoutWeight[0].createdAt);

  return (
    <Wrapper>
      <Welcome>
        <Title />
      </Welcome>
      <ContentBoxes>
        <Box>
          <h2>Total Weight lifted Today</h2>
          {loading ? <span>Cargando...</span> : <span>109 kgs</span>}
        </Box>
        <Box>
          <h2>Total Weight lifted this week</h2>
          <span>216,000 kgs</span>
        </Box>
        <Box>
          <h2>Total Weight lifted this month</h2>
          {loading ? <span>Cargando...</span> : <span>{total} kgs</span>}
        </Box>
      </ContentBoxes>
      <ContentBoxWeight>
        <BoxWeight>
          <h2>Strenght progression</h2>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={datos}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#eceeff"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#8f9fff" />
              <Line type="monotone" dataKey="amt" stroke="#2d4cff" />
            </LineChart>
          </ResponsiveContainer>
        </BoxWeight>
      </ContentBoxWeight>
      <LatestWorkouts>
        <h2>Latest workouts - {data?.workoutWeight.length} Workouts</h2>
        {data?.workoutWeight.map((workout: any) => (
          <div key={workout.id} className="workoutsLine">
            <div>{new Date(workout.createdAt).toLocaleDateString("en-US")}</div>
            <span>Total Sets {workout.series}</span>
            <span>Total Reps {workout.reps}</span>
            <span>Total Volume {total} kgs</span>
          </div>
        ))}
      </LatestWorkouts>
    </Wrapper>
  );
};

export default Content;
