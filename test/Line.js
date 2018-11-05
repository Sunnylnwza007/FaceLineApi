const express = require('express')
const line = require('@line/bot-sdk')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3000
//user from line 
const user = 'Ue457972e06e20a83272bab7c032ac6ba'

const config ={
    channelAccessToken: "/rA0SgK2fdkOQLAFoRsI4IhKLMt5ZztNQ6DMTDYrtpbbmmGV0KRjEuDgdkxeVjKgNSKDSin4pJqFfzrN2BsWo6i0XjqJz7A7uh4na7+L5xXUUsuoO3RAC4rrmIEOWWfgeQjxzSpOGPZU2stcojfkygdB04t89/1O/w1cDnyilFU=",
    channelSecret: "10eeed79b87dcbb12e3b86531a32d7e6"
}

const client = new line.Client(config)
app.use(cors())
app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.send("Hello world")
})


/*app.post('/', line.middleware(config),(req,res) => {
    Promise.all(req.body.events.map(handleEvent)).then((result) => res.json(result))
})*/


app.post('/user',(req,res) => {
    console.log(req.body)
    // set object
    const message = {
        type: 'text',
        text: req.body.name
      };
      const message1 = {
        type: 'text',
        text: req.body.email
      };
      const message2 = {
        type: 'image',
        originalContentUrl: req.body.picture,
        previewImageUrl: req.body.picture
      };
      // send message
      client.pushMessage(user, message)
        .then(() => {
          
        })
        
        client.pushMessage(user, message1)
        .then(() => {
          
        })
        
        client.pushMessage(user, message2)
        .then(() => {
          
        })
        
})





/*function handleEvent(event){
    if (event.type !== 'message' || event.message.type !== 'text'){
        return Promise.resolve(null)
    }

    if (event.type == 'message' && event.message.text == 's'){
        return client.replyMessage(event.replyToken,{
            type: 'sticker',
            packageId: "2",
            stickerId: "148"
        })
    }

    if (event.type == 'message' && event.message.text == 'lnwza'){
        return client.replyMessage(event.replyToken,{
            type: 'text',
            text: 'อย่ามาแจ๋วไอสัสเดวมึงโดน'
        })
    }


    return client.replyMessage(event.replyToken,{
        type: 'text',
        text: event.message.text
    })
}*/


app.listen( port ,() => console.log(`App running ${port}`))