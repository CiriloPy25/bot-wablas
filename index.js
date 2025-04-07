const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const WABLAS_TOKEN = process.env.WABLAS_TOKEN;
const WABLAS_URL = 'https://bdg.wablas.com/api/send-message';

const sendMessage = async (phone, message) => {
  try {
    const res = await axios.post(WABLAS_URL, {
      phone,
      message
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${WABLAS_TOKEN}`
      }
    });
    console.log('✅ Enviado:', res.data);
  } catch (err) {
    console.error('❌ Error al enviar:', err.response?.data || err.message);
  }
};

const mensajeBienvenida = `👋 ¡Bienvenido/a!

*¿Cómo podemos ayudarte hoy?*

➯ Free Fire
➯ Netflix Premium / VIP
➯ Disney+ Premium
➯ Max
➯ Prime Video
➯ Paramount
➯ Crunchyroll
➯ Spotify Premium
➯ YouTube Premium
➯ FlujoTv
➯ FénixTv
➯ Ib Player Pro
➯ Iptv Smarters
➯ Tigo Sport App
➯ Apple Tv
➯ Apple Music
➯ Call Of Duty Mobile
➯ Pubg Mobile
➯ Clash Royale
➯ Clash Of Clans
➯ Roblox
➯ 8 Ball Pool
➯ Tarjeta Virtual
➯ Monedas TikTok

✨ *Escribí el nombre del servicio para ver los precios.*\`;

const respuestaImagen = "📸 Recibimos tu imagen. Vamos a revisarla y te contactamos enseguida.";
const pagos = \`
💳 *Pagos solo por giro*  
Titular: Cirilo Guillen  
Alias / CI: 5578346  
Tigo / Wally: 0982832010  
Mango / Personal Pay: 0972302296  
Claro / Eko: 0992598035  
Ueno: 619196233  
Atlas: 1530937  
Familiar: 81-245664
\`;

const respuestas = {
  "netflix": \`🎬 *Netflix Premium* (código):
- 30.000 Gs : 30 días
- 55.000 Gs : 60 días

🎬 *Netflix Vip* (contraseña):
- 45.000 Gs : 30 días
- 80.000 Gs : 60 días
\${pagos}\`,
  "free fire": \`🔥 *Diamantes Free Fire:*
- 10.000 Gs : 110
- 25.000 Gs : 341
- 40.000 Gs : 572
- 75.000 Gs : 1155
- 140.000 Gs : 2398
- 325.000 Gs : 6160
- 20.000 Gs : VIP semanal
- 75.000 Gs : VIP mensual
- 35.000 Gs : Pase de Nivel\`,
  "disney": \`🎬 *Disney+:*
- 30.000 Gs : 30 días
- 50.000 Gs : 60 días\`,
  "max": \`🎬 *Max:*
- 20.000 Gs : 30 días
- 35.000 Gs : 60 días\`,
  "prime": \`🎬 *Prime Video:*
- 20.000 Gs : 30 días
- 35.000 Gs : 60 días\`,
  "paramount": \`🎬 *Paramount:*
- 20.000 Gs : 30 días
- 35.000 Gs : 60 días\`,
  "crunchyroll": \`🎥 *Crunchyroll:*
- 15.000 Gs : 30 días
- 25.000 Gs : 60 días\`,
  "spotify": \`🎧 *Spotify Premium:*
- 25.000 Gs : 30 días
- 45.000 Gs : 60 días\`,
  "youtube": \`📲 *YouTube Premium:*
- 20.000 Gs : 30 días
- 35.000 Gs : 60 días\`,
  "flujo": \`📡 *FlujoTv:*
- 30.000 Gs : 30 días
- 50.000 Gs : 60 días\`,
  "fenix": \`📺 *FénixTv:*
- 15.000 Gs : 30 días
- 25.000 Gs : 60 días\`,
  "ib player": \`🎞️ *Ib Player Pro:*
- 30.000 Gs : 30 días
- 50.000 Gs : 60 días\`,
  "iptv": \`📱 *IPTV Smarters:*
- 25.000 Gs : 30 días
- 40.000 Gs : 60 días\`,
  "tigo sport": \`🏟️ *Tigo Sport App:*
- 45.000 Gs : 30 días
- 80.000 Gs : 60 días\`,
  "apple tv": \`🍏 *Apple TV:* 30.000 Gs : 90 días\`,
  "apple music": \`🎶 *Apple Music:* 30.000 Gs : 90 días\`,
  "cod": \`🔫 *Call of Duty Mobile:*
- 12.000 Gs : 80 Cp
- 50.000 Gs : 420 Cp
- 90.000 Gs : 880 Cp\`,
  "pubg": \`🔫 *PUBG Mobile:*
- 13.000 Gs : 63 Uc
- 47.000 Gs : 340 Uc
- 90.000 Gs : 690 Uc
- 195.000 Gs : 1875 Uc\`,
  "clash royale": \`🛡️ *Clash Royale:* 100.000 Gs : Pase Diamante\`,
  "clash of clans": \`🏰 *Clash of Clans:* 65.000 Gs : Pase Oro\`,
  "roblox": \`🧱 *Roblox:*
- 50.000 Gs : 500 Robux
- 90.000 Gs : 1000 Robux
- 135.000 Gs : 1500 Robux\`,
  "8 ball": \`🎱 *8 Ball Pool:*
- 40.000 Gs : Premium Pass
- 70.000 Gs : Élite Pass\`,
  "tarjeta": \`🎫 *Tarjeta Virtual (Play Store):*
- 10.000 : 15.000 Gs
- 100.000 : 118.000 Gs\`,
  "tiktok": \`🎁 *Monedas TikTok:*
- 48.000 Gs : 471 monedas
- 57.000 Gs : 566 monedas
- 65.000 Gs : 660 monedas
- 75.000 Gs : 754 monedas
- 83.000 Gs : 849 monedas
- 93.000 Gs : 943 monedas
- 102.000 Gs : 1037 monedas\`
};
app.post('/webhook', async (req, res) => {
  const { phone, message, file } = req.body;

  if (!phone) return res.sendStatus(400);

  if (file) {
    await sendMessage(phone, respuestaImagen);
    return res.sendStatus(200);
  }

  if (!message) return res.sendStatus(400);

  const msg = message.toLowerCase();

  for (const keyword in respuestas) {
    if (msg.includes(keyword)) {
      await sendMessage(phone, respuestas[keyword]);
      return res.sendStatus(200);
    }
  }

  if (
    msg.includes("hola") ||
    msg.includes("servicio") ||
    msg.includes("servicios") ||
    msg.includes("precio") ||
    msg.includes("ayuda")
  ) {
    await sendMessage(phone, mensajeBienvenida);
    return res.sendStatus(200);
  }

  return res.sendStatus(200); // No responde si no coincide
});

app.listen(3000, () => {
  console.log('🚀 Bot corriendo en puerto 3000');
});
