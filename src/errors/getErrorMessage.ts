import { ERROR_CODE_SYSTEM } from '@/constants';

const getErrorMessage = (code: number) => {
  switch (code) {
    case ERROR_CODE_SYSTEM.BAD_REQUEST:
      return 'badRequest';
    case ERROR_CODE_SYSTEM.UNAUTHORIZED:
      return 'unauthorized';
    case ERROR_CODE_SYSTEM.FORBIDDEN:
      return 'forbidden';
    case ERROR_CODE_SYSTEM.NOT_FOUND:
      return 'notFound';
    default:
      return 'serverError';
  }
};

export default getErrorMessage;
