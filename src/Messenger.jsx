import { useState, useEffect } from 'react';

import {
  Header,
  Group,
  SimpleCell,
  Avatar,
} from '@vkontakte/vkui';
import SimpleApi from "../utils/Api"


export default function Messenger({user, openDialog}) {


  const [conversations, setConversations] = useState()

  function findById(someid, array) {
   return array.response.profiles.find((el)=> el.id == someid)
  }

  useEffect(() => {
  let vk = new SimpleApi(user[0])

  vk.getConversations((result)=>{setConversations(result)})
  }, []);
  console.log(user);
  return (
    <Group header={<Header mode="secondary">{user[1]}</Header>}>
    {
      conversations?.error
      ? 
      <SimpleCell>Ошибка, {conversations.error.error_msg}</SimpleCell>
      :
      conversations?.response.items.map((el, i)=>{
        return <SimpleCell key={i} 

        onClick={()=>{openDialog(el.conversation.peer.id)}}
        
        before={<Avatar src={el.conversation.peer.type == "user" ?
         findById(el.conversation.peer.id, conversations).photo_50 : ""}/>} 

         subtitle={el.last_message.out == 1 ? "Вы: " + el.last_message.text : el.last_message.text}>
          
          
          {el.conversation.peer.type == "user" ?
          findById(el.conversation.peer.id, conversations).first_name + " " +
           findById(el.conversation.peer.id, conversations).last_name:"Паблик/Беседа"}

           </SimpleCell>
      })

    }
    </Group>
  )
}
