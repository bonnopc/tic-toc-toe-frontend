import gql from "graphql-tag";

export default gql`
    mutation createGame($score: ScoreInput!) {
        createGame(score: $score){
            statusCode
            message
            result{
                uid
                scores{
                    rowIndex
                    colIndex
                    value
                }
                winner
            }
        }
    }
`;