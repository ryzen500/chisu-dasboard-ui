export const apiUrl = (endpoint: string): string => {
    const baseUrl = import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_REACT_APP_PROD_API_URL
        : import.meta.env.VITE_REACT_APP_DEV_API_URL;

    if (!baseUrl) {
        throw new Error('API URL is not defined');
    }

    return `${baseUrl.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
};
