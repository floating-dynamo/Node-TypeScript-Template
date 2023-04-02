import app from "./app"
import "./db/mongoose"

const PORT = 8080 || process.env.PORT;

app.listen(PORT, (): void=>{
   console.log(`Server started at PORT: ${PORT}`)
})
