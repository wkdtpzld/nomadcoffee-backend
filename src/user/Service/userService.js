import client from "../../client";
import * as bcrypt from "bcrypt";

class UserService {

    async createUser(username, email, password, name, githubUsername, location) {
        const hashPassword = await bcrypt.hash(password, 10, null);
        const user = client.user.create({
            data: {
                username,
                email,
                password: hashPassword,
                name,
                githubUsername,
                location,
            }
        });
        if (!user) {
            return {
                ok: false,
                error: '회원 생성에 실패하였습니다.'
            }
        }
        return {
            ok: true
        };
    }

    async isExistUser(username, email) {
        const isExistUser = await client.user.findFirst({
            where: {
                OR: [
                    {
                        username
                    },
                    {
                        email
                    }
                ]
            }
        });
        if (isExistUser) {
            throw new Error("이미 유저의 이름 또는 메일이 존재합니다.");
        }
    }
}

export default new UserService();