import { google } from "googleapis";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import Image from "next/image";
import img from "../public/cbb.png"
// import ejs from "ejs";

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
        user: USER_MAIL,
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
      to: user?.email,
      subject: "Account Opening",
      text: "Welcome to our platform!",
      html: `

    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>

    <link href="https://fonts.googleapis.com/css?family=Roboto:400,600" rel="stylesheet" type="text/css">
    

    <style>
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            font-family: 'Roboto', sans-serif !important;
            font-size: 14px;
            margin-bottom: 10px;
            line-height: 24px;
            color: #080808;
            font-weight: 400;
        }

        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
        }

        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }

        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }

        table table table {
            table-layout: auto;
        }

        a {
            text-decoration: none;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }
    </style>

</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f5f6fa;">
    <main style="width: 100%; background-color: #f5f6fa;">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" bg-color="#f5f6fa">
            <tr>
                <td style="padding: 40px 0;">
                    <table style="width:100%;max-width:620px;margin:0 auto;">
                        <tbody>
                            <tr>
                                <td style="text-align: center; padding-bottom:25px">
                                    <a href="#"><Image style="height: 40px" src=${img} alt="logo"></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style="width:100%;max-width:620px;margin:0 auto;background-color:#ffffff;">
                        <tbody>
                            <tr>
                                <td style="padding: 30px 30px 15px 30px;">
                                    <h2 style="font-size: 18px; color: #141414; font-weight: 600; margin: 0;">Verify
                                        Your Account</h2>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 30px 20px">
                                    <p style="margin-bottom: 10px;">Hi User,</p>
                                    <p style="margin-bottom: 10px;">Welcome! <br> You are receiving this email because
                                        you have registered on our site.</p>
                                    <p style="margin-bottom: 10px;">Click the button below to active your code book
                                        account.</p>
                                    <p style="margin-bottom: 25px;">Here is your sign up token: ${user.verifyToken}</p>
                                    <a href="${url}"
                                        style="background-color:#141414;border-radius:4px;color:#ffffff;display:inline-block;font-size:13px;font-weight:600;line-height:44px;text-align:center;text-decoration:none;text-transform: uppercase; padding: 0 30px">Verify
                                        Email</a>
                                </td>
                            </tr>
                             <tr>
                                <td style="padding: 20px 30px 40px">
                                    <p>If you did not make this request, please contact us or ignore this message.</p>
                                    <p style="margin: 0; font-size: 13px; line-height: 22px; color:#adadaf;">This is an automatically generated
                                        email please do not reply to this email. If you face any issues, please contact us at
                                        codelab@gmail.com</p>
                                </td>
                            </tr>
                           
                        </tbody> 
                    </table>
                    
                </td>
            </tr>
        </table>
    </main>
</body>
        `
    };

    transport.sendMail(mailOptions).then(() => {
      console.log("email sent successfully");
    });
  } catch (error) {
    console.log("error with Account Opening eMail");
  }
};

export const resetPasswordEmail = async (user: any) => {
  try {
    const accessToken: any = (await oAuth.getAccessToken()).token;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: USER_MAIL,
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
      to: user?.email,
      subject: "Reset Account Password",
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
