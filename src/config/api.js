// Centralized API configuration driven by environment variables
export const API_BASE_URL = import.meta.env.PUBLIC_API_URL || import.meta.env.BASE_URL_API || '';
