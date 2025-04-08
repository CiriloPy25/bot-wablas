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

const formasPago = `\n\n💳 *Formas de Pago:*\n(*Giro* 🙅🏻‍♂ no carga de billetera)\n\n- *Titular:* Cirilo Guillen\n- *C.I.:* 5578346\n- *Alias:* 5578346\n\n➯ Ueno Bank: 619196233\n➯ Atlas: 1530937\n➯ Banco Familiar: 81-245664\n➯ Mango: 0972302296 - @ciriloguillen\n➯ Tigo Money: 0982832010\n➯ Personal Pay: 0972302296\n➯ Claro: 0992598035\n➯ Eko: 0992598035\n➯ Wally: 0982832010`;

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
- 80.000 Gs : 60 Días${formasPago}`,

    "free fire": `*➯ Diamantes Free Fire:*
- 10.000 Gs : 110
- 25.000 Gs : 341
- 40.000 Gs : 572
- 75.000 Gs : 1155
- 140.000 Gs : 2398
- 325.000 Gs : 6160
- 20.000 Gs : Vip Semanal
- 75.000 Gs : Vip Mensual
- 35.000 Gs : Pase de Nivel${formasPago}`,

    "disney": `*➯ Disney Premium:*
- 30.000 Gs : 30 Días
- 50.000 Gs : 60 Días${formasPago}`,

    "max": `*➯ Max:*
- 20.000 Gs : 30 Días
- 35.000 Gs : 60 Días${formasPago}`,

    "prime": `*➯ Prime Video:*
- 20.000 Gs : 30 Días
- 35.000 Gs : 60 Días${formasPago}`,

    "paramount": `*➯ Paramount:*
- 20.000 Gs : 30 Días
- 35.000 Gs : 60 Días${formasPago}`,

    "crunchyroll": `*➯ Crunchyroll:*
- 15.000 Gs : 30 Días
- 25.000 Gs : 60 Días${formasPago}`,

    "spotify": `*➯ Spotify Premium:*
- 25.000 Gs : 30 Días
- 45.000 Gs : 60 Días${formasPago}`,

    "youtube": `*➯ YouTube Premium:*
- 20.000 Gs : 30 Días
- 35.000 Gs : 60 Días${formasPago}`,

    "flujo": `*➯ FlujoTv Compartida (1 pantalla):*
- 30.000 Gs : 30 Días
- 50.000 Gs : 60 Días${formasPago}`,

    "fenix": `*➯ FénixTv Compartida (1 pantalla):*
- 15.000 Gs : 30 Días
- 25.000 Gs : 60 Días${formasPago}`,

    "ib player": `*➯ Ib Player Pro:*
- 30.000 Gs : 30 Días
- 50.000 Gs : 60 Días${formasPago}`,

    "iptv": `*➯ Iptv Smarters (3 pantallas):*
- 25.000 Gs : 30 Días
- 40.000 Gs : 60 Días${formasPago}`,

    "tigo": `*➯ Tigo Sport App (2 pantallas):*
- 45.000 Gs : 30 Días
- 80.000 Gs : 60 Días${formasPago}`,

    "apple tv": `*➯ Apple Tv:*
- 30.000 Gs : 90 Días${formasPago}`,

    "apple music": `*➯ Apple Music:*
- 30.000 Gs : 90 Días${formasPago}`,

    "cod": `*➯ Cp Call of Duty Mobile:*
- 12.000 Gs : 80 Cp
- 50.000 Gs : 420 Cp
- 90.000 Gs : 880 Cp${formasPago}`,

    "pubg": `*➯ Uc Pubg Mobile:*
- 13.000 Gs : 63 Uc
- 47.000 Gs : 340 Uc
- 90.000 Gs : 690 Uc
- 195.000 Gs : 1875 Uc${formasPago}`,

    "clash royale": `*➯ Pass Clash Royale:*
- 100.000 Gs : Pase Diamante${formasPago}`,

    "clash of clans": `*➯ Pass Clash of Clans:*
- 65.000 Gs : Pase Oro${formasPago}`,

    "roblox": `*➯ Moneda Roblox:*
- 50.000 Gs : 500 Robux
- 90.000 Gs : 1000 Robux
- 135.000 Gs : 1500 Robux${formasPago}`,

    "8 ball": `*➯ Pass 8 Ball Pool:*
