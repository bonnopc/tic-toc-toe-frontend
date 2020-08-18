import ApolloClient from "libs/apolloClient";
import gameLogs from "../gql/queries/gameLogs";

export default (gameUid) => async dispatch => {
    try {
        const logs = await ApolloClient.query({
            query: gameLogs,
            variables: { 
                gameUid,
                pagination: { skip: 0, limit: 1 }
            }
        }).then(response => response.data.gameLogs.result);

        dispatch({
            type: "ADD_GAME_LOG",
            payload: logs
        });

        return logs;
    } catch (error) {
        console.error("Err in getLogs", error);
    }
}