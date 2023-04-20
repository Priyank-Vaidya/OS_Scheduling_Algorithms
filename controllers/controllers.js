const mongoose = require('mongoose');
// const bankerScahema = require('../models/Bankers_models');
const scancscanSchema = require('../models/scan-cscan');
const mruSchema = require('../models/mru');
// const mru = require('../models/mru');
const BankersModel = require('../models/Bankers_models')
require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const { response } = require('express');

const configuration =  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

// console.log(openai.apiKey)

const generateText = async(topic)=>{
    const openai = new OpenAIApi(configuration)
    const completion = openai.createCompletion({
        model: "davinci",
        prompt: topic,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.7
    }, (err, res)=>{
        if(err){
            console.log(err)
            return "Error"
        }
        else{
            return completion.data.choices[0].text;
        }
    }) 
}

const returnText = (req, res)=>{
    const input = req.body.input;
    const response =  generateText(input)
    .then(
        res.status(200).send(response)
    )
    .catch(
    res.status(401).send("Error")
    )
}


const postscancscan = async(req, res)=>{
    const {head, upperBound, Type, Direction, requestedString} = req.body;
    try{
    const data = await scancscanSchema.create(req.body);
    res.send(data);
    }
    catch(err){
        res.status(401).send({err: err.message});
    }
}

const postmru = async(req, res)=>{
    const {referenceString} = req.body;
    try{
    const data = await mruSchema.create(req.body);
    res.send(data);
    res.status(200).send("Data Successfully posted");
    }
    catch(err){
        res.status(401).send({err: err.message});
    }
}

const postBanker = async(req, res)=>{
    const {availableResources, processSequence} = req.body;
        const data = await BankersModel.create(req.body)
        .then(
            res.status(200).send(data)
        )
        .catch(err =>{
            res.send({err: err.message})
        })
        }
module.exports = {postmru, postscancscan, postBanker, returnText};