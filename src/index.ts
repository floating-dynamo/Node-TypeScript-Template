import express, {NextFunction, Request, Response} from "express";

const app = express();

const PORT = 8080 || process.env.PORT;

app.use((req: Request, res: Response, next: NextFunction)=>{
    console.log(req.method, req.path)

    next();
})

// Parsing Incomming JSON
app.use(express.json())

app.get("/", (req: Request, res: Response): void=>{
    res.json({message: "Hello World"})
})

app.listen(PORT, (): void=>{
   console.log(`Server started at PORT: ${PORT}`)
})
