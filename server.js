var express=require('express');
var app=express();
//var config=require('./config');
//var firebase=require('firebase');
var bodyparser=require('body-parser');
var port=process.env.port || 3001;
//var cors=require('cors');

//process.env["NODE_TLS_REJECT_UNAUTHORIZED"]=0;

app.set('port',port);
app.listen(port,()=>console.log("server is running"));
app.use(bodyparser.json({type:'*/*'}));
app.use(bodyparser.urlencoded({extended:true}));
//app.use(cors());


// var time=firebase.database.ServerValue.TIMESTAMP;
// console.log(time.valueOf());

app.get('/getmsg',(req,res)=>res.send("Hey server is running"));

app.post('/person',(req,res)=>res.send(req.body.name));

//firebase.initializeApp(config);
//firebase.database.enableLogging(true);

// app.get('/gettasks',(req,res)=>{
// var db=firebase.database().ref("Tasks");
//  db.once('value', (snap) => {
            
//             res.json(snap.val());
//             })
//         .catch(error => {
//         res.json("eroror" . error)
//         });
// });

// app.post('/updatetask',(req,res)=>{

//     var endtime=req.body.endtime;
//     var userId=req.body.userid;
//     var duration=req.body.duration;
//     var uniqeId=req.body.uniqe;
   
//     // var val=firebase.database().ref().child("Tasks");
//     // if(val.equalTo(userId)){
//     //     var db=firebase.database().ref().child("Tasks").child(''+userId+'/'+task);
//     // }else{
//     //     var db=firebase.database().ref().child("Tasks");
//     //     db=db.child(''+userId+'/'+task);
//     // }
//     var db=firebase.database().ref().child("Tasks");
//     db=db.child(''+userId+'/'+uniqeId);
    
//     db.update({EndTime:endtime,Duration:duration},
//         function(error){
//             if(error){
//                 res.send("Data not saved "+error);
//             }
//             else{
//                 res.send("Data saved successfully");
//             }
//         }
//     );
// });

// app.get('/gettaskbyid/:id',(req,res)=>{
//     var id=req.params;
//     var db=firebase.database().ref().child("Tasks").child(''+id["id"]);
//     db.once('value',snap=>{
        
//         res.json(snap.val());
        
//     }).catch(error=>{
//         res.send("No record found "+error);
//     });
// });

// app.post('/savetask',(req,res)=>{
//     var obj={ 
//         Task:req.body.task,
//         StartTime:req.body.starttime,
//         EndTime:req.body.endtime,
//         userId:req.body.userid,
//         Duration:req.body.duration,
//         CreatedDate:req.body.createddate
//     }
//     var val=firebase.database().ref().child("Tasks");
//     var db=val.child(''+obj.userId);
    
//     db.push(obj,
//         function(error){
//             // if(error){
//             //     res.send("Data not saved "+error);
//             // }
//             // else{
//             //     res.send("Data saved successfully");
//             // }
//         }
//     ).then(response => {
//          //res.send(JSON.stringify(response.getKey()));
//          res.send({ key: response.getKey() });
//         //console.log(response.getKey()) // this will return you ID
//     })
//     .catch(error => console.log(error));;
// });