import studentModel from "../model/studentModel.js"

class studentController{

    static createData =  async (req,res) => {
        try{
            const {Name,Age,Fees} = req.body;
            const doc = new studentModel({
                Name:Name,
                Age:Age,
                Fees:Fees
            });
            const result = await doc.save();
            res.redirect('/student');
        }catch(err){
            console.log(err);
        }      
    }
    static getData = async (req,res) => {
        try{
            const result = await studentModel.find();
            res.render("index" , {data :result});
        }
        catch(err) {
            console.log(err);
        }
    }
    static editData = async (req,res) => {
        try{
            const result= await studentModel.findById(req.params.id);
            res.render("edit" , {data :result})
        }catch(error){
            console.log(error);
        }
    }

    
    static updateDataById = async (req,res) => {
        try{
        const result= await studentModel.findByIdAndUpdate(req.params.id,req.body);
        res.redirect("/student") 
        }catch{
            console.log(error)
        }
    }
    static deleteDataById = async (req,res) => {
        try{
            const result= await studentModel.findByIdAndDelete(req.params.id);
            res.redirect("/student")
        }catch{
            console.log(error)
        }
       
       
    }
}
export default studentController;