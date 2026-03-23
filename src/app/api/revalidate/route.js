import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

const REVALIDATION_MAP = {
  'home-page': {
    paths: ['/'],
    tags: ['home-page'],
  },
  'managed-services-page': {
    paths: ['/managed-services'],
    tags: ['managed-services-page'],
  },
  'cloud-migration-page': {
    paths: ['/cloud-migration'],
    tags: ['cloud-migration-page'],
  },
  'cybersecurity-page': {
    paths: ['/cybersecurity'],
    tags: ['cybersecurity-page'],
  },
  'gpuaas-page': {
    paths: ['/gpuaas'],
    tags: ['gpuaas-page'],
  },
};

function isAuthorized(request) {
  const expectedSecret = process.env.STRAPI_WEBHOOK_SECRET;

  if (!expectedSecret) {
    return true;
  }

  const url = new URL(request.url);
  const providedSecret =
    request.headers.get('x-strapi-secret') || url.searchParams.get('secret');

  return providedSecret === expectedSecret;
}

export async function POST(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: 'Invalid webhook secret.' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const model = body?.model;

  if (!model) {
    return NextResponse.json({ message: 'Webhook payload is missing model.' }, { status: 400 });
  }

  const config = REVALIDATION_MAP[model];

  if (!config) {
    return NextResponse.json(
      { revalidated: false, message: `No revalidation mapping found for model "${model}".` },
      { status: 202 },
    );
  }

  config.tags.forEach((tag) => revalidateTag(tag));
  config.paths.forEach((path) => revalidatePath(path));

  return NextResponse.json({
    revalidated: true,
    model,
    paths: config.paths,
    tags: config.tags,
  });
}
