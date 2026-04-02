export interface TDefaultResponse<T> {
  message: string;
  statusCode: number;
  isError: boolean;
  data: T
}
