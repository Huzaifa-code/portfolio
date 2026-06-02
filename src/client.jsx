import { createClient } from '@sanity/client';

// In Astro: server-side vars use import.meta.env directly (no PUBLIC_ prefix needed on server)
// Client-side (browser) vars must use PUBLIC_ prefix
const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || 'os5ae1ct',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: import.meta.env.SANITY_API_VERSION || '2023-03-06',
  token: import.meta.env.SANITY_TOKEN,
});

export default client;