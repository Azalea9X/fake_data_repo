import express from "express";
import fetch from "node-fetch";
import fs from "fs";
const app = express();

const PORT = 3000;
const data = [];
let limited = [];

const Retrieve = async () => {
  const filePath = "/home/jacob/Documents/tutorials/Tutorials/Monday_CRM_Anita_Kubo/fake_data_repo/mock.json";
  const fileData = await fs.promises.readFile(filePath, "utf-8");
  const parsedJson = JSON.parse(fileData);

  for (let i = 0; i < 100; i++) {
    data.push(parsedJson[i]);
  }

  console.log(data);
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  RetrieveData();

  // Use a try-catch block to handle errors.
});

app.get("/", (req, res) => {
  const pretty = JSON.stringify(data, null, 2);
  const parsed = JSON.parse(pretty);
  let data2 = [];

  for (let i = 0; i < 10; i++) {
    data2.push(parsed[i]);
  }

  // Convert the array to a string before sending it to the res.write() function.
  const data2String = JSON.stringify(data2);
  res.write(`<h2>Hello World!</h2>`)
res.json(data2String);
 
});
