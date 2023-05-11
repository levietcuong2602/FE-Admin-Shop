import DATE_TIME_PICKER_TYPES from './dateTimePickerType';
import { ERROR_CODE_SYSTEM } from './responseCode';
import { ROUTES } from './routes';

export const A_WEEK = 7 * 24 * 60 * 60 * 1000;
export const PAGINATION_LIMIT = 10;
export const ALL = 'ALL';

export const FILTER_TYPE = {
  SELECT: 'SELECT',
  DATE_RANGE: 'DATERANGE',
  TEXT_FIELD: 'TEXT_FIELD',
  SWITCH: 'SWITCH',
  MULTIPLE_SELECT: 'MULTIPLE_SELECT',
  AUTOCOMPLETE: 'AUTOCOMPLETE',
};

export const STATUS_USER = {
  DEACTIVE: '0',
  ACTIVE: 1,
};

export const GRANT_TYPE = {
  CLIENT_CREDENTIAL: 'client_credentials',
  AUTHORIZATION_CODE: 'authorization_code',
  REFRESH_TOKEN: 'refresh_token',
  PASSWORD: 'password',
};

export const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const API_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export { DATE_TIME_PICKER_TYPES, ERROR_CODE_SYSTEM, ROUTES };
