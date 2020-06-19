const pizzaData = require("../mocked/pizza")
const pizza = require("../mocked/pizza")

module.exports = (app)=>{
    app.get('/pizzas',(req,res) => res.send(pizzaData))
    app.post('/pizza/make', (req,res) =>{
        const {flavor} = req.body
        if(flavor === pizza.sugestao.sabor)
            res.send({receivedPoints:true,points:pizzaData.sugestao.pontos})
        else res.send({receivedPoints:false})
    })
}