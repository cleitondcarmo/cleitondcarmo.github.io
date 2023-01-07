import axios from 'axios'

export const http = axios.create({
    client_id: 'Iv1.9b1a7d83fe2d59aa',
    client_secret: 'e0318eac8b502a2173c54f623c8904c8940327e2',
    baseURL: 'https://api.github.com/search/repositories?q=user%3Acleitondcarmo&ref=simplesearchIv1.9b1a7d83fe2d59aa&e0318eac8b502a2173c54f623c8904c8940327e2',
});