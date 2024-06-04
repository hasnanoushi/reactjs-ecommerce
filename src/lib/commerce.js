import Commerce from '@chec/commerce.js';


const checAPIKey = 'pk_5706029c2e2bfc0eedb4b7868770e08a6ac575a64e2fc';  
const devEnvironment = process.env.NODE_ENV === 'development';

const commerceConfig = {
  axiosConfig: {
    headers: {
      'X-Chec-Agent': 'commerce.js/v2',
      'Chec-Version': '2021-09-29',
    },
  },
};

if (devEnvironment && !checAPIKey) {
  throw Error('error');
}

export default new Commerce(
  checAPIKey,
  devEnvironment,
  commerceConfig,
);
