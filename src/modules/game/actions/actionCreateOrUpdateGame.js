import ApolloClient from "libs/apolloClient";
import createGame from "modules/game/gql/mutations/createGame";
import updateGame from "modules/game/gql/mutations/updateGame";

export default ({ gameUid, isXturn, rowIndex, colIndex }) => async dispatch => {
    try {
        let mutationResponse;

        const score = { rowIndex, colIndex, value: isXturn ? 'X' : 'O' };

        dispatch({ type: 'TOGGLE_TURN' });

        if(gameUid && score){
            mutationResponse = await ApolloClient.mutate({
                mutation: updateGame,
                variables: { uid: gameUid, score }
            }).then(response => response.data.updateGame);
        } else if(score){
            mutationResponse = await ApolloClient.mutate({
                mutation: createGame,
                variables: { score }
            }).then(response => response.data.createGame);
        }

        if(mutationResponse && mutationResponse.statusCode === 200){
            if(!gameUid) dispatch({ type: "SET_GAME_UID", payload: mutationResponse.result.uid });
            dispatch({ type: "SET_GAME_DATA", payload: mutationResponse.result });
        }

        return mutationResponse;
    } catch (error) {
        console.error("Error in create or update game", error)
    }
}