import { NextResponse } from 'next/server';

function getEnvValue(...keys) {
  for (const key of keys) {
    const value = process.env[key];
    if (value) {
      return value;
    }
  }

  return '';
}

function getStrapiBaseUrl() {
  return getEnvValue(
    'STRAPI_URL',
    'CMS_URL',
    'NEXT_PUBLIC_STRAPI_URL',
    'NEXT_PUBLIC_CMS_URL',
  ).replace(/\/$/, '');
}

function sanitizeText(value) {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim();
}

function buildPayload(body) {
  return {
    fullName: sanitizeText(body.fullName),
    designation: sanitizeText(body.designation),
    businessEmail: sanitizeText(body.businessEmail),
    whatsappPhone: sanitizeText(body.whatsappPhone),
    companyName: sanitizeText(body.companyName),
    industry: sanitizeText(body.industry),
    companySize: sanitizeText(body.companySize),
    currentCloudProvider: sanitizeText(body.currentCloudProvider),
    monthlyCloudSpend: sanitizeText(body.monthlyCloudSpend),
    discussionNotes: sanitizeText(body.discussionNotes),
    preferredDate: sanitizeText(body.preferredDate),
    preferredTimeSlot: sanitizeText(body.preferredTimeSlot),
    meetingFormat: sanitizeText(body.meetingFormat),
    sourcePage: 'book-demo',
    metadata: body.metadata && typeof body.metadata === 'object' ? body.metadata : {},
  };
}

function validatePayload(payload) {
  if (!payload.fullName) return 'Full name is required.';
  if (!payload.designation) return 'Designation is required.';
  if (!payload.businessEmail) return 'Business email is required.';
  if (!payload.whatsappPhone) return 'WhatsApp or phone is required.';
  if (!payload.companyName) return 'Company name is required.';
  return null;
}

export async function POST(request) {
  const strapiBaseUrl = getStrapiBaseUrl();

  if (!strapiBaseUrl) {
    return NextResponse.json(
      { message: 'Missing Strapi base URL configuration.' },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
  }

  const payload = buildPayload(body);
  const validationError = validatePayload(payload);

  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  const token = getEnvValue('STRAPI_WRITE_API_TOKEN', 'STRAPI_API_TOKEN', 'CMS_API_TOKEN');
  const headers = { 'Content-Type': 'application/json' };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${strapiBaseUrl}/api/book-demo-submissions`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ data: payload }),
  }).catch(() => null);

  if (!response) {
    return NextResponse.json(
      { message: 'Unable to reach Strapi CMS.' },
      { status: 502 },
    );
  }

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const message = errorBody?.error?.message || `Strapi error ${response.status}`;
    return NextResponse.json({ message }, { status: response.status });
  }

  return NextResponse.json({ success: true });
}
