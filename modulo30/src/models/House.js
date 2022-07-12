import {Schema, model} from "mongoose";

const HouseSchema = new Schema({
    thumbnail: String,
    descricao: String,
    preco: Number,
    localizacao: String,
    status: Boolean,
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

export default model('House', HouseSchema);