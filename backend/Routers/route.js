const  express = require('express');

const router = express.Router();

const {createUser ,getAllUsers,getUserById,updateUserById,deleteUserById,loginUser } = require("../Controlers/usercontroller");
const{addGoalToUser,possibleOrNot,readAllGoals} = require("../Controlers/goalcontroller");
const {createTransaction,readTransactions} = require("../Controlers/transactioncontroller");
const {calculateIncomeProportion} = require("../Controlers/income_proportioncontroller");
const {getAllSavings} = require("../Controlers/Monthlysavingscontrolelr")
const{ createOrUpdateFeedback, getAllFeedbacks} = require("../Controlers/Feedbackcontroller");

router.post("/createuser",createUser);
router.get("/readuser",getAllUsers);
router.get("/readSingleUSer",getUserById);
router.put("/updateUser",updateUserById);
router.delete("/deleteuser", deleteUserById);
router.get("/loginuser",loginUser );


// ------------------------------------------------
router.post("/creategoal", addGoalToUser);
router.get("/permonthsavings/:goal_id",possibleOrNot);
router.get("/all_goals/:userId",readAllGoals)
// -----------------------------------------------
router.post("/createtransaction", createTransaction);
router.get("/readtransaction",readTransactions )
// --------------------------------------------------
router.get("/getpercentage/:user_id",calculateIncomeProportion);
// -------------------------------------------------------------------
router.get("/savings/:user_id",getAllSavings)
// ---------------------------------------------------------------------
router.post("/feedback",createOrUpdateFeedback);
router.get("/readfeedback",getAllFeedbacks);

module.exports = router;