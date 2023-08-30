import {gql} from "apollo-server";

export default gql`
    type User {
        id: String!
        firstName: String!
        lastName: String
        username: String!
        email: String!
        createdAt: String!
        updatedAt: String!
    }
    type Mutation {
        createAccount(
            username: String!
            email: String!
            name: String!
            location: String!
            githubUsername: String!
            password: String!
        ): User
    }
    type Query {
        seeProfile(username: String): User
    }
`;