const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const mensajeBienvenida = `👋 ¡Bienvenido/a!

*¿Cómo podemos ayudarte hoy?*

➞ Free Fire
➞ Netflix Premium
➞ Disney+ Premium
➞ Max
➞ Prime Video
➞ Paramount
➞ Crunchyroll
➞ Spotify Premium
➞ YouTube Premium
➞ FlujoTv
➞ FénixTv
➞ Ib Player Pro
➞ Iptv Smarters
➞ Tigo Sport App
➞ Apple Tv
➞ Apple Music
➞ Call Of Duty Mobile
➞ Pubg Mobile
➞ Clash Royale
➞ Clash Of Clans
➞ Roblox
➞ 8 Ball Pool
➞ Tarjeta Virtual
➞ Monedas TikTok

✨ *Elige tu opción* y te asistiremos de inmediato.

*➞ Reclamo:*
- Envia foto o captura del problema`;

const formasPago = `
*\u279e Formas de Pago:*
(*Giro* 🤖 no carga de billetera)

- *Titular:* Cirilo Guillen
- *C.I.:* 5578346
- *Alias:* 5578346

➞ Ueno Bank: 619196233
➞ Atlas: 1530937
➞ Banco Familiar: 81-245664
➞ Mango: 0972302296 - @ciriloguillen
➞ Tigo Money: 0982832010
➞ Personal Pay: 0972302296
➞ Claro: 0992598035
➞ Eko: 0992598035
➞ Wally: 0982832010
`;

const respuestas = {
  netflix: `*\u279e Netflix Premium:*
(Acceso por código)
- 30.000 Gs : 30 Días
- 55.000 Gs : 60 Dias

*\u279e Netflix Vip:*
(Acceso por contraseña)
- 45.000 Gs : 30 Días
- 80.000 Gs : 60 Días

${formasPago}`,
  freefire: `*\u279e Diamantes Free Fire:*
- 10.000 Gs : 110
- 25.000 Gs : 341
- 40.000 Gs : 572
- 75.000 Gs : 1155
- 140.000 Gs : 2398
- 325.000 Gs : 6160
- 20.000 Gs : Vip Semanal
- 75.000 Gs : Vip Mensual
- 35.000 Gs : Pase de Nivel

${formasPago}`,
  disney: `*\u279e Disney Premium:*
- 30.000 Gs : 30 Días
- 50.000 Gs : 60 Días

${formasPago}`,
  max: `*\u279e Max:*
- 20.000 Gs : 30 Días
- 35.000 Gs : 60 Días

${formasPago}`,
  prime: `*\u279e Prime Video:*
- 20.000 Gs : 30 Días
- 35.000 Gs : 60 Días

${formasPago}`,
  paramount: `*\u279e Paramount:*
- 20.000 Gs : 30 Días
- 35.000 Gs : 60 Días

${formasPago}`,
  crunch: `*\u279e Crunchyroll:*
- 15.000 Gs : 30 Días
- 25.000 Gs : 60 Días

${formasPago}`,
  spotify: `*\u279e Spotify:*
- 25.000 Gs : 30 Días
- 45.000 Gs : 60 Días

${formasPago}`,
  youtube: `*\u279e YouTube Premium:*
- 20.000 Gs : 30 Días
- 35.000 Gs : 60 Días

${formasPago}`,
  flujo: `*\u279e FlujoTv Compartida:*
(1 pantalla)
- 30.000 Gs : 30 Días
- 50.000 Gs : 60 Días

${formasPago}`,
  fenix: `*\u279e FénixTv Compartida:*
(1 pantalla)
- 15.000 Gs : 30 Días
- 25.000 Gs : 60 Días

${formasPago}`,
  ib: `*\u279e Ib Player Pro:*
- 30.000 Gs : 30 Días
- 50.000 Gs : 60 Días

${formasPago}`,
  iptv: `*\u279e IPTV Smarters (3 pantallas):*
- 25.000 Gs : 30 Días
- 40.000 Gs : 60 Días

${formasPago}`,
  tigo: `*\u279e Tigo Sport App (2 pantallas):*
- 45.000 Gs : 30 Días
- 80.000 Gs : 60 Días

${formasPago}`,
  appletv: `*\u279e Apple TV:*
- 30.000 Gs : 90 Días

${formasPago}`,
  applemusic: `*\u279e Apple Music:*
- 30.000 Gs : 90 Días

${formasPago}`,
  cod: `*\u279e CP Call of Duty Mobile:*
- 12.000 Gs : 80 Cp
- 50.000 Gs : 420 Cp
- 90.000 Gs : 880 Cp

${formasPago}`,
  pubg: `*\u279e UC Pubg Mobile:*
- 13.000 Gs : 63 Uc
- 47.000 Gs : 340 Uc
- 90.000 Gs : 690 Uc
- 195.000 Gs : 1875 Uc

${formasPago}`,
  royale: `*\u279e Pass Clash Royale:*
- 100.000 Gs : Pase Diamante

${formasPago}`,
  clans: `*\u279e Pass Clash of Clans:*
- 65.000 Gs : Pase Oro

${formasPago}`,
  roblox: `*\u279e Moneda Roblox:*
- 50.000 Gs : 500 Robux
- 90.000 Gs : 1000 Robux
- 135.000 Gs : 1500 Robux

${formasPago}`,
  pool: `*\u279e Pass 8 Ball Pool:*
- 40.000 Gs : Premium Pass
- 70.000 Gs : Élite Pass

${formasPago}`,
  tarjeta: `*\u279e Tarjeta Virtual:* (Play Store)
- (10.000) : 15.000 Gs
- (20.000) : 29.000 Gs
- (30.000) : 40.000 Gs
- (40.000) : 52.000 Gs
- (50.000) : 63.000 Gs
- (60.000) : 74.000 Gs
- (70.000) : 85.000 Gs
- (80.000) : 96.000 Gs
- (90.000) : 107.000 Gs
- (100.000) : 118.000 Gs

*Uso exclusivo en Play Store Android*

${formasPago}`,
  tiktok: `*\u279e Monedas TikTok:*
- 48.000 Gs : 471 monedas
- 57.000 Gs : 566 monedas
- 65.000 Gs : 660 monedas
- 75.000 Gs : 754 monedas
- 83.000 Gs : 849 monedas
- 93.000 Gs : 943 monedas
- 102.000 Gs : 1037 monedas

${formasPago}`
};

function normalizar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

app.post("/", (req, res) => {
  const { message, sender, file_url } = req.body;

  if (file_url) {
    return res.send({
      status: "success",
      reply: "Vamos a revisarlo 📸"
    });
  }

  const texto = normalizar(message || "");

  if (texto.includes("hola") || texto.includes("buenas")) {
    return res.send({ status: "success", reply: mensajeBienvenida });
  }

  const entrada = Object.keys(respuestas).find(palabra => texto.includes(palabra));
  if (entrada) {
    return res.send({ status: "success", reply: respuestas[entrada] });
  }

  return res.send({ status: "success", reply: null }); // No responder si no coincide
});

app.listen(PORT, () => {
  console.log("Bot activo en el puerto " + PORT);
});
