var express = require('express');
var app = express();

const channels = [
  { id: 0, name: 'tech' },
  { id: 1, name: 'articles' },
  { id: 2, name: 'random' }
]

const users = [{ id: 0, name: 'bot' }]

const conversations = [{
  id: 0,
  channelId: 2,
  messages: [
    { userId: 0, text: 'Hello, welcome!' }
  ]
}]

//cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
})
app.get('/me', (req, res) => {
  res.json({
    id: Math.floor(Math.random() * 1000000).toString(),
    name: "you"
  })
})

app.get('/channels', (req, res) => {
  res.json(channels)
})

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/conversations/:channelId', (req, res) => {
  const { channelId } = req.params
  res.json(conversations.filter(x => x.channelId == channelId))
})

app.listen(3000, () => { console.log('back-end running at :3000') });
