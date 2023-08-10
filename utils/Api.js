
class SimpleApi {
    constructor(token){
        this.token = token
    }

    getConversations(callBack){
        GgetConversations(this.token, (reuslt)=>{callBack(reuslt)})
    }

    getHistory(id,callBack){
        GgetConversationsById(id, this.token, (result)=>{callBack(result)})
    }
}

export default SimpleApi