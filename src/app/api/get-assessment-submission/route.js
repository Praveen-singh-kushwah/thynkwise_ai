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

function sanitizeStringArray(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => (typeof item === 'string' ? item.trim() : ''))
    .filter(Boolean);
}

function buildPayload(body) {
  const answers = body.answers && typeof body.answers === 'object' ? body.answers : {};
  const results = body.results && typeof body.results === 'object' ? body.results : {};

  return {
    firstName: sanitizeText(body.firstName),
    companyName: sanitizeText(body.companyName),
    businessEmail: sanitizeText(body.businessEmail),
    whatsappPhone: sanitizeText(body.whatsappPhone),
    role: sanitizeText(body.role),
    currentCloudSituation: sanitizeText(answers.currentCloudSituation),
    monthlyCloudSpend: sanitizeText(answers.monthlyCloudSpend),
    currentCloudProviders: sanitizeStringArray(answers.currentCloudProviders),
    biggestCloudPainPoint: sanitizeText(answers.biggestCloudPainPoint),
    applicableRegulations: sanitizeStringArray(answers.applicableRegulations),
    cloudOperationsModel: sanitizeText(answers.cloudOperationsModel),
    investmentHorizon: sanitizeText(answers.investmentHorizon),
    priorityOutcome: sanitizeText(answers.priorityOutcome),
    readinessScore:
      typeof results.readinessScore === 'number' && Number.isFinite(results.readinessScore)
        ? results.readinessScore
        : null,
    readinessGrade: sanitizeText(results.readinessGrade),
    scoreDescription: sanitizeText(results.scoreDescription),
    recommendedActions: sanitizeStringArray(results.recommendedActions),
    sourcePage: 'get-assessment',
    metadata: body.metadata && typeof body.metadata === 'object' ? body.metadata : {},
  };
}

function validatePayload(payload) {
  if (!payload.firstName) return 'First name is required.';
  if (!payload.companyName) return 'Company name is required.';
  if (!payload.businessEmail) return 'Business email is required.';
  if (!payload.whatsappPhone) return 'WhatsApp or phone is required.';
  if (!payload.role) return 'Role is required.';
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

  const response = await fetch(`${strapiBaseUrl}/api/get-assessment-submissions`, {
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
