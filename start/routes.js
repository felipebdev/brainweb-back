const pizzaData = require("../mocked/pizza")

module.exports = (app)=>{
    app.get('/pizzas',(req,res) => res.send(pizzaData))
    app.post('/pizza/make', (req,res) =>{
        const {flavor} = req.body
        if(flavor === pizzaData.sugestao.sabor)
            res.send({receivedPoints:true,points:pizzaData.sugestao.pontos,pizzaMounted:req.body})
        else res.send({receivedPoints:false,pizzaMounted:req.body})
    })
}