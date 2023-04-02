import express, {NextFunction, Request, Response} from "express";
import noteRouter from "./routes/note"

const app = express();

app.use((req: Request, res: Response, next: NextFunction)=>{
    console.log(req.method, req.path)

    next();
})

// Parsing Incomming JSON
app.use(express.json())

app.get("/", (req: Request, res: Response): void=>{
    res.json({message: "Hello World"})
})

app.use(noteRouter)

export default app;