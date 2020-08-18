export default {
    httpUrl: process.env.REACT_APP_API_ENDPOINT || "http://localhost:8080/graphql",
    subscriptionUrl: "ws://localhost:8080/graphql"
}