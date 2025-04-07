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

✨ *Elegí un servicio para ver los precios*
Días
