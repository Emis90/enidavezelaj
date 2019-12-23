var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'ciao!' };

graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});
