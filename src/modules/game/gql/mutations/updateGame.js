import gql from "graphql-tag";

export default gql`
    mutation updateGame($uid: String!, $score: ScoreInput!) {
        updateGame(uid: $uid, score: $score){
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