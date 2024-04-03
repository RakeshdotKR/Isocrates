const mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

let employeeSchema = require("../models/employee");
//Create employee
router.route("/add-emp").post(async(req,res,next) =>{
    await employeeSchema
    .create(req.body)
    .then((result)=>{
        res.json({
            data: result,
            message: "New employee added",
            status:200,
        });
    })
    .catch((err)=>{
        return next(err);
    });
});
//Read employee data
router.route("/").get(async(req,res,next) =>{
    await employeeSchema
    .find()
    .then((result)=>{
        res.json({
            data:result,
            message:"All Employee details fetched successfully",
            status: 200,
        });
    })
    .catch((err)=>{
        return next(err);
    })
});

//Read one employee data
router.route("/get-emp/:id").get(async(req,res,next) =>{
    await employeeSchema
    .findById(req.params.id)
    .then((result)=>{
        res.json({
            data:result,
            message:"One Employee detail fetched successfully",
            status: 200,
        });
    })
    .catch((err)=>{
        return next(err);
    })
});

//Update one employee data
router.route("/update-emp/:id").put(async(req,res,next) =>{
    await employeeSchema
    .findByIdAndUpdate(req.params.id,{
        $set:req.body,
    })
    .then((result)=>{
        res.json({
            data:result,
            message:"One Employee detail updated successfully",
            status: 200,
        });
    })
    .catch((err)=>{
        return next(err);
    })
});

//Delete one employee data
router.route("/delete-emp/:id").delete(async(req,res,next) =>{
    await employeeSchema
    .findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.json({
            data:result,
            message:"One Employee detail deleted successfully",
            status: 200,
        });
    })
    .catch((err)=>{
        return next(err);
    })
});

module.exports = router;
