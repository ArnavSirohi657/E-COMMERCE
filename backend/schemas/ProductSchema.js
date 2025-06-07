import mongoose, { Schema } from "mongoose";
const ProductSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    offer:{
        type:String,
        default:"12%off"
    },
    decripation:{
        type:String,
        default:"Limited time deal"
    }
})

