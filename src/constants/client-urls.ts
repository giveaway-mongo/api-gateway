import {
  AUTH_CLIENT,
  USER_CLIENT,
  CATEGORY_CLIENT,
  DEAL_CLIENT,
} from './client-names';

export const CLIENT_URLS = {
  [AUTH_CLIENT]: 'auth-service:50051',
  [USER_CLIENT]: 'auth-service:50051',
  [CATEGORY_CLIENT]: 'category-service:50051',
  [DEAL_CLIENT]: 'deal-service:50051',
} as const;
