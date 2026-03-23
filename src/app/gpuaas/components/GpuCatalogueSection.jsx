'use client';

import { useMemo, useState } from 'react';
import { architectureTabs } from './data';

const ARCHITECTURE_STYLES = {
  blackwell: {
    logoBackground: 'rgba(255,107,53,.12)',
    logoColor: 'var(--gpu-orange)',
    logoBorder: '1px solid rgba(255,107,53,.2)',
    pillBackground: 'rgba(255,107,53,.12)',
    pillColor: 'var(--gpu-orange)',
    cardAccent: 'var(--gpu-orange)',
    primaryTagBackground: 'rgba(255,107,53,.1)',
    primaryTagColor: 'var(--gpu-orange)',
    primaryTagBorder: '1px solid rgba(255,107,53,.2)',
    secondaryTagBackground: 'rgba(0,229,255,.1)',
    secondaryTagColor: 'var(--gpu-cyan)',
    secondaryTagBorder: '1px solid rgba(0,229,255,.18)',
    tertiaryTagBackground: 'rgba(255,255,255,.06)',
    tertiaryTagColor: 'var(--gpu-copy-dim)',
    tertiaryTagBorder: '1px solid rgba(255,255,255,.06)',
  },
  hopper: {
    logoBackground: 'rgba(0,229,255,.12)',
    logoColor: 'var(--gpu-cyan)',
    logoBorder: '1px solid rgba(0,229,255,.2)',
    pillBackground: 'rgba(0,229,255,.12)',
    pillColor: 'var(--gpu-cyan)',
    cardAccent: 'var(--gpu-cyan)',
    primaryTagBackground: 'rgba(0,229,255,.1)',
    primaryTagColor: 'var(--gpu-cyan)',
    primaryTagBorder: '1px solid rgba(0,229,255,.18)',
    secondaryTagBackground: 'rgba(0,255,136,.1)',
    secondaryTagColor: 'var(--gpu-green)',
    secondaryTagBorder: '1px solid rgba(0,255,136,.18)',
    tertiaryTagBackground: 'rgba(255,255,255,.06)',
    tertiaryTagColor: 'var(--gpu-copy-dim)',
    tertiaryTagBorder: '1px solid rgba(255,255,255,.06)',
  },
  amd: {
    logoBackground: 'rgba(168,85,247,.12)',
    logoColor: 'var(--gpu-purple)',
    logoBorder: '1px solid rgba(168,85,247,.2)',
    pillBackground: 'rgba(168,85,247,.12)',
    pillColor: 'var(--gpu-purple)',
    cardAccent: 'var(--gpu-purple)',
    primaryTagBackground: 'rgba(168,85,247,.1)',
    primaryTagColor: 'var(--gpu-purple)',
    primaryTagBorder: '1px solid rgba(168,85,247,.2)',
    secondaryTagBackground: 'rgba(0,255,136,.1)',
    secondaryTagColor: 'var(--gpu-green)',
    secondaryTagBorder: '1px solid rgba(0,255,136,.18)',
    tertiaryTagBackground: 'rgba(255,255,255,.06)',
    tertiaryTagColor: 'var(--gpu-copy-dim)',
    tertiaryTagBorder: '1px solid rgba(255,255,255,.06)',
  },
};

function normaliseArchitectureType(type, fallback, index) {
  return {
    id: type.id?.toString() || fallback.id || `arch-${index}`,
    label: type.title || fallback.label || `Architecture ${index + 1}`,
    shortCode: type.section_1?.short_code || fallback.shortCode || 'GPU',
    title: type.section_1?.name || fallback.title,
    description: type.section_1?.description || fallback.description,
    tagPills: type.section_1?.points?.map((item) => item.point).filter(Boolean).length
      ? type.section_1.points.map((item) => item.point).filter(Boolean)
      : fallback.tagPills,
    cards: type.gpu_card?.map((card, cardIndex) => ({
      id: card.id,
      badge: card.tag?.[0]?.point || fallback.cards[cardIndex % fallback.cards.length]?.badge,
      archPill: card.variant?.[0]?.point || fallback.cards[cardIndex % fallback.cards.length]?.archPill,
      model: card.model || fallback.cards[cardIndex % fallback.cards.length]?.model,
      name: card.name || fallback.cards[cardIndex % fallback.cards.length]?.name,
      subtitle: card.variant?.[1]?.point || fallback.cards[cardIndex % fallback.cards.length]?.subtitle,
      specs: card.list_point?.map((item) => ({ label: item.label, value: item.value })).filter((item) => item.label || item.value).length
        ? card.list_point.map((item) => ({ label: item.label, value: item.value }))
        : fallback.cards[cardIndex % fallback.cards.length]?.specs || [],
      tags: card.tag?.slice(1).map((item) => item.point).filter(Boolean).length
        ? card.tag.slice(1).map((item) => item.point).filter(Boolean)
        : fallback.cards[cardIndex % fallback.cards.length]?.tags || [],
    })) || fallback.cards,
  };
}

