import User from '../models/User'
class SessionController{

    async store(req,res){
        const {email} = req.body;
        let user = await User.findOne({email: email});
        if(!user){
            user = await User.create({email: email});
            return res.json(user);
        }
        return res.json({error: "usuario já registrado"});
    }
}
export default new SessionController();