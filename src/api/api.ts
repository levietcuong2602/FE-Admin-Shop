import type { ResponseData } from '@/interface';

import axios from 'axios';
import camelCase from 'camelcase-keys';

import { API_URL } from '@/configs';
import getErrorMessage from '@/errors/getErrorMessage';
import { getCookie } from '@/utils/cookie';

const axiosClient = axios.create({
  baseURL: `${API_URL}/api/v1`,
  responseType: 'json',
  timeout: 30 * 1000,
});

axiosClient.interceptors.request.use(async config => {
  const accessToken = getCookie('accessToken');

  if (accessToken && config) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  response => {
    if (!response) return {};

    const { data } = response;

    if (data && data instanceof Blob) {
      return data;
    }

    let newData: ResponseData = {
      status: 200,
      data: null,
    };

    if (data) {
      newData = camelCase(data, { deep: true });
    }

    if (!newData.status) {
      const errorMessage = getErrorMessage(newData?.code || 0);

      throw new Error(errorMessage);
    }

    return newData;
  },
  error => {
    if (error.response && error.response.status) {
      const { response } = error;
      const code = response.data.code || response.status;
      const errorMessage = getErrorMessage(code);

      throw new Error(errorMessage);
    }
  },
);

export default axiosClient;
