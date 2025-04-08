const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const mensajeBienvenida = `
👋 *¡Hola! ¿En qué podemos ayudarte hoy?*

*📋 Estos son nuestros servicios disponibles:*

1⃣ Free Fire
2⃣ Netflix Premium / VIP
3⃣ Disney+ Premium
4⃣ Max
5⃣ Prime Video
6⃣ Paramount
7⃣ Crunchyroll
8⃣ Spotify Premium
9⃣ YouTube Premium
1⃣0⃣ FlujoTv
1⃣1⃣ FénixTv
1⃣2⃣ Ib Player Pro
1⃣3⃣ IPTV Smarters
1⃣4⃣ Tigo Sport App
1⃣5⃣ Apple Tv
1⃣6⃣ Apple Music
1⃣7⃣ Call Of Duty Mobile
1⃣8⃣ Pubg Mobile
1⃣9⃣ Clash Royale
2⃣0⃣ Clash Of Clans
2⃣1⃣ Roblox
2⃣2⃣ 8 Ball Pool
2⃣3⃣ Tarjeta Virtual
2⃣4⃣ Monedas TikTok

💬 Escribí el número del servicio para ver los precios y formas de pago.`;

const formasPago = `

💳 *Formas de Pago:*
(*Giro* 🙅🏻‍♂️ no carga de billetera)

- *Titular:* Cirilo Guillen
- *C.I.:* 5578346
- *Alias:* 5578346

➯ Ueno Bank: 619196233
➯ Atlas: 1530937
➯ Banco Familiar: 81-245664
➯ Mango: 0972302296 - @ciriloguillen
➯ Tigo Money: 0982832010
➯ Personal Pay: 0972302296
➯ Claro: 0992598035
➯ Eko: 0992598035
➯ Wally: 0982832010`;

const respuestas = {
  "1": `*➯ Diamantes Free Fire:*
- 10.000 Gs : 110
- 25.000 Gs : 341
- 40.000 Gs : 572
- 75.000 Gs : 1155
- 140.000 Gs : 2398
- 325.000 Gs : 6160
- 20.000 Gs : Vip Semanal
- 75.000 Gs : Vip Mensual
- 35.000 Gs : Pase de Nivel${formasPago}`,

  "2": `*➯ Netflix Premium:*
(Acceso por código)
- 30.000 Gs : 30 días
- 55.000 Gs : 60 días

*➯ Netflix Vip:*
(Acceso por contraseña)
- 45.000 Gs : 30 días
- 80.000 Gs : 60 días${formasPago}`,

  "3": `*➯ Disney+ Premium:*
- 30.000 Gs : 30 días
- 50.000 Gs : 60 días${formasPago}`,

  "4": `*➯ Max:*
- 20.000 Gs : 30 días
- 35.000 Gs : 60 días${formasPago}`,

  "5": `*➯ Prime Video:*
- 20.000 Gs : 30 días
- 35.000 Gs : 60 días${formasPago}`,

  "6": `*➯ Paramount:*
- 20.000 Gs : 30 días
- 35.000 Gs : 60 días${formasPago}`,

  "7": `*➯ Crunchyroll:*
- 15.000 Gs : 30 días
- 25.000 Gs : 60 días${formasPago}`,

  "8": `*➯ Spotify Premium:*
- 25.000 Gs : 30 días
- 45.000 Gs : 60 días${formasPago}`,

  "9": `*➯ YouTube Premium:*
- 20.000 Gs : 30 días
- 35.000 Gs : 60 días${formasPago}`,

  "10": `*➯ FlujoTv:*
- 30.000 Gs : 30 días
- 50.000 Gs : 60 días${formasPago}`,

  "11": `*➯ FénixTv:*
- 15.000 Gs : 30 días
- 25.000 Gs : 60 días${formasPago}`,

  "12": `*➯ Ib Player Pro:*
- 30.000 Gs : 30 días
- 50.000 Gs : 60 días${formasPago}`,

  "13": `*➯ IPTV Smarters:*
- 25.000 Gs : 30 días
- 40.000 Gs : 60 días${formasPago}`,

  "14": `*➯ Tigo Sport App:*
- 45.000 Gs : 30 días
- 80.000 Gs : 60 días${formasPago}`,

  "15": `*➯ Apple Tv:*
- 30.000 Gs : 90 días${formasPago}`,

  "16": `*➯ Apple Music:*
- 30.000 Gs : 90 días${formasPago}`,

  "17": `*➯ CP Call Of Duty Mobile:*
- 12.000 Gs : 80 CP
- 50.000 Gs : 420 CP
- 90.000 Gs : 880 CP${formasPago}`,

  "18": `*➯ UC Pubg Mobile:*
- 13.000 Gs : 63 UC
- 47.000 Gs : 340 UC
- 90.000 Gs : 690 UC
- 195.000 Gs : 1875 UC${formasPago}`,

  "19": `*➯ Pass Clash Royale:*
- 100.000 Gs : Pase Diamante${formasPago}`,

  "20": `*➯ Pass Clash of Clans:*
- 65.000 Gs : Pase Oro${formasPago}`,

  "21": `*➯ Moneda Roblox:*
- 50.000 Gs : 500 Robux
- 90.000 Gs : 1000 Robux
- 135.000 Gs : 1500 Robux${formasPago}`,

  "22": `*➯ Pass 8 Ball Pool:*
- 40.000 Gs : Premium Pass
- 70.000 Gs : Élite Pass${formasPago}`,

  "23": `*➯ Tarjeta Virtual (Play Store):*
- 10.000 : 15.000 Gs
- 20.000 : 29.000 Gs
- 30.000 : 40.000 Gs
- 40.000 : 52.000 Gs
- 50.000 : 63.000 Gs
- 60.000 : 74.000 Gs
- 70.000 : 85.000 Gs
- 80.000 : 96.000 Gs
- 90.000 : 107.000 Gs
- 100.000 : 118.000 Gs${formasPago}`,

  "24": `*➯ Monedas TikTok:*
- 48.000 Gs : 471 monedas
- 57.000 Gs : 566 monedas
- 65.000 Gs : 660 monedas
- 75.000 Gs : 754 monedas
- 83.000 Gs : 849 monedas
- 93.000 Gs : 943 monedas
- 102.000 Gs : 1037 monedas${formasPago}`
};

app.post("/", (req, res) => {
  const mensaje = (req.body.message || "").trim();

  if (["bienvenido", "servicio", "servicios", "precios", "ayuda"].includes(mensaje.toLowerCase())) {
res.set('Content-Type', 'text/plain');
return res.send(mensajeBienvenida);
}

  if (mensaje === "reclamo") {
    return res.send({
      status: "success",
      reply: "📸 Para reclamos, envianos tu *nombre y apellido completo* y una *captura de pantalla o foto del problema*."
    });
  }

  if (respuestas[mensaje]) {
res.set('Content-Type', 'text/plain');
return res.send(respuestas[mensaje]);
  }
  
});

app.listen(PORT, () => {
  console.log("✅ Bot activo en el puerto " + PORT);
});
