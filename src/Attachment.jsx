export default function Attachment({attachments}){



    return(
        <div>{
            attachments.map((el, i)=>
                el.type == "video"?
                <div key={i}>
                    
            <a href={el.video.player}>{el.video.player}</a>
                    
                </div> : 
                 el.type == "photo"?
                 <div key={i}>
                    <img src={el.photo.sizes.slice(-1)[0].url} alt="" /> 
                 </div>:
                 el.type == "audio"?
                <div>AUDIO: <input value={el.audio.artist + " " + el.audio.title}></input></div> :
                el.type == "wall"?
                <div key={i}>
                    {"https://vk.com/wall" + el.wall.owner_id + "_" + el.wall.id}
                </div> : 
                el.type == "sticker"?
                <div key={i}>
                    <img src={el.sticker.images.slice(-1)[0].url} alt="" /> 
                 </div>:
                <div key={i}>
                    {el.type}
                    ____________
                    {JSON.stringify(el)}
                </div>
            )
            
            }</div>
)
}