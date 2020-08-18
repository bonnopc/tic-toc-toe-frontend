import ApolloClient from "libs/apolloClient";
import game from "../gql/queries/game";

export default uid => async dispatch => {
    try {
        const gameResponse = await ApolloClient.query({
            query: game,
            variables: { uid }
        }).then(response => response.data.game);

        if(gameResponse && gameResponse.statusCode === 200){
            dispatch({
                type: "SET_GAME_DATA",
                payload: gameResponse.result
            })
        }

        return gameResponse;
    } catch (error) {
        console.error("Error in getGame", error);
    }
}