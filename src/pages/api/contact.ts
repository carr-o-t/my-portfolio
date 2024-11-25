import { Main } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  name: string;
};

const username = process.env.EMAIL_USERNAME;
const password = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: username,
    pass: password,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const { full_name, email, message }: Main.ContactForm = JSON.parse(
        req.body
      );
      await transporter.sendMail({
        from: username,
        to: process.env.PERSONAL_EMAIL,
        replyTo: email,
        subject: `Portfolio Contact: Message from ${full_name}`,
        html: `<p>${message}</p>`,
      });

      const successRes = {
        message: "Success: Email was sent",
      } as any;
      return res.json({ successRes } as any);
    } catch (err) {
      const errorRes = { error: "Failed to send email" };
      res.status(500).json({ errorRes } as any);
    }
  }
  res.status(400);
}
