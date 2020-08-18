import gql from "graphql-tag";

export default gql`
    query game($uid: String!) {
        game(uid: $uid){
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