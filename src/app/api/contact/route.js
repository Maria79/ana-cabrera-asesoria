import nodemailer from "nodemailer";

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req) {
  try {
    const body = await req.json();

    const name = body.name?.trim();
    const contact = body.contact?.trim(); // email o teléfono
    const topic = body.topic?.trim();
    const message = body.message?.trim();

    // Honeypot (campo invisible). Si viene con algo => bot
    const website = body.website?.trim();
    if (website) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    // Validación básica
    if (!name || !contact || !message) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        {
          status: 400,
        }
      );
    }
    if (name.length < 2 || message.length < 10) {
      return new Response(JSON.stringify({ error: "Datos inválidos" }), {
        status: 400,
      });
    }

    // ENV required
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    if (!gmailUser || !gmailPass) {
      console.error("Missing env: GMAIL_USER or GMAIL_APP_PASSWORD");
      return new Response(
        JSON.stringify({ error: "Email no configurado en el servidor" }),
        { status: 500 }
      );
    }

    // Fallback: si CONTACT_RECEIVER no existe, enviamos al mismo Gmail emisor
    const receiver = process.env.CONTACT_RECEIVER || gmailUser;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    // 1) Email interno (a la asesoría)
    await transporter.sendMail({
      from: `"Web CyB Gestión" <${gmailUser}>`,
      to: receiver,
      replyTo: isEmail(contact) ? contact : undefined,
      subject: `Nueva consulta web – ${name}`,
      html: `
        <h2>Nueva consulta desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Contacto:</strong> ${contact}</p>
        ${topic ? `<p><strong>Servicio:</strong> ${topic}</p>` : ""}
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    // 2) Confirmación automática al cliente (solo si contact es email)
    if (isEmail(contact)) {
      await transporter.sendMail({
        from: `"CyB Gestión" <${gmailUser}>`,
        to: contact,
        subject: "Hemos recibido tu consulta",
        html: `
          <p>Hola ${name},</p>
          <p>Gracias por escribir a <strong>CyB Gestión</strong>.</p>
          <p>Hemos recibido tu consulta y te responderemos lo antes posible.</p>
          <p><strong>Resumen:</strong> ${topic ? topic : "Consulta general"}</p>
          <p style="margin-top:12px"><em>Este mensaje es automático. Si necesitás añadir información, podés responder a este correo.</em></p>
          <p style="margin-top:18px">
            CyB Gestión<br/>
            La Laguna, Tenerife
          </p>
        `,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return new Response(
      JSON.stringify({ error: "Error enviando el mensaje" }),
      {
        status: 500,
      }
    );
  }
}
