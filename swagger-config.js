const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info:{
        title: "Temples API",
        description: "Information about temples", 

    },
    host: "localhost:8080",
    schemes: ["http"],
}
const outputFile = "./swagger-config.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
