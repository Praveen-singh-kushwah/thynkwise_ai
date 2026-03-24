'use client';

import { useEffect, useState } from 'react';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const defaultHeading = {
  title: 'An Ecosystem Built for Every Enterprise Need.',
  description:
    "Thynkwise works with the world's leading cloud, infrastructure, security, and technology providers - so your architecture is never constrained by our partnerships.",
};

const defaultCards = [
  { title: 'Amazon Web Services', subtitle: 'Advanced Tier Partner' },
  { title: 'Microsoft Azure', subtitle: 'Cloud Platform' },
  { title: 'Google Cloud', subtitle: 'Cloud Platform' },
  { title: 'Cisco', subtitle: 'Networking & Security' },
  { title: 'Fortinet', subtitle: 'Cybersecurity' },
];

function getCardsPerPage(width) {
  if (width <= 768) {
    return 2;
  }

  if (width <= 1024) {
    return 3;
  }

  return 5;
}

function getInitials(name) {
  return (name || '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function chunkCards(cards, size) {
  const pages = [];
  for (let i = 0; i < cards.length; i += size) {
    pages.push(cards.slice(i, i + size));
  }
  return pages;
}

export default function TechnologyPartnersSection({ section }) {
  const heading = section?.heading || defaultHeading;
  const cards = section?.partner_card?.length ? section.partner_card : defaultCards;
  const [cardsPerPage, setCardsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const updateCardsPerPage = () => setCardsPerPage(getCardsPerPage(window.innerWidth));

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);

    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const pages = chunkCards(cards, cardsPerPage);
  const maxPage = Math.max(pages.length - 1, 0);
  const activePage = Math.min(currentPage, maxPage);

  return (
    <section className="partner-section" id="partners">
      <div className="container">
        <span className="badge bo sec-ey rv">Technology Partners</span>
        <h2 className="sec-ti rv">{heading.title}</h2>
        <p className="sec-su rv">{heading.description}</p>

        <div className="carousel-wrap rv d1">
          <div className="carousel-viewport">
            <div className="carousel-track" style={{ transform: `translateX(-${activePage * 100}%)` }}>
              {pages.map((page, pageIndex) => (
                <div key={pageIndex} className="carousel-page">
                  {page.map((card, cardIndex) => {
                    const imageUrl = getStrapiMediaUrl(card.image);

                    return (
                      <div key={card.id || `${card.title}-${cardIndex}`} className="plc">
                        <div className="plc-logo-wrap">
                          {imageUrl ? (
                            <CmsImage
                              src={imageUrl}
                              alt={card.title}
                              className="partner-img"
                              style={{ maxHeight: 44, maxWidth: 136, objectFit: 'contain' }}
                            />
                          ) : (
                            <span className="plc-fallback">{getInitials(card.title)}</span>
                          )}
                        </div>
                        <div className="plc-divider" />
                        <div className="plc-name">{card.title}</div>
                        <div className="plc-type">{card.subtitle}</div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-nav">
            <button
              type="button"
              className="c-btn"
              aria-label="Previous"
              onClick={() => setCurrentPage(Math.max(activePage - 1, 0))}
              disabled={activePage === 0}
            >
              {'\u2190'}
            </button>
            <div className="cdots">
              {pages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`cdot${activePage === index ? ' active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setCurrentPage(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="c-btn"
              aria-label="Next"
              onClick={() => setCurrentPage(Math.min(activePage + 1, maxPage))}
              disabled={activePage === maxPage}
            >
              {'\u2192'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
