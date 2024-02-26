const OpenAI = require("openai").default;
const express = require("express")
const cors = require('cors');

app = express();
const port = 5500;

const apiKey1 = "";

const openai1 = new OpenAI({ apiKey: apiKey1 })

app.use(express.json());
app.use(express.static('GOOGLEHACK'));
app.use(cors());
app.post('/get-gptResponse', async(req, res) => {
    const { prompt } = req.body;
    const role = "You are a legal assistant designed to simplify legal and immigration documents for the user. Provide a simplified explanation followed by bullet points of next steps, documents, or information needed like Driver's License, SSN, Full Name, etc.";
    const completion = await openai1.chat.completions.create({
        messages: [{ role: "system", content: role },
        { role: "user", content: prompt }
    ],
        model: "gpt-3.5-turbo-0125",
        });
        // res.json({message: 'Static test response'})
        res.json({message: completion.choices[0].message.content})
        console.log("success")
});

app.listen(port, () => {
    console.log("Server running on port", port)
})