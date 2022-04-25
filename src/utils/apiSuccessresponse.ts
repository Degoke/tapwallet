import { ApiSuccessResponse } from 'src/common/types/response.type';

export const apiSuccessResponse = <T>(data: T): ApiSuccessResponse<T> => {
  return {
    message: 'Success',
    data,
  };
};
