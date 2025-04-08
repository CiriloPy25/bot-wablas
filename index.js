const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const mensajeBienvenida = `👋 ¡Bienvenido/a!

*¿Qué servicio te interesa? Responde con un número:*

🔵1️⃣ *Netflix Premium / Vip*
🔵2️⃣ Disney+ Premium
🔵3️⃣ Max
🔵4️⃣ Prime Video
🔵5️⃣ Paramount
🔵6️⃣ Crunchyroll
🔵7️⃣ Spotify Premium
🔵8️⃣ YouTube Premium
🔵9️⃣ FlujoTv
🔵🔟 FénixTv
🔵1️⃣1️⃣ Ib Player Pro
🔵1️⃣2️⃣ IPTV Smarters
🔵1️⃣3️⃣ Tigo Sport App
🔵1️⃣4️⃣ Apple Tv
🔵1️⃣5️⃣ Apple Music
🔵1️⃣6️⃣ Free Fire
🔵1️⃣7️⃣ Call Of Duty Mobile
🔵1️⃣8️⃣ Pubg Mobile
🔵1️⃣9️⃣ Clash Royale
🔵2️⃣0️⃣ Clash Of Clans
🔵2️⃣1️⃣ Roblox
🔵2️⃣2️⃣ 8 Ball Pool
🔵2️⃣3️⃣ Tarjeta Virtual
🔵2️⃣4️⃣ Monedas TikTok

📍 *Responde solo con el número del servicio.*

📷 *Para reclamos o comprobantes:* envianos tu nombre completo junto con una imagen.`;

const formasPago = `\n\n💳 *Formas de Pago:*\n(Giro 🙅🏻‍♂ no carga de billetera)\n\n- *Titular:* Cirilo Guillen\n- *C.I.:* 5578346\n- *Alias:* 5578346\n\n➯ Ueno Bank: 619196233\n➯ Atlas: 1530937\n➯ Banco Familiar: 81-245664\n➯ Mango: 0972302296 - @ciriloguillen\n➯ Tigo Money: 0982832010\n➯ Personal Pay: 0972302296\n➯ Claro: 0992598035\n➯ Eko: 0992598035\n➯ Wally: 0982832010`;

const respuestas = {
  "1": `*Netflix Premium:*\n- 30.000 Gs : 30 días\n- 55.000 Gs : 60 días\n\n*Netflix Vip:*\n- 45.000 Gs : 30 días\n- 80.000 Gs : 60 días${formasPago}`,
  "2": `*Disney+ Premium:*\n- 30.000 Gs : 30 días${formasPago}`,
  "3": `*Max:*\n- 20.000 Gs : 30 días\n- 35.000 Gs : 60 días${formasPago}`,
  "4": `*Prime Video:*\n- 20.000 Gs : 30 días\n- 35.000 Gs : 60 días${formasPago}`,
  "5": `*Paramount:*\n- 20.000 Gs : 30 días\n- 35.000 Gs : 60 días${formasPago}`,
  "6": `*Crunchyroll:*\n- 15.000 Gs : 30 días\n- 25.000 Gs : 60 días${formasPago}`,
  "7": `*Spotify Premium:*\n- 25.000 Gs : 30 días\n- 45.000 Gs : 60 días${formasPago}`,
  "8": `*YouTube Premium:*\n- 20.000 Gs : 30 días\n- 35.000 Gs : 60 días${formasPago}`,
  "9": `*FlujoTv Compartida (1 pantalla):*\n- 30.000 Gs : 30 días\n- 50.000 Gs : 60 días${formasPago}`,
  "10": `*FénixTv Compartida (1 pantalla):*\n- 15.000 Gs : 30 días\n- 25.000 Gs : 60 días${formasPago}`,
  "11": `*Ib Player Pro:*\n- 30.000 Gs : 30 días\n- 50.000 Gs : 60 días${formasPago}`,
  "12": `*IPTV Smarters (3 pantallas):*\n- 25.000 Gs : 30 días\n- 40.000 Gs : 60 días${formasPago}`,
  "13": `*Tigo Sport App (2 pantallas):*\n- 45.000 Gs : 30 días\n- 80.000 Gs : 60 días${formasPago}`,
  "14": `*Apple TV:*\n- 30.000 Gs : 90 días${formasPago}`,
  "15": `*Apple Music:*\n- 30.000 Gs : 90 días${formasPago}`,
  "16": `*Diamantes Free Fire:*\n- 10.000 Gs : 110\n- 25.000 Gs : 341\n- 40.000 Gs : 572\n- 75.000 Gs : 1155\n- 140.000 Gs : 2398\n- 325.000 Gs : 6160\n- 20.000 Gs : Vip Semanal\n- 75.000 Gs : Vip Mensual\n- 35.000 Gs : Pase de Nivel${formasPago}`,
  "17": `*Cp Call of Duty Mobile:*\n- 12.000 Gs : 80 Cp\n- 50.000 Gs : 420 Cp\n- 90.000 Gs : 880 Cp${formasPago}`,
  "18": `*Uc Pubg Mobile:*\n- 13.000 Gs : 63 Uc\n- 47.000 Gs : 340 Uc\n- 90.000 Gs : 690 Uc\n- 195.000 Gs : 1875 Uc${formasPago}`,
  "19": `*Pass Clash Royale:*\n- 100.000 Gs : Pase Diamante${formasPago}`,
  "20": `*Pass Clash of Clans:*\n- 65.000 Gs : Pase Oro${formasPago}`,
  "21": `*Moneda Roblox:*\n- 50.000 Gs : 500 Robux\n- 90.000 Gs : 1000 Robux\n- 135.000 Gs : 1500 Robux${formasPago}`,
  "22": `*Pass 8 Ball Pool:*\n- 40.000 Gs : Premium Pass\n- 70.000 Gs : Élite Pass${formasPago}`,
  "23": `*Tarjeta Virtual (Play Store):*\n- 10.000 : 15.000 Gs\n- 20.000 : 29.000 Gs\n- 30.000 : 40.000 Gs\n- 40.000 : 52.000 Gs\n- 50.000 : 63.000 Gs\n- 60.000 : 74.000 Gs\n- 70.000 : 85.000 Gs\n- 80.000 : 96.000 Gs\n- 90.000 : 107.000 Gs\n- 100.000 : 118.000 Gs${formasPago}`,
  "24": `*Monedas TikTok:*\n- 48.000 Gs : 471 monedas\n- 57.000 Gs : 566 monedas\n- 65.000 Gs : 660 monedas\n- 75.000 Gs : 754 monedas\n- 83.000 Gs : 849 monedas\n- 93.000 Gs : 943 monedas\n- 102.000 Gs : 1037 monedas${formasPago}`
};

app.post("/", (req, res) => {
  const mensaje = (req.body.message || "").trim().toLowerCase();

  if (
    ["precio", "servicio", "servicios", "precios", "ayuda"].includes(mensaje)
  ) {
    return res.send({ status: "success", reply: mensajeBienvenida });
  }

  if (mensaje.includes("reclamo")) {
    return res.send({
      status: "success",
      reply:
        "📸 Para ayudarte con tu reclamo, por favor envíanos:\n\n1️⃣ *Tu nombre y apellido completo*\n2️⃣ *Una captura de pantalla o foto del problema*"
    });
  }

  if (respuestas[mensaje]) {
    return res.send({ status: "success", reply: respuestas[mensaje] });
  }

  return res.sendStatus(200); // no responde si no coincide nada
});

app.listen(PORT, () => {
  console.log("✅ Bot activo en el puerto " + PORT);
});
