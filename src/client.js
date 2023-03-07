import client from '@sanity/client';

export default client({
    projectId: "os5ae1ct",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-03-06"
})