const SUPABASE_URL = "https://ytxjikrcubokcpkfydlw.supabase.co";
import { createClient } from "@supabase/supabase-js";
const STRIPE_KEY = "pk_test_51TYrnAGu1tQYMMXaaRaJMpXoHsR9gE7ETrd1L8xCVj23JdjFE0Sckl0zI51ZGPIyhZLZUkL3e2KItK5aGqY7Ppxm00zhDFmW2F";
const FREE_LIMIT = 10;
const PRICE_MONTHLY = "9,90€";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const GENRES = ["Pop", "Hip-Hop", "Rock", "R&B", "Eletrônico", "Sertanejo", "Funk", "Jazz", "Lo-fi", "K-Pop"];
const MOODS = ["Animado", "Melancólico", "Romântico", "Intenso", "Relaxante", "Épico", "Rebelde", "Sonhador"];
const INSTRUMENTS = ["Guitarra", "Piano", "Bateria", "Baixo", "Sintetizador", "Violão", "Violino", "Trompete"];
