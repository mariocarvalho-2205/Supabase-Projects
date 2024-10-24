const { createClient } = require('@supabase/supabase-js');

// Crie o cliente Supabase
const supabaseUrl = 'https://vfmwbujiqedwjafmnaps.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmbXdidWppcWVkd2phZm1uYXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwODU3MzMsImV4cCI6MjA0MzY2MTczM30.-ZFbkbrKpptoPlJ6-zGidrSWBAffIh7IA1XhOADFvUw';



const supabaseAuth = createClient(supabaseUrl, supabaseKey);

module.exports = supabaseAuth;