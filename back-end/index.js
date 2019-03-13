const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());

const generateId = () => Math.floor(Math.random() * 1000000).toString()

const channels = [
  { id: 0, name: 'tech' },
  { id: 1, name: 'articles' },
  { id: 2, name: 'random' }
]

const botUsers = [{ id: 0, name: 'bot zed' }, { id: 1, name: 'bot edward' }]
const users = []
const conversations = channels.map((channel) => ({
  id: generateId(),
  channelId: channel.id,
  messages: []
}))

//cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
})
app.get('/me', (req, res) => {
  const newUser = { id: generateId(), name: "you"}
  users.push(newUser)
  res.json(newUser)
})

app.get('/channels', (req, res) => {
  res.json(channels)
})

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/conversations/:channelId', (req, res) => {
  const { channelId } = req.params
  res.json(conversations.filter((c) => c.channelId == channelId))
})

app.post('/conversations/:channelId', (req, res) => {
  const { channelId } = req.params
  const { userId, text } = req.body

  sendMessage({ channelId, userId, text })

  res.send("OK")
})

const sendMessage = ({ channelId, userId, text }) => {
  const conversation = conversations.find((c) => c.channelId == channelId)
  conversation.messages.push({ userId, text })
}

app.listen(3000, () => { console.log('back-end running at :3000') });

const faker = require('faker')
setInterval(() => {
  const userId = parseInt(Math.random() * 2) + 1
  const channelId = parseInt(Math.random() * 3)
  const text = faker.random.words()

  sendMessage({ channelId, userId, text })
  console.info("created new random message: " + text)
}, 5000)
