const axios = require("axios");
const BASE_URl = 'https://youtube-v31.p.rapidapi.com/captions';

const options = {
    url: BASE_URl,
    params: { part: 'snippet', videoId: 'M7FIvfx5J10' },
    headers: {
        'X-RapidAPI-Key': '222b794391msh4e31abe3ef7c654p17f0bfjsn58e34d73ee70',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

