import gql from 'graphql-tag'

export const QUERY_USER = gql`
    query User($userId: String){
        query {
            users {
                username
                id
            }
        }
    }
`


export const QUERY_USERS = gql`
    query {
            users {
                username
                id
            }
    }
`