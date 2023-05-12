const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
  // return Recipe.deleteMany();
  })
  Recipe.find({})
  .then(users => {
  })
  .catch(error => {
  })

  .then(() => {
    Recipe.create({
      title: "Fried Rice",
      level: "Easy Peasy",
      ingredients: ["rice"],
      cuisine: "idk",
      dishType: "desert",
      image: "https://images.media-allrecipes.com/images/75131.jpg",
      duration: 20,
      creator: "me"
    }).then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      console.log(err)
    })

  Recipe.updateOne(
    {title: "Fried Rice"},
    {dishType:"other"}
  )
  .then((res)=>{
    console.log(res);
  })
  })

  Recipe.deleteOne({title: "Carrot Cake"})
.then((success)=>{
  console.log(success);
})
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

