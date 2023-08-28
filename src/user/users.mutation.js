import client from "../client.js";
import UserService from "./Service/userService";

export default {
    Mutation: {
        createAccount: async (_, {
            firstName,
            lastName,
            username,
            email,
            password
        }) => {
            try {
                await UserService.isExistUser(username, email);
                return client.user.create({
                    data: {
                        firstName,
                        lastName,
                        username,
                        email,
                        password,
                    }
                });
            } catch (e) {
                console.log(e);
            }
        }
    }
}