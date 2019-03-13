
### back-end
Routes:
- GET `/me`: authenticate and retrieve user id
- GET `/users`: return all users
- GET `/channels`: return all channels
- GET `/conversations/:channelId`: return a conversation by a given channelId
- POST `/conversations/:channelId` : post a new message to a conversation. Request body: `{ userId, text }`
