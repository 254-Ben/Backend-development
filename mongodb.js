const {MongoClient,ObjectID} = require('mongodb');


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';





MongoClient.connect(connectionURL, { useNewUrlParser:true},
    (error,client)=> {
        if (error){
            return console.log('Unable to connect to database');
        }
        const db = client.db(databaseName);
        db.collection('users').findOne({_id: new ObjectID("5e4f9d558e202cla9c5309a2")},
        (error,user)=>{

            if(error){
                return console.log('Unable to fetch user')
            }
            console.log(user);
        })


        
        // db.collection('users').insertOne({

        //     name : 'Ben',
        //     city : 'Nairobi'
        // });
        

        db.collection('tasks').insertMany([{
            description: 'Exercise',
            completed: true
        },
        {
            description: 'Watch pro sports',
            completed:false
        }
    ],(error,result) => {
        if(error){
            return console.log('Unable to insert tasks')
        }
        console.log(result);

    })

    });
