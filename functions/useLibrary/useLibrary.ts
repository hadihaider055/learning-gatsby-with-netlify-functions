const randomName = require("random-name");

const handler = async () => {
  try {
    const name = randomName.first();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${name}` }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
