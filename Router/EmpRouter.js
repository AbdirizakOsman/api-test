import express from 'express'
import shaqo from '../models/EmpModel.js'
const EmpRouters = express.Router()

//Reading Data
EmpRouters.get('/all',async(req,res)=>{
    const sogali = await shaqo.find()

    res.send(sogali);
})

//Post

EmpRouters.post('/add',async(req,res)=>{
    const kudar = new shaqo({
        empname:req.body.empname,
        mothername:req.body.mothername,
        Address:req.body.Address,
        Tell:req.body.Tell
    })
    await kudar.save()
    res.send('saved Success')
})

//Delete 

EmpRouters.delete("/:id", async(req,res) => {
    shaqo.deleteOne({_id:req.params.id}).then(result =>{
        res.status(200).json({
            message:"Data Deleted",
            result:result
        })
        .catch(err=>{
            res.status(404).json({
                Error:err
            })
        })
    })
})

// EmpRouters.delete("/:id", async (req, res) => {
//     try {
//         const deletedData = await shaqo.deleteOne({ _id: req.params.id });
//         if (deletedData.deletedCount === 0) {
//             return res.status(404).json({ message: "Data not found" });
//         }
//         res.status(200).json({
//             message: "Data Deleted",
//             result: deletedData
//         });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

//Updating 

EmpRouters.put("/:id",async(req,res)=>{
    console.log(req.params.id);
    shaqo.findOneAndUpdate({_id:req.params.id},{
        $set:{
            empname:req.body.empname,
            mothername:req.body.mothername,
            Address:req.body.Address,
            Tell:req.body.Tell
        }
    })
    .then(result =>{
        res.status(200).json({
            update: result
        })
    })
    .catch (err=>{
        console.log(err);
        res.status(404).json({
            Error:err
        })
    })
})


export default EmpRouters;