const express = require("express"),
router = express.Router()
Item = require("../../models/Item")

//ROUTES

router.get("/",(req,res)=>{
    Item.find({},(err,allItems)=>{
        if(err){console.log("err while fetching allItems")}
        else{res.send(allItems)}
    })
})

router.post("/",(req,res)=>{
   const newItem = {
       name:req.body.name
   }

   Item.create(newItem,(err,createdItem)=>{
       if(err){console.log(`err while creating ${newItem.name}`)}
       else{res.send(createdItem)}
   })
})

router.delete("/:id",(req,res)=>{
    const id = req.params.id
    Item.findByIdAndRemove(id,(err,delItem)=>{
        if(err){res.send({success:false})}
         else{res.send({success:true})}
    })
 })


module.exports = router