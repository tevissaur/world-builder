const express = require('express')
const { ApolloServer } = require('apollo-server-express');
// const { GraphQLUpload, graphqlUploadExpress } = require('graphql-upload')
const path = require('path')
const authMiddleware = require('./utils/auth')
const { typeDefs, resolvers } = require('./schemas')


const db = require('./config/connection')
const routes = require('./controllers')

const PORT = process.env.PORT || 3001
const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  authMiddleware
});



app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// app.use(function (req, res, next) {
//   res.setHeader('Cache-control', 'public, max-age=36000000')
// })

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});


app.use('/', routes)

db.on('error', error => console.log('DB Error', error))


db.once('open', async () => {
  await server.start()
  server.applyMiddleware({ app })

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });

})