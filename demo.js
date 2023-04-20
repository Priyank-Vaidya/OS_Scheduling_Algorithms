const { Configuration, OpenAIApi } = require("openai");

require('dotenv').config()

const configuration =  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

 let topic = "What is capital of India"

const generateText = async(topic)=>{
    const openai = new OpenAIApi(configuration)
    const completion = openai.createCompletion({
        model: "text-davinci-003",
        prompt: topic,
        max_tokens: 1024,
        n: 1,
        stop: null,
        temperature: 0.7
    }, (err, res)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(completion.data.choices[0].text);
        }
    }) 
}

generateText(topic)