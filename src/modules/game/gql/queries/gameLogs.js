import gql from "graphql-tag";

export default gql`
    query gameLogs($gameUid: String!, $pagination: PaginationInput) {
        gameLogs(gameUid: $gameUid, pagination: $pagination){
            statusCode
            message
            result{
                gameUid
                value
                rowIndex
                colIndex
            }
        }
    }
`;