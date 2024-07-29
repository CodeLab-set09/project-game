import { google } from "googleapis";
import nodemailer from "nodemailer";
import {
  GOOGLE_CLIENT,
  GOOGLE_REFRESH_TOKEN,
  GOOGLE_SECRET_KEY,
  GOOGLE_URL,
  LIVE_URL,
  USER_MAIL,
} from "./constant";

const oAuth = new google.auth.OAuth2(
  GOOGLE_CLIENT,
  GOOGLE_SECRET_KEY,
  GOOGLE_URL
);

oAuth.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

export const AccountOpening = async (user: any) => {
  try {
    const accessToken: any = (await oAuth.getAccessToken()).token;

    const transport = nodemailer.createTransport({
      service: "google",
      auth: {
        user: USER_MAIL,
        type: "OAuth2",
        clientId: GOOGLE_CLIENT,
        clientSecret: GOOGLE_SECRET_KEY,
        refreshToken: GOOGLE_REFRESH_TOKEN,
        accessToken,
      },
    });

    const url = `${LIVE_URL}/sign-in/${user?._id}`;

    const mailOptions = {
      from: USER_MAIL,
      to: USER_MAIL,
      subject: "Account Opening",
      text: "Welcome to our platform!",
      html: `
        <div>
        <h1>Welcome to our platform!</h1>
        <p>You've successfully created an account.</p>
        <p>Please click the link below to sign in:</p>
        <a href="${url}">Sign In</a>
        </div>`,
    };

    transport.sendMail(mailOptions);
  } catch (error) {
    console.log("error with Account Opening eMail");
  }
};
