const express = require("express");
const app = express();
const port = 3000;

const {readFile} = require("fs")

app.get("/", (req, res) => {
  //   res.send('Hello World!')
  readFile('./home.html','utf-8',(error,html)=>{
      if(error){
          res.send("Service currently unavailable")
      }
      res.send(html)
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
