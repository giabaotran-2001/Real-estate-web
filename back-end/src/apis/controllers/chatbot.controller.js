const httpStatus = require('http-status')
const { realEstateService } = require('../services')
const catchAsync = require('../../utils/catch-async')
const env = require('../../configs/env')


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const textGeneration = async (prompt) => {
  try {
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: `Human: ${prompt}\nAI: `,
      temperature: 0.9,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: ["Human:", "AI:"],
    });
    return {
      status: 1,
      response: `${response.data.choices[0].text}`,
    };
  } catch (error) {
    console.log(`OpenAi error`, error);
    return {
      status: 0,
      response: "",
    };
  }
};

const getResponseInputUnknow = catchAsync(async (req, res) => {
  let action = req.body.queryResult.action;
  let queryText = req.body.queryResult.queryText;
  console.log(`dialogflow action`, action);

  if (action == "input.unknown") {
    let result = await textGeneration(queryText);
    console.log(`OpenAI result`, result);

    if (result.status == 1) {
      res.send({
        fulfillmentText: result.response,
      });
    } else {
      res.send({
        fulfillmentText: `Sorry, I'm not able to help with that test.`,
      });
    }
  } else {
    res.send({
      fulfillmentText: `No handler for the action ${action}.`,
    });
  }
})



module.exports = {
  getResponseInputUnknow
}
