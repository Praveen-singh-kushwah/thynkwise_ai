export default function SectionHeader({
  badge,
  badgeClassName,
  title,
  description,
  centered = false,
  titleStyle,
  descriptionStyle,
}) {
  const alignmentClassName = centered ? ' cy-sec-center' : '';

  return (
    <>
      <div className={`cy-sec-ey rv${alignmentClassName}`}>
        <span className={badgeClassName}>{badge}</span>
      </div>
      <h2 className={`cy-sec-title rv${alignmentClassName}`} style={titleStyle}>
        {title}
      </h2>
      {description ? (
        <p
          className={`cy-sec-sub rv${alignmentClassName}`}
          style={descriptionStyle}
        >
          {description}
        </p>
      ) : null}
    </>
  );
}