- 40.000 Gs : Premium Pass
- 70.000 Gs : Élite Pass${formasPago}`,

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
- (100.000) : 118.000 Gs${formasPago}`,

    "tiktok": `*➯ Monedas TikTok:*
- 48.000 Gs : 471 monedas
- 57.000 Gs : 566 monedas
- 65.000 Gs : 660 monedas
- 75.000 Gs : 754 monedas
- 83.000 Gs : 849 monedas
- 93.000 Gs : 943 monedas
- 102.000 Gs : 1037 monedas${formasPago}`
  };

  for (const palabra in respuestas) {
    if (mensaje.includes(palabra)) {
      return res.send(respuestas[palabra]);
    }
  }

  return res.send("");
});

app.listen(PORT, () => {
  console.log("✅ Bot activo en el puerto " + PORT);
});

  "4": `*Prime Video:* 20.000 Gs - 30 días${formasPago}`,
  "5": `*Paramount:* 20.000 Gs - 30 días${formasPago}`,
  "6": `*Crunchyroll:* 15.000 Gs - 30 días${formasPago}`,
  "7": `*Spotify Premium:* 25.000 Gs - 30 días${formasPago}`,
  "8": `*YouTube Premium:* 20.000 Gs - 30 días${formasPago}`,
  "9": `*FlujoTv:* 30.000 Gs - 30 días${formasPago}`,
  "10": `*FénixTv:* 15.000 Gs - 30 días${formasPago}`,
  "11": `*Ib Player Pro:* 30.000 Gs - 30 días${formasPago}`,
  "12": `*IPTV Smarters:* 25.000 Gs - 30 días${formasPago}`,
  "13": `*Tigo Sport App:* 45.000 Gs - 30 días${formasPago}`,
  "14": `*Apple TV:* 30.000 Gs - 90 días${formasPago}`,
  "15": `*Apple Music:* 30.000 Gs - 90 días${formasPago}`,
  "16": `*Free Fire:*\n- 10.000 Gs : 110 diamantes\n- 25.000 Gs : 341\n- 40.000 Gs : 572\n- 75.000 Gs : 1155\n- 140.000 Gs : 2398\n- 325.000 Gs : 6160\n- 20.000 Gs : VIP semanal\n- 75.000 Gs : VIP mensual\n- 35.000 Gs : Pase de Nivel${formasPago}`,
  "17": `*Call Of Duty:* 50.000 Gs - 420 CP${formasPago}`,
  "18": `*Pubg Mobile:* 47.000 Gs - 340 UC${formasPago}`,
  "19": `*Clash Royale:* 100.000 Gs - Pase Diamante${formasPago}`,
  "20": `*Clash Of Clans:* 65.000 Gs - Pase Oro${formasPago}`,
  "21": `*Roblox:*\n- 50.000 Gs : 500 Robux\n- 90.000 Gs : 1000 Robux${formasPago}`,
  "22": `*8 Ball Pool:*\n- 40.000 Gs : Premium Pass\n- 70.000 Gs : Elite Pass${formasPago}`,
  "23": `*Tarjeta Virtual Play Store:*\n- 15.000 Gs : Saldo 10.000\n- 29.000 Gs : 20.000\n- 40.000 Gs : 30.000\n- 52.000 Gs : 40.000\n- 63.000 Gs : 50.000\n- 118.000 Gs : 100.000${formasPago}`,
  "24": `*Monedas TikTok:*\n- 48.000 Gs : 471\n- 57.000 Gs : 566\n- 65.000 Gs : 660\n- 75.000 Gs : 754\n- 83.000 Gs : 849${formasPago}`
};

app.post("/", (req, res) => {
  const mensaje = (req.body.message || "").trim().toLowerCase();

  if (
    mensaje === "hola" ||
    mensaje === "servicios" ||
    mensaje === "precios"
  ) {
    return res.send({ status: "success", reply: mensajeBienvenida });
  }

  if (mensaje.includes("reclamo")) {
    return res.send({
      status: "success",
      reply: "📩 *Para ayudarte con tu reclamo, por favor envianos:*\n\n1️⃣ *Tu nombre y apellido completo*\n2️⃣ *Una captura de pantalla o foto del problema*"
    });
  }

  if (respuestas[mensaje]) {
    return res.send({ status: "success", reply: respuestas[mensaje] });
  }

  return res.sendStatus(200); // no responde si no reconoce nada
});

app.listen(PORT, () => {
  console.log("Bot activo en el puerto", PORT);
});
