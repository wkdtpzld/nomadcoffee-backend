import UserService from "./Service/userService";

export default {
    Mutation: {
        createAccount: async (_, {
            username,
            email,
            name,
            githubUsername,
            location,
            password
        }) => {
            try {
                await UserService.isExistUser(username, email);
                return await UserService.createUser(username, email, password, name, githubUsername, location);
            } catch (e) {
                console.log(e);
            }
        }
    }
}