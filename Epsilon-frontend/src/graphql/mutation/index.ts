import gql from "graphql-tag";

export const CREATE_WORKOUT = gql`
mutation createWorkout($workout: WorkoutCreateInput!){
        createWorkout (
            workout: $workout
        ){
            muscularGroup
            weight
            reps
            exercise
        }
}
`