function getArchitectureStyle(tabId) {
  return ARCHITECTURE_STYLES[tabId] || {
    logoBackground: 'rgba(0,229,255,.12)',
    logoColor: 'var(--gpu-cyan)',
    logoBorder: '1px solid rgba(0,229,255,.2)',
    pillBackground: 'rgba(0,229,255,.12)',
    pillColor: 'var(--gpu-cyan)',
    cardAccent: 'var(--gpu-cyan)',
    primaryTagBackground: 'rgba(0,229,255,.1)',
    primaryTagColor: 'var(--gpu-cyan)',
    primaryTagBorder: '1px solid rgba(0,229,255,.18)',
    secondaryTagBackground: 'rgba(0,255,136,.1)',
    secondaryTagColor: 'var(--gpu-green)',
    secondaryTagBorder: '1px solid rgba(0,255,136,.18)',
    tertiaryTagBackground: 'rgba(255,255,255,.06)',
    tertiaryTagColor: 'var(--gpu-copy-dim)',
    tertiaryTagBorder: '1px solid rgba(255,255,255,.06)',
  };
}

function getBadgeClassName(badge) {
  const value = badge?.toUpperCase();
  if (value === 'NEW') return 'sc-badge-new';
  if (value === 'HOT') return 'sc-badge-hot';
  return 'sc-badge-hot';
}

function isHighlightedSpec(label = '') {
  const value = label.toLowerCase();
  return value.includes('memory') || value.includes('bandwidth') || value.includes('tensor');
}

export default function GpuCatalogueSection({ section }) {
  const tabs = useMemo(() => {
    if (!section?.gpu_architecture_types?.length) {
      return architectureTabs;
    }

    return section.gpu_architecture_types.map((type, index) =>
      normaliseArchitectureType(type, architectureTabs[index % architectureTabs.length], index),
    );
  }, [section]);

  const [activeTab, setActiveTab] = useState(tabs[0]?.id || architectureTabs[0].id);
  const active = tabs.find((tab) => tab.id === activeTab) || tabs[0];
  const theme = getArchitectureStyle(active?.id);
  const gridClassName = active?.cards?.length <= 3 ? 'spec-grid spec-grid-3' : 'spec-grid';

  return (
    <section className="sec">
      <div className="container">
        <div className="sec-ey rv">
          <span className="badge bc">Complete GPU Catalogue</span>
        </div>
        <h2 className="sec-ti rv">{section?.heading?.title || 'Every Architecture. Every Tier.'}</h2>
        <p className="sec-su rv">
          {section?.heading?.description ||
            'From the latest Blackwell systems to AMD Instinct and Intel Gaudi - every GPU is matched to the right workload.'}
        </p>

        <div className="cat-tabs rv">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`cat-tab${activeTab === tab.id ? ' on' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="gpu-arch-panel on" id={`gpu-arch-${active.id}`}>
          <div className="arch-head rv">
            <div
              className="arch-logo"
              style={{
                background: theme.logoBackground,
                color: theme.logoColor,
                border: theme.logoBorder,
              }}
            >
              {active.shortCode}
            </div>
            <div className="arch-head-body">
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <div className="arch-head-tags">
                {(active.tagPills || []).map((tag, index) => (
                  <span
                    key={`${active.id}-${index}`}
                    className="arch-tag"
                    style={
                      index === 0
                        ? {
                            background: theme.primaryTagBackground,
                            color: theme.primaryTagColor,
                            border: theme.primaryTagBorder,
                          }
                        : index === 1
                          ? {
                              background: theme.secondaryTagBackground,
                              color: theme.secondaryTagColor,
                              border: theme.secondaryTagBorder,
                            }
                          : {
                              background: theme.tertiaryTagBackground,
                              color: theme.tertiaryTagColor,
                              border: theme.tertiaryTagBorder,
                            }
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={gridClassName}>
            {(active.cards || []).map((card, index) => (
              <div
                key={card.id || `${card.name}-${index}`}
                className={`spec-card rv d${(index % 3) + 1}`}
                style={{ '--sc-accent': theme.cardAccent }}
              >
                {card.badge ? (
                  <span className={getBadgeClassName(card.badge)}>{card.badge}</span>
                ) : null}
                <div className="sc-chip">
                  <span
                    className="sc-arch-pill"
                    style={{ background: theme.pillBackground, color: theme.pillColor }}
                  >
                    {card.archPill}
                  </span>
                  <span className="sc-gen">{card.model}</span>
                </div>
                <div className="sc-name">{card.name}</div>
                <div className="sc-sub">{card.subtitle}</div>
                <div className="sc-specs">
                  {(card.specs || []).map((spec, specIndex) => (
                    <div key={`${card.id || card.name}-${specIndex}`} className="spec-row">
                      <span className="spec-lbl">{spec.label}</span>
                      <span className={`spec-val${isHighlightedSpec(spec.label) ? ' hi' : ''}`}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
                <hr className="sc-divider" />
                <div className="sc-tags">
                  {(card.tags || []).map((tag, tagIndex) => (
                    <span key={`${card.id || card.name}-${tagIndex}`} className="sc-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
