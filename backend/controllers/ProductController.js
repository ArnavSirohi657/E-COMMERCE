import Product from "../model/ProductModel.js";

export const getAllProducts = async (req, res) => {
    try{
        const Products=await Product.find();
        res.json(Products);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const getProductById = async (req, res) => {
    try{
        const Product= await Product.findById(req.params.id);
        res.json(Product);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}