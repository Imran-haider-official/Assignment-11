import {database} from '../Data/Productdata.js'



export const getAllProducts = (req,res) =>{

    
    res.json(database.products)



}


export const AddProduct = (req,res) =>{

try {
        const {title, description, category, price} = req.body


        const newProd = {
            title,
            description,
            category,
            price,
            id: database.products.length + 1
        }


        database.products.push(newProd)
        res.status(201).json(newProd)
} catch (error) {
    res.status(500).json({
        message:"Internal server error",
        Error:error.message
    })
}

}

export const getSingleProduct = (req,res)=>{
    const id = Number(req.params.id)

    const product = database.products.find(p => p.id === id)

    res.status(200).json(product)
}


export const updateProduct = (req, res) => {
    const id = Number(req.params.id);
    const index = database.products.findIndex(p => p.id === id);

    if (index === -1) return res.status(404).send("Not Found");

    // Static data ko update karne ka sab se tez tareeka
    database.products[index] = { ...database.products[index], ...req.body, id };

    res.json(database.products[index]);
};



export const deleteProduct = (req,res)=>{
    const id = parseInt(req.params.id);
      database.products= database.products.filter(p => p.id !== id)

    res.json({
        msg:"deleted succesfully"
    })
}