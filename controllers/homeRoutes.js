const router = require("express").Router();



router.get("/login", async (req, res) => {

    res.render("login")
});



module.exports = router;


// router.get("/login", (req, res) => {
//     if(req.session.logged_in){
//         res.redirect("/");
//         return;
//     }
//     res.render("login")
// });

// const { Todo, User } = require("../models");
// const withAuth = require("../utils/withAuth");

// router.get("/login", async (req, res) => {
//     // try {
//     //     const todoData = await Todo.findAll({
//     //         where: {
                
//     //         }
//     //     })
//     // } catch (error) {
        
//     // }
    
//     // if(req.session.logged_in){
//     //     res.redirect("/");
//     //     return;
//     // }
//     res.render("login")
// });






// router.get("/signup", (req, res) => {
//     // if(req.session.logged_in){
//     //     res.redirect("/");
//     //     return;
//     // }
//     res.render("register")
// })