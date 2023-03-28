const {MongoClient}=require("mongodb");


module.exports={
    selectdb:{},
   async  connect(){
        try{
           const clint=await MongoClient.connect('mongodb+srv://saranc:pizzawebcodebackend@pizza-webcode-backend.tolgowg.mongodb.net/?retryWrites=true&w=majority');
           this.selectdb=clint.db('guvi')
           console.log(this.selectdb);

        }catch(err){
            console.error(err);
        }
    }
}