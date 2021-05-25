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
    console.log(req.body.slump);
    if(slump) { // Runs if the box is not undefined
      output += 'the box WAS checked';
   } else {
      output += 'the box was NOT checked';
   }
    console.log(req.body.name);
    console.log(req.body.etnicitet);
    console.log(req.body.religon);
    console.log(req.body.age);
    console.log(req.body.message)
  res.redirect("/")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
