'use client';

import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { servicePanels, serviceTabs } from './data';

function ServicesPanel({ cards }) {
  return (
    <div className="cy-service-grid">
      {cards.map((card) => (
        <div key={card.title} className="cy-service-card" style={card.cardStyle}>
          <div className="cy-service-head">
            <div className="cy-service-icon" style={card.iconStyle}>
              {card.icon}
            </div>
            <div className="cy-service-title">{card.title}</div>
          </div>
          <ul className="cy-service-list">
            {card.items.map((item) => (
              <li key={item}>{item}</li>
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
      {cards.map((card) => (
        <div key={card.title} className="cy-consult-card">
          <div className="cy-consult-icon" style={card.iconStyle}>
            {card.icon}
          </div>
          <div className="cy-consult-body">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="cy-consult-tags">
              {card.tags.map((tag) => (
                <span key={tag} className="cy-consult-tag">
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

export default function ServiceCatalogueSection() {
  const [activeTab, setActiveTab] = useState('detect');
  const activePanel = servicePanels[activeTab];

  return (
    <section className="cy-services-sec">
      <div className="container">
        <SectionHeader
          badge="Service Catalogue"
          badgeClassName="badge bb"
          title="Every Service. In Detail."
          description={"Click a category tab to explore services in depth \u2014 from reactive SOC operations to proactive governance and consulting builds."}
        />

        <div className="cy-tab-row" role="tablist" aria-label="Cybersecurity service categories">
          {serviceTabs.map((tab) => (
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
