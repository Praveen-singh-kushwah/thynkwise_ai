export default function SectionHeader({
  badge,
  badgeClassName = 'badge bc',
  title,
  description,
  centered = false,
}) {
  return (
    <>
      <div className={`gpu-sec-ey rv${centered ? ' gpu-center' : ''}`}>
        <span className={badgeClassName}>{badge}</span>
      </div>
      <h2 className={`gpu-sec-title rv${centered ? ' gpu-center' : ''}`}>{title}</h2>
      {description ? (
        <p className={`gpu-sec-sub rv${centered ? ' gpu-center' : ''}`}>{description}</p>
      ) : null}
    </>
  );
}
