// pages/api/getImages.js
import cloudinary from '../../lib/cloudinary';

export default async function handler(req, res) {
  const { tag } = req.query;
  if (!tag) return res.status(400).json({ error: 'Tag is required' });

  try {
    const searchResult = await cloudinary.search
      .expression(`tags=${tag}`)
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();

    const resources = searchResult.resources.map(resource => {
      const baseUrl = resource.secure_url || resource.url;
      const optimized_url = baseUrl.includes('/image/upload/')
        ? baseUrl.replace(
            '/image/upload/',
            '/image/upload/f_auto,q_auto,w_auto,dpr_auto/'
          )
        : baseUrl;

      return {
        public_id:    resource.public_id,
        secure_url:   baseUrl,
        optimized_url,
      };
    });

    res.status(200).json({ resources });
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
}