const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 10000;

app.use(bodyParser.json());

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

const formasPago = `
💳 *Pagos solo por giro*  
Titular: Cirilo Guillen  
Alias / CI: 5578346  
Tigo / Wally: 0982832010  
Mango / Personal Pay: 0972302296  
Claro / Eko: 0992598035  
Ueno: 619196233  
Atlas: 1530937  
Familiar: 81-245664`;

const respuestas = {
  "netflix": `🎬 *Netflix Premium* (código):\n- 30.000 Gs : 30 días\n- 55.000 Gs : 60 días\n\n🎬 *Netflix Vip* (contraseña):\n- 45.000 Gs : 30 días\n- 80.000 Gs : 60 días\n\n${formasPago}`,
  "free fire": `🔥 *Diamantes Free Fire:*\n- 10.000 Gs : 110\n- 25.000 Gs : 341\n- 40.000 Gs : 572\n- 75.000 Gs : 1155\n- 140.000 Gs : 2398\n- 325.000 Gs : 6160\n- 20.000 Gs : VIP semanal\n- 75.000 Gs : VIP mensual\n- 35.000 Gs : Pase de Nivel\n\n${formasPago}`,
  "spotify": `🎧 *Spotify Premium:*\n- 25.000 Gs : 30 días\n- 45.000 Gs : 60 días\n\n${formasPago}`,
  "tiktok": `🎁 *Monedas TikTok:*\n- 48.000 Gs : 471 monedas\n- 57.000 Gs : 566 monedas\n- 65.000 Gs : 660 monedas\n- 75.000 Gs : 754 monedas\n- 83.000 Gs : 849 monedas\n- 93.000 Gs : 943 monedas\n- 102.000 Gs : 1037 monedas\n\n${formasPago}`
};

app.post("/", (req, res) => {
  const { message, file_url } = req.body;
  const texto = message?.toLowerCase() || "";

  if (file_url) {
    return res.send("📸 Recibimos tu imagen. Vamos a revisarla y te contactamos enseguida.");
  }

  for (const palabra in respuestas) {
    if (texto.includes(palabra)) {
      return res.send(respuestas[palabra]);
    }
  }

  if (["hola", "servicio", "servicios", "ayuda", "precio"].some(p => texto.includes(p))) {
    return res.send(mensajeBienvenida);
  }

  return res.send(""); // No responder si no coincide
});

app.listen(PORT, () => {
  console.log("Bot activo en el puerto " + PORT);
});
