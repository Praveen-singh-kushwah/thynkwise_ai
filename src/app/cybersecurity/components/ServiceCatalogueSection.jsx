'use client';

import { useMemo, useState } from 'react';
import SectionHeader from './SectionHeader';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { servicePanels, serviceTabs } from './data';

function ServicesPanel({ cards }) {
  return (
    <div className="cy-service-grid">
      {cards.map((card, index) => (
        <div key={card.id || `${card.title}-${index}`} className="cy-service-card" style={card.cardStyle}>
          <div className="cy-service-head">
            <div className="cy-service-icon" style={card.iconStyle}>
              {card.iconUrl ? (
                <CmsImage src={card.iconUrl} alt={card.title} style={{ width: 24, height: 24, objectFit: 'contain' }} />
              ) : (
                card.icon
              )}
            </div>
            <div className="cy-service-title">{card.title}</div>
          </div>
          <ul className="cy-service-list">
            {card.items.map((item, itemIndex) => (
              <li key={`${card.id || card.title}-${itemIndex}`}>{item}</li>
            ))}
          </ul>
          <span className="cy-service-tag" style={card.tagStyle}>
            {card.tag}
          </span>
        </div>
      ))}
    </div>
  );
}

function ConsultPanel({ cards }) {
  return (
    <div className="cy-consult-grid">
      {cards.map((card, index) => (
        <div key={card.id || `${card.title}-${index}`} className="cy-consult-card">
          <div className="cy-consult-icon" style={card.iconStyle}>
            {card.iconUrl ? (
              <CmsImage src={card.iconUrl} alt={card.title} style={{ width: 24, height: 24, objectFit: 'contain' }} />
            ) : (
              card.icon
            )}
          </div>
          <div className="cy-consult-body">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="cy-consult-tags">
              {card.tags.map((tag, tagIndex) => (
                <span key={`${card.id || card.title}-${tagIndex}`} className="cy-consult-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const CATEGORY_STYLES = [
  { accent: 'var(--red)', iconBg: 'var(--red-pale)' },
  { accent: 'var(--orange)', iconBg: 'var(--orange-pale)' },
  { accent: 'var(--blue)', iconBg: 'var(--blue-pale)' },
  { accent: 'var(--green)', iconBg: 'var(--green-pale)' },
];

export default function ServiceCatalogueSection({ section }) {
  const cmsTabs = useMemo(() => {
    if (!section?.service_category?.length) {
      return null;
    }

    return section.service_category.map((category, index) => ({
      id: category.id?.toString() || `tab-${index}`,
      label: category.category_name,
      cards: category.services?.map((service, serviceIndex) => {
        const style = CATEGORY_STYLES[index % CATEGORY_STYLES.length];
        return {
          id: service.id,
          title: service.title,
          iconUrl: getStrapiMediaUrl(service.icon),
          iconStyle: { background: style.iconBg },
          cardStyle: { '--cy-acc': style.accent },
          items: service.description_points?.map((item) => item.point).filter(Boolean) || [],
          tag: service.tag,
          tagStyle: {
            background: style.iconBg,
            color: style.accent,
            borderColor: 'rgba(0,0,0,.08)',
          },
          icon: servicePanels.detect.cards[serviceIndex % servicePanels.detect.cards.length].icon,
        };
      }) || [],
    }));
  }, [section]);

  const tabs = cmsTabs?.length ? cmsTabs : serviceTabs;
  const defaultTab = tabs[0]?.id || 'detect';
  const [activeTab, setActiveTab] = useState(defaultTab);
  const activePanel = cmsTabs?.length
    ? { type: 'services', cards: tabs.find((tab) => tab.id === activeTab)?.cards || tabs[0]?.cards || [] }
    : servicePanels[activeTab];

  return (
    <section className="cy-services-sec">
      <div className="container">
        <SectionHeader
          badge="Service Catalogue"
          badgeClassName="badge bb"
          title={section?.heading || 'Every Service. In Detail.'}
          description={section?.description || "Click a category tab to explore services in depth — from reactive SOC operations to proactive governance and consulting builds."}
        />

        <div className="cy-tab-row" role="tablist" aria-label="Cybersecurity service categories">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`cy-tab-btn${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`cy-tab-${tab.id}`}
              id={`cy-tab-button-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className="cy-tab-panel active"
          id={`cy-tab-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`cy-tab-button-${activeTab}`}
        >
          {activePanel.type === 'consult' ? (
            <ConsultPanel cards={activePanel.cards} />
          ) : (
            <ServicesPanel cards={activePanel.cards} />
          )}
        </div>
      </div>
    </section>
  );
}

