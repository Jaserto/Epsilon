import gql from "graphql-tag";

export const QUERY_USER = gql`
  query User($userId: String) {
    query {
      users {
        username
        id
      }
    }
  }
`;

export const QUERY_WORKOUT_AUTHOR = gql`
query WorkoutWeight($workoutWeightId: ID!) {
  workoutWeight(id: $workoutWeightId) {
    id
    reps
    series
    weight
    muscularGroup
    exercise
    createdAt
    updatedAt
  }
}
`;
