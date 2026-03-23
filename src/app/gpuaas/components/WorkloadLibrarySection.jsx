'use client';

import { useMemo, useState } from 'react';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { workloadTabs } from './data';

function normaliseWorkloadType(type, fallback, index) {
  return {
    id: type.id?.toString() || fallback.id || `workload-${index}`,
    label: type.title || fallback.label || `Workload ${index + 1}`,
    cards:
      type.card?.map((card, cardIndex) => ({
        id: card.id,
        title:
          card.title ||
          fallback.cards[cardIndex % fallback.cards.length].title,
        description:
          card.description ||
          fallback.cards[cardIndex % fallback.cards.length].description,
        tags: card.points?.map((item) => item.point).filter(Boolean).length
          ? card.points.map((item) => item.point).filter(Boolean)
          : fallback.cards[cardIndex % fallback.cards.length].tags,
        iconUrl: getStrapiMediaUrl(card.icon),
        icon: fallback.cards[cardIndex % fallback.cards.length].icon,
      })) || fallback.cards,
  };
}

export default function WorkloadLibrarySection({ section }) {
  const tabs = useMemo(() => {
    if (!section?.types?.length) {
      return workloadTabs;
    }

    return section.types.map((type, index) =>
      normaliseWorkloadType(type, workloadTabs[index % workloadTabs.length], index),
    );
  }, [section]);

  const heading = section?.heading?.[0];
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || workloadTabs[0].id);
  const active = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="sec">
      <div className="container">
        <div className="sec-ey rv">
          <span className="badge bg-badge">Workload Library</span>
        </div>
        <h2 className="sec-ti rv">{heading?.title || 'What Are You Computing?'}</h2>
        <p className="sec-su rv">
          {heading?.description ||
            "Every workload maps to a different GPU, topology, and delivery model. Select your domain - we'll tell you exactly what hardware you need and why."}
        </p>

        <div className="uc-tabs rv">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`uc-tab${activeTab === tab.id ? ' on' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="uc-panel on" id={`uc-${active.id}`}>
          <div className="uc-grid">
            {(active.cards || []).map((card, index) => {
              const gpuTags = (card.tags || []).slice(0, 2);
              const frameworkTags = (card.tags || []).slice(2);

              return (
                <div key={card.id || `${card.title}-${index}`} className={`uc-card rv d${(index % 3) + 1}`}>
                  <span className="uc-ico">
                    {card.iconUrl ? (
                      <CmsImage
                        src={card.iconUrl}
                        alt={card.title}
                        style={{ width: 24, height: 24, objectFit: 'contain' }}
                      />
                    ) : (
                      card.icon
                    )}
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div>
                    {gpuTags.map((tag, tagIndex) => (
                      <span key={`${card.id || card.title}-gpu-${tagIndex}`} className="uc-gpu">
                        {tag}
                      </span>
                    ))}
                    {frameworkTags.map((tag, tagIndex) => (
                      <span
                        key={`${card.id || card.title}-framework-${tagIndex}`}
                        className="uc-framework"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
