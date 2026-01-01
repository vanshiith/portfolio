// This file is needed for Vercel serverless deployment
// It re-exports the built Express app
const handler = require('../dist/index.cjs');
module.exports = handler;
