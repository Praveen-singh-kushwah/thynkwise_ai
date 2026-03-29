function unwrapRichText(html, tags) {
  if (!html) {
    return html;
  }

  const trimmed = html.trim();

  for (const tag of tags) {
    const pattern = new RegExp(`^<${tag}\\b[^>]*>([\\s\\S]*)</${tag}>$`, 'i');
    const match = trimmed.match(pattern);

    if (match) {
      return match[1];
    }
  }

  return trimmed;
}

function ComparisonColumn({ column, highlighted = false }) {
  if (!column) {
    return null;
  }

  const titleHtml = unwrapRichText(column.title, ['h1', 'h2', 'h3', 'p', 'div']);
  const subtitleHtml = unwrapRichText(column.subtitle, ['span', 'p', 'div']);
  const points = column.points || [];

  return (
    <div className={`vs-col${highlighted ? ' good' : ''}`}>
      <div className="vs-head">
        {column.icon ? (
          <div className={`vs-ico ${highlighted ? 'vi-good' : 'vi-bad'}`}>{column.icon}</div>
        ) : null}
        <h3>
          {titleHtml ? <span dangerouslySetInnerHTML={{ __html: titleHtml }} /> : null}
          {subtitleHtml ? <span className="vs-subtitle" dangerouslySetInnerHTML={{ __html: subtitleHtml }} /> : null}
        </h3>
      </div>
      {points.map((item, index) => (
        <div key={item.id || `${item.title}-${index}`} className="vs-item">
          <div className={`vchk ${item.included ? 'vc-yes' : 'vc-no'}`}>{item.included ? '\u2713' : '\u2715'}</div>
          <div className="vs-text">
            {item.title ? <h4>{item.title}</h4> : null}
            {item.description ? <p>{item.description}</p> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ComparisonSection({ section }) {
  if (!section) {
    return null;
  }

  const hasContent =
    section.eyebrow ||
    section.title ||
    section.description ||
    section.foreign_hyperscaler_column ||
    section.indian_csp_column;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="ps ps-w">
      <div className="container">
        {section.eyebrow ? (
          <div className="sec-eyebrow rv">
            <span className="badge bb">{section.eyebrow}</span>
          </div>
        ) : null}
        {section.title ? <h2 className="sec-title rv">{section.title}</h2> : null}
        {section.description ? <p className="sec-sub rv">{section.description}</p> : null}
        <div className="vs-grid rv d1">
          <ComparisonColumn column={section.foreign_hyperscaler_column} />
          <ComparisonColumn
            column={section.indian_csp_column}
            highlighted={section.indian_csp_column?.highlighted !== false}
          />
        </div>
      </div>
    </section>
  );
}
