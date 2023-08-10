import "./Message.css"
import Attachment from "./Attachment"
import { SimpleCell, Avatar } from "@vkontakte/vkui"
export default function Message({MessageData, profile}){

    return(
        <SimpleCell  before={profile.out == 1 ?  <Avatar/>  : <Avatar src={profile.photo_50}/>} subtitle={ 
        <div>{MessageData.text}{
        MessageData.attachments.length > 0? <Attachment attachments={MessageData.attachments}></Attachment>
        : "" }{MessageData?.reply_message? 
        <div style={{marginLeft: "30px"}}>{MessageData?.reply_message.text}{MessageData?.reply_message.attachments.length > 0? <Attachment attachments={MessageData?.reply_message.attachments}></Attachment>
        : ""} </div> : ""
        }</div>
                 } className="Message">{
                    profile.out == 1 ? "Вы" : profile.first_name + " " + profile.last_name
                 }</SimpleCell>
    )
}