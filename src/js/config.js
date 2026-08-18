import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://ueapohbmronolhvrlrkk.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable__P9A_xW1IZrKs3MbwCwpPw_0iR_S3OI';
export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// URL absolue dynamique : s'adapte au domaine courant (Vercel prod, previews, localhost).
// Évite les liens WhatsApp cassés (?id=123 non cliquables) qu'aurait produits BASE_URL = '/'.
export const BASE_URL = typeof window !== 'undefined' ? window.location.origin + '/' : '/';
export const WHATSAPP_NUMBER = '242066271882';
export const PRODUCTS_PER_PAGE = 20;
export const NEW_PRODUCT_DAYS = 7;
export const POPULAR_THRESHOLD = 20;
export const MAX_SEARCH_RESULTS = 7;
export const SEARCH_HISTORY_KEY = 'nrj_search_history';
export const MAX_HISTORY_ITEMS = 5;
export const MAX_PLACEHOLDER_SUGGESTIONS = 10;