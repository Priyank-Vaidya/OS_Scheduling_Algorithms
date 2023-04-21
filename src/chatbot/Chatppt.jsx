import React, { useState } from 'react'
import axios from 'axios';
import TypingAnimation from '../Components/TypingAnimation';
import { Navbar } from '../Components/Navbar';
export const Chatppt = () => {

  const apiKey = "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";

  const [inputValue,setInputValue] = useState('');
  const [chatLog,setChatLog] = useState([]);
  const [isLoading,setIsLoading] = useState(false);


  const handleSubmit = (event)=>{
    console.log(`Bearer ${apiKey}`);
    event.preventDefault();
    setChatLog((prevChatLog) => [...prevChatLog,{type:'user',message:inputValue}])
    console.log(inputValue)
    sendMessage(inputValue);
    setInputValue('');
    console.log(`Bearer ${apiKey}`);
     
  }

  const sendMessage = (message) => {
    const url = 'https://api.openai.com/v1/chat/completions';
   
    const headers={
      'Content-Type':'application/json',
      'Authorization':`Bearer ${apiKey}`
    };
  
    const data = {
      model:"gpt-3.5-turbo",
      messages:[{role:"user",content:message}]
    };

    setIsLoading(true);

    axios.post(url,data,{headers:headers}).then((response)=>{
      console.log(response);
      setChatLog((prevChatLog)=> [...prevChatLog,{type:'bot',message: response.data.choices[0].message.content}]);
      setIsLoading(false);
    }).catch((error)=>{
      setIsLoading(false);
      console.log(error);
    });
  }
  return (
     <div className='bg-[#19191c] font-Gloock h-full'>
      <Navbar/>
     <h1 className='text-white text-[50px] flex justify-center hover:text-red-500 duration-300 p-8'>ChatBOT</h1>
     <div className='m-10 border-2 border-white rounded-3xl '>
     {
        chatLog.map((message, index) => (
          <div key={index} className={`flex ${
            message.type === 'user' ? 'justify-end mr-10 mt-4 mb-4' : 'justify-start ml-10 w-1/2 mt-4 mb-4'
            }`}>
            <div className={`${
              message.type === 'user' ? 'bg-red-600 bg-opacity-80 mb-4' : 'bg-gray-800 bg-opacity-80 w-auto mb-4'
            } rounded-lg p-4 text-white max-w-full`}>
            {message.message}
            </div>
            </div>
        ))
            }
            {
              isLoading &&
              <div key={chatLog.length} className="flex justify-start">
                  <div className="bg-gray-800 rounded-lg p-4 ml-10 mb-10 text-white max-w-sm">
                    <TypingAnimation />
                  </div>
              </div>
            }
      </div>
     <form onSubmit={handleSubmit} className='ml-20 flex-grow'>
      <input type="text" className="flex-grow px-4 w-3/4 bg-gray-700 rounded-xl m-6 text-white py-2 bg-transparent  focus:outline-none" placeholder='Ask any question' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/> 
      <button type="submit" className="bg-red-500  rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300">Send</button>
     </form>
     
     
     </div>
  )
}
