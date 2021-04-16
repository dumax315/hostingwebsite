const express = require('express');

const app = express();
users = [{"likes":0,"comment":"none yet","name":"theo I guess","link":"theo I guess"}]


app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', (req, res) => {
  res.render('dynamic', {
      users:users
   });
});

app.get('/enterData/:likes/:comment/:link', (req, res) => {
	users.push({'likes':parseInt(req.params.likes, 10),'comment':req.params.comment,'link':req.params.link})
	console.log(users)
  res.status(200).send("User Page");
});

app.listen(3000, () => {
  console.log('server started');
});