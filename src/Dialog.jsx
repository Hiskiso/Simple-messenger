import { useState, useEffect } from 'react';
import {
    Header,
    Group,
    SimpleCell
  } from '@vkontakte/vkui';
  
import SimpleApi from "../utils/Api"
import Message from './Message';

export default function Dialog({id, user}){

    const [messages, setMessages] = useState({})


useEffect(() => {
  let vk = new SimpleApi(user[0])
console.log(id, user);
  vk.getHistory(id,(result)=>{setMessages(result)})
  }, []);

  function findById(someid, array) {
    return array.response.profiles.find((el)=> el.id == someid)
   }

return(
    <Group>
      {messages?.error
      ? 
      <SimpleCell>Ошибка, {messages.error.error_msg}</SimpleCell>
      :
        messages?.response?.items.map((el, i)=>
            
            <Message key={i} profile={el.out == 0 ? findById(id, messages) : {out: 1}} MessageData={el} ></Message>                       
            
            
            )}


    </Group>
)

}