import client from '@sanity/client';

// put this in env file
export default client({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    useCdn: true,
    apiVersion: process.env.REACT_APP_SANITY_API_VERSION,
    token: process.env.REACT_APP_SANITY_TOKEN,
})