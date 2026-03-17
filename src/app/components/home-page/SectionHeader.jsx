export default function SectionHeader({
  badge,
  badgeClassName,
  title,
  subtitle,
  titleStyle,
}) {
  return (
    <>
      <div className="sec-ey rv">
        <span className={badgeClassName}>{badge}</span>
      </div>
      <h2 className="sec-ti rv" style={titleStyle}>
        {title}
      </h2>
      {subtitle ? <p className="sec-sub rv">{subtitle}</p> : null}
    </>
  );
}
