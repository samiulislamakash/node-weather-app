const path = require('path')
const express  = require('express')
const hbs = require('hbs')
const weatherInfo = require('./utils/weather')

// console.log(__dirname)
// console.log(path.join(__dirname , '../public'))

const app = express()

const port = process.env.port || 3000

// asset or view path
const publicDerectoryPath = path.join(__dirname , '../public')
const viewPath = path.join(__dirname, '../templates/view')
const partialsPath = path.join(__dirname,'../templates/partials')

// setup handelbar
app.set('view engine','hbs')
app.set('views' , viewPath)
hbs.registerPartials(partialsPath)

// genarel static view setup
app.use(express.static(publicDerectoryPath))

// app.get('',(req , res)=>{
//     res.render('index',{
//         title:"Here is sime home page title",
//         creator: 'Samiul Islam'
//     })
// })

app.get('/help', (req ,res)=>{
    // res.send("Help Page")
    res.render('help',{
        help:'Help'
    })
})

app.get('/about',(req , res)=>{
    res.render('about',{
        about:"About Me",
        para:'Here is the simple para for about me'
    })
})

app.get('/',(req, res)=>{
    res.render('index',{
        weather:'Weather'
    })
})

app.get('/product',(req , res)=>{

    if(!req.query.search){
        return res.send({
            error:"you must be enter serche"
        })
    }
    res.send({
        product:[]
    })
})

app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send({
            error:'No Address ?'
        })

    }

    weatherInfo(req.query.address,(error, data)=>{
       if(error){
           return res.send({error})
       }else{
           return res.send({data})
       }

    })
    
})

app.get('/eco',(req ,res)=>{
    res.send({
        date:'here is your date'
    })
})

app.get('*',(req , res)=>{
    res.render('404')
})

app.listen(port, ()=>{
    console.log('server is up on port '+port)
})
