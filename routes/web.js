import express from "express";
import studentController from "../controller/studentController.js";
const router =express.Router();

router.get('/',studentController.getData);
router.post('/',studentController.createData);
router.get('/edit/:id',studentController.editData);
router.post('/update/:id',studentController.updateDataById);
router.post('/delete/:id',studentController.deleteDataById);

export default router;