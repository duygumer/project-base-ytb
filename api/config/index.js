module.exports = {
  PORT: process.env.PORT || "3000",
  LOG_level: process.env.LOG_level || "debug",
  CONNECTION_STRING:
    process.env.CONNECTION_STRING || "mongodb://localhost:27017/project_base",
};
