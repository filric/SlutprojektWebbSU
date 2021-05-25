const express = require('express');
const app = express();
const port = 3000;
const staticDir = __dirname + "\\static\\";

app.use(express.static(staticDir));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => res.sendFile(staticDir + "Html\\index.html"));

app.get('/form', (req, res) => res.sendFile(staticDir + "Html\\form.html"));

app.post('/form', function (req, res) {
  let output1 = `The value in the input field was enskild and `;
    
  if(req.body.enskild) { // Runs if the box is not undefined
      output1 += 'the box WAS checked';
   } else {
      output1 += 'the box was NOT checked';
   }

   console.log(output1);

  let output2 = `The value in the input field was familjerelation and `;
    
  if(req.body.familjerelation) { // Runs if the box is not undefined
      output2 += 'the box WAS checked';
   } else {
      output2 += 'the box was NOT checked';
   }

   console.log(output2);
   
  let output3 = `The value in the input field was slump and `;
    
  if(req.body.slump) { // Runs if the box is not undefined
      output3 += 'the box WAS checked';
   } else {
      output3 += 'the box was NOT checked';
   }
   console.log(output3);

    console.log(req.body.name);
    console.log(req.body.etnicitet);
    console.log(req.body.religon);
    console.log(req.body.age);
    console.log(req.body.message)
  res.redirect("/")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
