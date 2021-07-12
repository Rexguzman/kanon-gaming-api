import User, {UserDocument} from '../models/User'

const createUser = async ({username, email, password}:any) => {
    const findEmail = await User.find({email})
    console.log(findEmail)
}
