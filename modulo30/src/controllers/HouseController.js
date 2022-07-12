import House from '../models/House';
import User from '../models/User';
class HouseController{
    //listagem
    async index(req,res){
        const {status} = req.query;

        const house = await House.find({status:status})
        return res.json(house)
    }
    //criar
    async store(req, res){
        const {thumbnail,descricao,preco,localizacao,status} = req.body;
        const {user_id} = req.headers;

        const house = await House.create({
            user: user_id,
            thumbnail: thumbnail,
            descricao: descricao,
            preco: preco,
            localizacao: localizacao,
            status : status,
        })
        return res.json(house)
    }
    //update
   

    async update(req,res){
        const {house_id} = req.params;
        const {user_id} = req.headers;
        const {thumbnail,descricao,preco,localizacao,status} = req.body;

        const user = await User.findById(user_id);
        const houses = await House.findById(house_id);

        if((user._id)!== (houses.user)){
            return res.status(401).json({error: "Este usuario não é autorizado para alterar informações desta casa!"});
        }

            await House.updateOne({ _id: house_id},{
            user: user_id,
            thumbnail: thumbnail,
            descricao: descricao,
            preco: preco,
            localizacao: localizacao,
            status : status,
        });

        return res.send()
    }

    async destroy(req,res){
        let {house_id} = req.body;
        let {user_id} = req.headers;

        let buscar_casa = await House.findById({_id: house_id})
        if(!buscar_casa){
            return res.status(404).json({error: "Casa não encontrada"});
        }
        
        await House.findByIdAndDelete({ _id: house_id}, {
            user: user_id,
        })
        return res.json({message: "Casa deletada com sucesso!"})

    }
}
export default new HouseController();