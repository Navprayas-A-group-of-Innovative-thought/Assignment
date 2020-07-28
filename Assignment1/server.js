const express = require('express')
const app = express()

const jsonObj = {
    name: "Navprayas",
    dob: "2000"
}

app.get('/userDetails',(req,res) => {
    res.json(jsonObj,null,2)
})

app.listen('5000', () => {
    console.log('Server running!')
})