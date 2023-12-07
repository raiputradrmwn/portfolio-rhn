"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { renderAsync } from '@react-email/render'
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "raihanrrdarmawan@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

// import { renderAsync } from "@react-email/render";
// import { Resend } from "resend";

// export const sendEmail = async (formData: FormData) => {
//   const result = QuotationFormSchema.safeParse(formData);
//   let data;

//   if (result.success) {
//     const { name, email, phone, website, service, message } = result.data;

//     const html = await renderAsync(
//       QoutationFormScehma({
//         name,
//         email,
//         phone,
//         website,
//         service,
//         message,
//       }) as React.ReactElement,
//     );

//     try {
//       data = await resend.emails.send({
//         from:
//           process.env.EMAIL_FROM_ADDRESS ||
//           "Contact Form <onboarding@resend.dev>",
//         to: process.env.EMAIL_TO_ADDRESS || "",
//         subject: "Message from quotation form",
//         reply_to: email,
//         html: html,
//       });

//   } catch (error: unknown) {
//       console.log(error);
//     }
//   }
// };