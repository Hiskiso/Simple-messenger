import Attachment from "./Attachment";
import { SimpleCell, Avatar } from "@vkontakte/vkui";
import MessageElement from "./MessageElement";
export default function Message({ MessageData, profile }) {
  return (
    <MessageElement
    date={MessageData.date}
      before={profile.out == 1 ? <Avatar /> : <Avatar src={profile.photo_50} />}
      title={
        profile.out == 1 ? "Вы" : profile.first_name + " " + profile.last_name
      }
      className="Message"
    >
      {
        <div>
          {MessageData.text}
          {MessageData.attachments.length > 0 ? (
            <Attachment attachments={MessageData.attachments}></Attachment>
          ) : (
            ""
          )}
          {MessageData?.reply_message ? (
            <div style={{ marginLeft: "30px" }}>
              {MessageData?.reply_message.text}
              {MessageData?.reply_message.attachments.length > 0 ? (
                <Attachment
                  attachments={MessageData?.reply_message.attachments}
                ></Attachment>
              ) : (
                ""
              )}{" "}
            </div>
          ) : (
            ""
          )}
        </div>
      }
    </MessageElement>
  );
}
