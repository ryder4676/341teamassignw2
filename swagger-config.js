const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/index.js"];

const doc = {
    info:{
        title: "Temples API",
        description: "Information about temples",

    },
    host: "localhost:8080",
    schemes: ["http"],
}
swaggerAutogen(outputFile, endpointsFiles, doc);
