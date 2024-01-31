import axios from 'axios';
import myConfig from '@/myconfig';
import getTokenFromLocalStorage from '../user/GetTokenLocalStorage';

async function NewChurch(formData) {
  try {
    const token = await getTokenFromLocalStorage();
    console.log(formData);
    const response = await axios.post(
      `${myConfig.BASE_URL}/api/v1/church/create`,
      formData,
      {
        headers: {
          'Soteria-Dashboard': 'sDwNcXXkStbAl1JlKwsAvYV+qI1bJqV/PxpeoQMPo6c=',
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response.data; // If you need to return the created church data
  } catch (error) {
    console.error('Error creating church:', error);
    console.log(error.response);
    throw error;
  }
}

export default NewChurch;