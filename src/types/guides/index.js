const path = require("path");
const mergeGraphqlSchemas = require("merge-graphql-schemas");
const fileLoader = mergeGraphqlSchemas.fileLoader;
const mergeTypes = mergeGraphqlSchemas.mergeTypes;

//const typesArray = fileLoader(path.join(__dirname, "types/**/*.graphql"));

const typesArray = fileLoader(path.join(__dirname, "."));
console.log("typesArray", typesArray);
//console.log("root:", __dirname);

module.exports = mergeTypes(typesArray, { all: true });
