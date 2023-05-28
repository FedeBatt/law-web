import express, { Router, json } from "express";
const router = Router();
import cors from "cors";
import { createTransport } from "nodemailer";
import dotenv from 'dotenv'
// server used to send send emails
const app = express();
dotenv.config()

app.use(cors());
app.use(json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));

const contactEmail = createTransport({
    service: "gmail", 
    secure: true,
    auth: {
        user: process.env.VITE_EMAIL_USER,
        pass: process.env.VITE_EMAIL_KEY,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});
router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phoneNumber;
    const message = req.body.message;
    const mail = {
        from: name,
        to: process.env.VITE_EMAIL_USER,
        subject: "Hola! te contacto a través de tu Portfolio web",
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});
