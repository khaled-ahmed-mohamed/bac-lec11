
const mongodb = require('mongodb')
const mongoClient= mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'

mongoClient.connect(connectionUrl,(error,res1)=>{
    if(error){
        return  console.log('error has occured')
    }
    console.log('All Perf')
        const dbname = 'proj-2'
        const db = res1.db(dbname)
        db.collection('users').insertOne({
            name:'khaled',
            age:22
        },
        
        (error,data)=>{
            if(error){ 
            console.log('Unable to insert data');
        }
        console.log(data.insertedId);
        })
        db.collection('users').insertOne({
            name: 'ahmed',
            age: 30
        },
    
            (error, data) => {
                if (error) {
                    console.log('Unable to insert data');
                }
                console.log(data.insertedId);
            })
            db.collection ('users').insertMany([
                                {
                                    name : 'gad',
                                    age : 20
                                },
                                {
                                    name : 'reem',
                                    age : 21
                                },
                                {
                                    name : 'tasneem',
                                    age : 20
                                },
                                {
                                    name : 'tanjoiro',
                                    age : 20
                                },
                                {
                                    name : 'hassan',
                                    age : 18
                                },
                                {
                                    name : 'emad',
                                    age : 27
                                },
                                {
                                    name : 'hazem',
                                    age : 27
                                },
                                {
                                    name : 'omar',
                                    age : 27
                                },
                                {
                                    name : 'islam',
                                    age : 27
                                },
                                {
                                    name : 'mohammed',
                                    age : 27
                                }
                            ] , (error,data)=>{
                                if(error){
                                    console.log("Unable to insert data")
                                }
                                console.log(data.insertedCount)
                            })
                            db.collection('users').find({age:27}).toArray((error,users)=>{
                                 if(error){
                                                return console.log('Error has occurred')
                                            }
                                            console.log(users)
                                          
                                        })
                           db.collection('users').find({age:27}).limit(3).toArray((error,users)=>{
                            if(error){
                            return console.log('Error has occurred')
                        }
                              console.log(users)
              })
                
  
  
    db.collection('users').find().limit(4).toArray((error, users) => {
        if (error) return console.log('Error fetching documents');

        users.forEach(user => {
            db.collection('users').updateOne(
                { _id: user._id },
                { $set: { name: 'fjhuil' } }
            ).then(() => {
                console.log(`Updated user ${user._id} to fjhuil`);
            }).catch(error => {
                console.log('Update error:', error);
            });
        });
    });

    // Update first 4 users with age 27
    db.collection('users').updateMany(
        { age: 27 },
        { $inc: { age: 4 } } 
    ).then((data1) => {
        console.log(`${data1.modifiedCount} `);
    }).catch((error) => {
        console.log( error);
    });


    db.collection('users').updateMany({},{
        $inc: {age: 10}
    }).
    then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})



    db.collection('users').deleteMany({age:41})
    .then((data1)=>{console.log(data1.deletedCount)})
   .catch((error)=> {console.log(error)})



})



