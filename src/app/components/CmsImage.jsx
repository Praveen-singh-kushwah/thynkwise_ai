/* eslint-disable @next/next/no-img-element */

export default function CmsImage({ src, alt, className, style }) {
  if (!src) {
    return null;
  }

  return <img src={src} alt={alt || ''} className={className} style={style} loading="lazy" />;
}
