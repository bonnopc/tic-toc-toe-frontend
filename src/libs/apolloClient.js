import ApolloClient from "apollo-client"
import { WebSocketLink } from 'apollo-link-ws'
import { HttpLink } from 'apollo-link-http'
import { split, ApolloLink } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context'
import { ApiEndPoint } from "config"

export const wsLink = new WebSocketLink({
    uri: ApiEndPoint.subscriptionUrl,
    options: {
        reconnect: true,
    }
})

const cache = new InMemoryCache({
    addTypename: false
});

const httpLink = new HttpLink({
    uri: ApiEndPoint.httpUrl,
})

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            // authorization: getToken(),
        }
    }
});

const combinedLink = split(
    // split based on operation type
    ({ query }) => {
        const definition = getMainDefinition(query);

        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    authLink.concat(httpLink),
);

const globalErrorHandler = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if(networkError){
        console.error("[NETWORK ERR] :", networkError)
    } else if(graphQLErrors){
        console.error('GRAPHQL ERRORS', graphQLErrors)
    }

    return forward(operation)
})

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
    },
    mutate: {
        errorPolicy: 'all',
    },
}

const client = new ApolloClient({ 
    link: ApolloLink.from([
        globalErrorHandler,
        combinedLink
    ]),
    cache,
    defaultOptions
});


export default client