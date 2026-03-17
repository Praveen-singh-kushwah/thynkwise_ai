export default function SectionHeader({
  badge,
  badgeClassName,
  badgeStyle,
  title,
  titleStyle,
  description,
  descriptionStyle,
}) {
  return (
    <>
      <div className="sec-ey rv">
        <span className={badgeClassName} style={badgeStyle}>
          {badge}
        </span>
      </div>
      <h2 className="sec-ti rv" style={titleStyle}>
        {title}
      </h2>
      {description ? (
        <p className="sec-su rv" style={descriptionStyle}>
          {description}
        </p>
      ) : null}
    </>
  );
}
