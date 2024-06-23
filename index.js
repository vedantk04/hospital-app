/*const express= require("express"); //importing library

const app= express();

app.get("/health-checkup", function (req,res){
    //do health checks here
    //these are authentications
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "harkirat" || password != "pass"){
        res.status(403).json({
           msg:"User doesnt exist", 
        });
        return;
    }

    if(kidneyId != 1 || kidneyId != 2){
        res.status(411).json({
            msg:"wrong inputs",
        });
        return;
    }

    res.send("Your heart is healthy");
});

*/

///////////////////////////////////////////////////////////////////

/*const express= require("express");

const app=express();

app.get("/health-checkup", function(req,res){
    const username= req.headers.username;
    const password= req.headers.password;
    const kidneyId= req.query.kidneyId;

    if(username != "harkirat" || password != "pass"){
        res.status(400).json({"msg": "Something up with your inputs"})
        return
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({"msg":"Somethings up with your inputs"})
        return
    }
    //do something with kidney here
    res.json({
        msg:"Your kidney is fine!"
    })
});

app.listen(3000);

Done with middlewares

///////////////////////////////
*/


/*
//here we learnt about global catches
const express= require("express");

const app= express();

app.use(express.json());


function middleware(req,res,next){
    fetch().then(()=>{
        next()
    })
}


app.post("health-checkup", function (req,res){
    //kidneys =[1,2]
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;

    res.send("Your Kidney length is"+ kidneyLength);
});




//global catches, another middleware
app.use(function(err,req,res,next){
    res.json({
        msg:"Sorry something is up with our server"
    })
})

app.listen(3000);


*/


///////////////////////////////////////////////////////////

//Starting with Zod(schema validation)
////////////////////
//if this is an array of numbers with atleast 1 input, return true, else return false

//this is without using zod
/*
function validateInput(arr){
    if(typeof arr =="object"&& arr.length >=1 && arr[0]== "number" ){

    }
}
*/

//with using zod
const zod = require("zod");

function validateInput(obj){
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    });
    
    const response= schema.safeParse(obj);
    console.log(response);
}

//{
//email => string=> should look like email
// password => should have 8 letters
//}

app.post("/login",function(req,res){
    const inputs= req.body;
    const response= validateInput(req.body)
    if(!response.success){
        res.json({
            msg:"Your inputs are invalid"
        })
        return;
    }
})