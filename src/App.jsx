import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ytxjikrcubokcpkfydlw.supabase.co";
const SUPABASE_KEY = "SUA_CHAVE_SUPABASE";
const STRIPE_KEY = "SUA_CHAVE_STRIPE";

const FREE_LIMIT = 10;
const PRICE_MONTHLY = "9,90€";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const GENRES = ["Pop", "Hip-Hop", "Rock", "R&B", "Eletrônico", "Sertanejo", "Funk", "Jazz", "Lo-fi", "K-Pop"];

const MOODS = ["Animado", "Melancólico", "Romântico", "Intenso", "Relaxante", "Épico", "Rebelde", "Sonhador"];

const INSTRUMENTS = ["Guitarra", "Piano", "Bateria", "Baixo", "Sintetizador", "Violão", "Violino", "Trompete"];
