import fs from "fs";
import path from "path";

export default function handler(req, res) {
 if(req.method === 'POST'){

    const feedback = {
        id: new Date().toISOString,
        title: req.body.title,
        text: req.body.text
    }

    const filepath = path.join(process.cwd(), 'data', 'feedback.json')
    const fileData = fs.readFileSync(filepath)
    const data = JSON.parse(fileData)
    data.push(feedback)
    fs.writeFileSync(filepath, JSON.stringify(data))
    res.status(201).json({message: "sucess", data: JSON.stringify(data)})
  
 } else {
    res.status(200).send({message: "success"})
 }
}
