import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ylpoghdjatmkepbbhrig.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlscG9naGRqYXRta2VwYmJocmlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNTIwNDQsImV4cCI6MjA1MTkyODA0NH0.oW6Wz5nmpL8GaGbVVfMOBAZ09CazS5etl1uH03Vljbs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
