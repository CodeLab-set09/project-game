import { google } from "googleapis";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import ejs from "ejs";

import {
  GOOGLE_CLIENT,
  GOOGLE_REFRESH_TOKEN,
  GOOGLE_SECRET_KEY,
  GOOGLE_URL,
  JSON_SECRET,
  LIVE_URL,
  USER_MAIL,
} from "./constant";

// CREATING THE
const oAuth = new google.auth.OAuth2(
  GOOGLE_CLIENT,
  GOOGLE_SECRET_KEY,
  GOOGLE_URL
);

oAuth.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

export const AccountOpeningEmail = async (user: any) => {
  try {
    const accessToken: any = (await oAuth.getAccessToken()).token;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ghettodeveloper@gmail.com",
        type: "OAuth2",
        clientId: GOOGLE_CLIENT,
        clientSecret: GOOGLE_SECRET_KEY,
        refreshToken: GOOGLE_REFRESH_TOKEN,
        accessToken,
      },
    });

    const token = jwt.sign({ id: user?._id }, JSON_SECRET, { expiresIn: "2d" });

    const url = `${LIVE_URL}/verify-account/${token}`;

    const mailOptions = {
      from: "Gamer🔥🎮🔥 <ghettodeveloper@gmail.com>",
      to: "ghettodeveloper@gmail.com",
      subject: "Account Opening",
      text: "Welcome to our platform!",
      html: `
        <div>
        <h1>Welcome to our platform!</h1>
        <p>You've successfully created an account.</p>
        <p>Here is your sign up token: ${user.verifyToken}</p>
        <p>Please click the link below to sign in:</p>
        <a href="${url}">Sign In</a>
        </div>`,
    };

    transport.sendMail(mailOptions).then(() => {
      console.log("email sent successfully");
    });
  } catch (error) {
    console.log("error with Account Opening eMail");
  }
};
