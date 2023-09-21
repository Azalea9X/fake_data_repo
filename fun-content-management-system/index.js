import express from "express";
import fetch from 'node-fetch';
 
const app = express();

const PORT = 3000;
 
app.use("/", express.static("public/")); 
//Neato.rs Now, what if you were going to use a specific route? Here's how: the first article is the route

app.use("/img", express.static("public/img")); 
app.set('view engine', 'ejs');
//https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
app.use(express.urlencoded({ extended: true }));
//Using express.json and express.urlencoded. 

import fs from "fs";
import data1 from "./../mock.json" assert { type: "json" };
//https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file



const data = [];
data.push(data1); 
const limited = []; 
 

async function RetrieveData()  {
  const filePath = "/home/jacob/Documents/tutorials/Tutorials/Monday_CRM_Anita_Kubo/fake_data_repo/mock.json";
  const fileData = await fs.promises.readFile(filePath, "utf-8");
  const parsedJson = JSON.parse(fileData);

  for (let i = 0; i < 20; i++) {
    limited.push(parsedJson[i]);
    data.push(parsedJson[i]);
  }


  console.log(data);
};

async function RetrieveData2() {
for (let i = 0; i < 50; i++)
console.log(data); 

}
//Get functions

app.get('/', function(req, res) {
  res.render('home');
});

  //POST- express.json and express.urlencoded. 
  app.post('/:item', (req, res) => {
    console.log(req.body);
    res.send(`POST request received ${JSON.stringify(req.body)}`
    //https://stackoverflow.com/questions/71615321/postman-returns-object-object-and-value-is-not-passing

    )})


//Get with routing parameters
app
.route("/class").get((req, res) => {
 
  res.send("Retrieved classes info. To search for a specific student type a / on the URL bar followed by the student ID. ")}).post((req, res) => {
  res.send("Created class info"); 
}).put((req, res) => {
  res.send("Updated class info");

})
 
app.get("/class/:id", (req, res) => {
  const studentID = Number(req.params.id);
  const student = data.find(student => student.id === studentID);
  res.json(student);
  
  })

  app.get("/next", (req, res, next) => {
    console.log("This is the first middleware");
    next();
  }, (req, res) => {
    console.log("This is the second middleware");
    res.send("Hello World!");
  });
  
  //Testing with redirect
  
  app.get("/redirect", (req, res) => {
    res.redirect("http://www.linkedin.com");
  }); 

//Test with next


  // Convert the array to a string before sending it to the res.write() function.
  app.delete("/delete/:id", (req, res) => {
//Simple delete request
  });

//The built in error middleware for the Linkedin Learning tutorial didn't seem to work for me. I will need to review this later. 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
  // Use a try-catch block to handle errors.
});

 
 