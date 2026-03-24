function getEnvValue(...keys) {
  for (const key of keys) {
    const value = process.env[key];
    if (value) {
      return value;
    }
  }

  return '';
}

export function getStrapiBaseUrl() {
  return getEnvValue(
    'NEXT_PUBLIC_STRAPI_URL',
    'NEXT_PUBLIC_CMS_URL',
    'STRAPI_URL',
    'CMS_URL',
  ).replace(/\/$/, '');
}

export function normalizeStrapiValue(value) {
  if (Array.isArray(value)) {
    return value.map(normalizeStrapiValue);
  }

  if (!value || typeof value !== 'object') {
    return value;
  }

  if ('data' in value && Object.keys(value).every((key) => key === 'data' || key === 'meta')) {
    return normalizeStrapiValue(value.data);
  }

  const source = value.attributes
    ? {
        id: value.id,
        documentId: value.documentId,
        ...value.attributes,
      }
    : value;

  const normalizedValue = Object.fromEntries(
    Object.entries(source).map(([key, nestedValue]) => [key, normalizeStrapiValue(nestedValue)]),
  );

  if (
    typeof normalizedValue.url === 'string' &&
    normalizedValue.url.startsWith('/') &&
    getStrapiBaseUrl()
  ) {
    normalizedValue.url = `${getStrapiBaseUrl()}${normalizedValue.url}`;
  }

  return normalizedValue;
}

export async function fetchStrapiDocument(path, { tags = [] } = {}) {
  const baseUrl = getStrapiBaseUrl();

  if (!baseUrl) {
    return null;
  }

  const headers = {};
  const token = getEnvValue('STRAPI_API_TOKEN', 'CMS_API_TOKEN');

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${baseUrl}${path}`, {
      headers,
      next: { tags },
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`Strapi request failed with status ${response.status}`);
    }

    const json = await response.json();
    return normalizeStrapiValue(json?.data ?? null);
  } catch (error) {
    console.error(`Failed to fetch Strapi document for ${path}`, error);
    return null;
  }
}
