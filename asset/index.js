const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  if (req.url == "/index" || req.url == "/") {
    let fileRead = fs.readFileSync("./asset/index.html", "utf-8")
    res.end(fileRead)
  } else if (req.url == "/contact") {
    let fileRead = fs.readFileSync("./asset/contact.html", "utf-8")
    res.end(fileRead)
  } else if (req.url == "/product") {
    let fileRead = fs.readFileSync("./asset/product.html", "utf-8")
    res.end(fileRead)
  } else {
    let fileRead = fs.readFileSync("./asset/error.html", "utf-8")
    res.end(fileRead)
  }
})
server.listen(5000)
console.log("Server Running....")