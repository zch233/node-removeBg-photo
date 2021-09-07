// https://www.remove.bg/zh

import * as fs from 'fs';
import axios from 'axios';
import FormData from 'form-data'

const formData = new FormData();
formData.append('image_file', fs.createReadStream('./images/img.jpg'));

axios({
  method: 'post',
  url: 'https://api.remove.bg/v1.0/removebg',
  headers: {
    'X-Api-Key': 'XWPSg7J45oYrk72KC67iZwU4',
  },
  data: formData,
}).then((response) => {
  console.log(response);
  if (response.status !== 200) return console.error('Error:', response.status, response.data);
  fs.writeFileSync("no-bg.png", response.data);
});
