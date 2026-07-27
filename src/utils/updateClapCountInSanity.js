import client  from '../client'; // Ensure this is the correct path to your Sanity client

export const updateClapCountInSanity = async (slug, newClapCount) => {
    try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          _id
        }`;
        const params = { slug };
        const post = await client.fetch(query, params);
        if (post) {
          await client
            .patch(post._id)
            .set({ claps: newClapCount })
            .commit();
        } else {
          throw new Error('Post not found');
        }
      } catch (error) {
        console.error('Error updating clap count:', error);
      }
};
