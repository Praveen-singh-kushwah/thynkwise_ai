import { getStrapiBaseUrl, normalizeStrapiValue } from './client';

export function getStrapiMediaUrl(media) {
  const asset = normalizeStrapiValue(media);
  const url = asset?.url;

  if (!url) {
    return null;
  }

  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  return `${getStrapiBaseUrl()}${url}`;
}
