//Read environment variables (process.env)
const user = process.env.USERNAME || "unknown";
const mode = process.env.MODE || "development"
console.log("current user: ", user);
console.log("Mode: ",mode);