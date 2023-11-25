import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://jzzoyvsdbijbjvtpsiby.supabase.co' || '';
const SERVER_API = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6em95dnNkYmlqYmp2dHBzaWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3ODEzODEsImV4cCI6MjAxNTM1NzM4MX0.f15lbWhCw9hMRL1KCHDLXH08ypM2RO4E1GV3HjANHjc' || '';

if (!SUPABASE_URL || !SERVER_API) {
  console.log('Supabase configuration error!');
}

const supabase = createClient(SUPABASE_URL, SERVER_API);

export default supabase;
