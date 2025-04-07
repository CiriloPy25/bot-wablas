const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

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

✨ *Escribí el nombre del servicio para ver los precios.*`;

app.post("/", (req, res) => {
  const mensaje = req.body.message?.toLowerCase() || "";
  const file = req.body.file;

  if (file) {
    return res.send("📷 Recibimos tu imagen. Vamos a revisarla y te avisamos ✅");
  }

  if (mensaje.includes("hola") || mensaje.includes("servicio") || mensaje.includes("precio") || mensaje.includes("ayuda")) {
    return res.send(mensajeBienvenida);
  }

  const respuestas = {
    "netflix": `*➯ Netflix Premium:*
(Acceso por código)
- 30.000 Gs : 30 Días
- 55.000 Gs : 60 Días

*➯ Netflix Vip:*
(Acceso por contraseña)
- 45.000 Gs : 30 Días
- 80.000 Gs : 60 Días`,

    "free fire": `*➯ Diamantes Free Fire:*
- 10.000 Gs : 110
- 25.000 Gs : 341
- 40.000 Gs : 572
- 75.000 Gs : 1155
- 140.000 Gs : 2398
- 325.000 Gs : 6160
- 20.000 Gs : Vip Semanal
- 75.000 Gs : Vip Mensual
- 35.000 Gs : Pase de Nivel`,

    "disney": `*➯ Disney Premium:*
- 30.000 Gs : 30 Días
- 50.000 Gs : 60 Días`,

    "max": `*➯ Max:*
- 20.000 Gs : 30 Días
- 35.000 Gs : 60 Días`,

    "prime": `*➯ Prime Video:*
- 20.000 Gs : 30 Días
- 35.000 Gs : 60 Días`,

    "paramount": `*➯ Paramount:*
- 20.000 Gs : 30 Días
- 35.000 Gs : 60 Días`,

    "crunchyroll": `*➯ Crunchyroll:*
- 15.000 Gs : 30 Días
- 25.000 Gs : 60 Días`,

    "spotify": `*➯ Spotify Premium:*
- 25.000 Gs : 30 Días
- 45.000 Gs : 60 Días`,

    "youtube": `*➯ YouTube Premium:*
- 20.000 Gs : 30 Días
- 35.000 Gs : 60 Días`,

    "flujo": `*➯ FlujoTv Compartida (1 pantalla):*
- 30.000 Gs : 30 Días
- 50.000 Gs : 60 Días`,

    "fenix": `*➯ FénixTv Compartida (1 pantalla):*
- 15.000 Gs : 30 Días
- 25.000 Gs : 60 Días`,

    "ib player": `*➯ Ib Player Pro:*
- 30.000 Gs : 30 Días
- 50.000 Gs : 60 Días`,

    "iptv": `*➯ Iptv Smarters (3 pantallas):*
- 25.000 Gs : 30 Días
- 40.000 Gs : 60 Días`,

    "tigo": `*➯ Tigo Sport App (2 pantallas):*
- 45.000 Gs : 30 Días
- 80.000 Gs : 60 Días`,

    "apple tv": `*➯ Apple Tv:*
- 30.000 Gs : 90 Días`,

    "apple music": `*➯ Apple Music:*
- 30.000 Gs : 90 Días`,

    "cod": `*➯ Cp Call of Duty Mobile:*
- 12.000 Gs : 80 Cp
- 50.000 Gs : 420 Cp
- 90.000 Gs : 880 Cp`,

    "pubg": `*➯ Uc Pubg Mobile:*
- 13.000 Gs : 63 Uc
- 47.000 Gs : 340 Uc
- 90.000 Gs : 690 Uc
- 195.000 Gs : 1875 Uc`,

    "clash royale": `*➯ Pass Clash Royale:*
- 100.000 Gs : Pase Diamante`,

    "clash of clans": `*➯ Pass Clash of Clans:*
- 65.000 Gs : Pase Oro`,

    "roblox": `*➯ Moneda Roblox:*
- 50.000 Gs : 500 Robux
- 90.000 Gs : 1000 Robux
- 135.000 Gs : 1500 Robux`,

    "8 ball": `*➯ Pass 8 Ball Pool:*
- 40.000 Gs : Premium Pass
- 70.000 Gs : Élite Pass`,

    "tarjeta": `*➯ Tarjeta Virtual:*
(Play Store)
- (10.000) : 15.000 Gs
- (20.000) : 29.000 Gs
- (30.000) : 40.000 Gs
- (40.000) : 52.000 Gs
- (50.000) : 63.000 Gs
- (60.000) : 74.000 Gs
- (70.000) : 85.000 Gs
- (80.000) : 96.000 Gs
- (90.000) : 107.000 Gs
- (100.000) : 118.000 Gs`,

    "tiktok": `*➯ Monedas TikTok:*
- 48.000 Gs : 471 monedas
- 57.000 Gs : 566 monedas
- 65.000 Gs : 660 monedas
- 75.000 Gs : 754 monedas
- 83.000 Gs : 849 monedas
- 93.000 Gs : 943 monedas
- 102.000 Gs : 1037 monedas`
  };

  for (const palabra in respuestas) {
    if (mensaje.includes(palabra)) {
      return res.send(respuestas[palabra]);
    }
  }

  return res.send(""); // no responde si no coincide
});

app.listen(PORT, () => {
  console.log("✅ Bot activo en el puerto " + PORT);
});
