const customerModel=require('../models/customer.models')


exports.getAllCustomer=async (req,res,next)=>{
    try {
        const answer = await customerModel.find()
        res.status(200).json({err:false,answer ,msg:"All Customers"})
    } catch (error) {
        console.log(error)
        res.status(401).json({err:true,msg:error})
    }
}

exports.addNewCustomer=async(req,res,next)=>{
    try {
        const createCustomer =new customerModel(req.body)
        await createCustomer.save()
        res.status(200).json({err:false ,msg:"New Customer Created"})

    } catch (error) {
        res.status(401).json({err:true,msg:error})
    }
}