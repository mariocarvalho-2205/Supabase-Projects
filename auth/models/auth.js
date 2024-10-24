const { createClient } = require('@supabase/supabase-js');

// Crie o cliente Supabase
const supabaseUrl = 'https://vgkpqlovwbltsrtyhxtl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZna3BxbG92d2JsdHNydHloeHRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzMjE0MTMsImV4cCI6MjA0Mzg5NzQxM30.yqOA0ttI3LQBgrrn3hcdKO2M6dM85YdxbcasUPAhPik';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
