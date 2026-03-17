export default function SectionHeader({
  badge,
  badgeClassName,
  title,
  description,
}) {
  return (
    <>
      <div className="sec-ey rv">
        <span className={badgeClassName}>{badge}</span>
      </div>
      <h2 className="sec-ti rv">{title}</h2>
      {description ? <p className="sec-su rv">{description}</p> : null}
    </>
  );
}
