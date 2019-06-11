const express=require('express');
const bodyParser=require('body-parser');
const graphqlHttp=require('express-graphql');

var mongoose=require('mongoose');
var config=require('./database');
const graphQlSchema=require('./graphql/schema/index');
const graphQlResolvers=require('./graphql/resolvers/index')




const app=express();

//mongoose.Promise=global.Promise;
mongoose.connect(config.uri,(err)=>{
    if(err){
        console.log('could not connect to db',err);
    }else{
        console.log('connected to db');
    }
});



app.use(bodyParser.json());



app.use('/graphql',graphqlHttp({
    schema: graphQlSchema,
    rootValue:graphQlResolvers,
    graphiql:true
})
);
app.listen(3000);