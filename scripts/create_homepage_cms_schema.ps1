$base = 'D:\New folder\test\thynkwise_ai_cms\src'

$files = @{
  "$base\api\home-page\content-types\home-page\schema.json" = @'
{
  "kind": "singleType",
  "collectionName": "home_pages",
  "info": {
    "singularName": "home-page",
    "pluralName": "home-pages",
    "displayName": "Home Page"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "seo": {
      "type": "component",
      "component": "home-page.seo-settings",
      "repeatable": false
    },
    "hero": {
      "type": "component",
      "component": "home-page.hero-section",
      "repeatable": false
    },
    "stats_band": {
      "type": "component",
      "component": "home-page.stats-band-section",
      "repeatable": false
    },
    "capabilities_section": {
      "type": "component",
      "component": "home-page.capabilities-section",
      "repeatable": false
    },
    "partner_network_section": {
      "type": "component",
      "component": "home-page.partner-network-section",
      "repeatable": false
    },
    "client_portfolio_section": {
      "type": "component",
      "component": "home-page.client-portfolio-section",
      "repeatable": false
    },
    "testimonials_section": {
      "type": "component",
      "component": "home-page.testimonials-section",
      "repeatable": false
    },
    "faq_section": {
      "type": "component",
      "component": "home-page.faq-section",
      "repeatable": false
    },
    "final_cta_section": {
      "type": "component",
      "component": "home-page.final-cta-section",
      "repeatable": false
    }
  }
}
'@

  "$base\api\home-page\controllers\home-page.ts" = @'
/**
 * home-page controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::home-page.home-page');
'@

  "$base\api\home-page\routes\home-page.ts" = @'
/**
 * home-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::home-page.home-page');
'@

  "$base\api\home-page\services\home-page.ts" = @'
/**
 * home-page service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::home-page.home-page');
'@

  "$base\components\home-page\seo-settings.json" = @'
{
  "collectionName": "components_home_page_seo_settings",
  "info": {
    "displayName": "SEO Settings"
  },
  "options": {},
  "attributes": {
    "browser_title": {
      "type": "string"
    },
    "meta_description": {
      "type": "text"
    },
    "meta_keywords": {
      "type": "text"
    },
    "canonical_url": {
      "type": "string"
    },
    "og_title": {
      "type": "string"
    },
    "og_description": {
      "type": "text"
    },
    "twitter_title": {
      "type": "string"
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\action-button.json" = @'
{
  "collectionName": "components_home_page_action_buttons",
  "info": {
    "displayName": "Action Button"
  },
  "options": {},
  "attributes": {
    "button_text": {
      "type": "string"
    },
    "button_link": {
      "type": "string"
    },
    "variant": {
      "type": "enumeration",
      "enum": [
        "primary",
        "secondary",
        "outline",
        "whatsapp"
      ]
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\hero-section.json" = @'
{
  "collectionName": "components_home_page_hero_sections",
  "info": {
    "displayName": "Hero Section"
  },
  "options": {},
  "attributes": {
    "eyebrow_text": {
      "type": "string"
    },
    "title": {
      "type": "customField",
      "customField": "plugin::ckeditor5.CKEditor",
      "options": {
        "preset": "defaultHtml"
      }
    },
    "description": {
      "type": "customField",
      "customField": "plugin::ckeditor5.CKEditor",
      "options": {
        "preset": "defaultHtml"
      }
    },
    "primary_cta": {
      "type": "component",
      "component": "home-page.action-button",
      "repeatable": false
    },
    "secondary_cta": {
      "type": "component",
      "component": "home-page.action-button",
      "repeatable": false
    },
    "vertical_cards": {
      "type": "component",
      "component": "home-page.hero-vertical-card",
      "repeatable": true
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\hero-vertical-card.json" = @'
{
  "collectionName": "components_home_page_hero_vertical_cards",
  "info": {
    "displayName": "Hero Vertical Card"
  },
  "options": {},
  "attributes": {
    "order_label": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "text"
    },
    "link_text": {
      "type": "string"
    },
    "link_url": {
      "type": "string"
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\stats-band-section.json" = @'
{
  "collectionName": "components_home_page_stats_band_sections",
  "info": {
    "displayName": "Stats Band Section"
  },
  "options": {},
  "attributes": {
    "stats": {
      "type": "component",
      "component": "home-page.stat-item",
      "repeatable": true
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\stat-item.json" = @'
{
  "collectionName": "components_home_page_stat_items",
  "info": {
    "displayName": "Stat Item"
  },
  "options": {},
  "attributes": {
    "metric_value": {
      "type": "string"
    },
    "metric_label": {
      "type": "string"
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\capabilities-section.json" = @'
{
  "collectionName": "components_home_page_capabilities_sections",
  "info": {
    "displayName": "Capabilities Section"
  },
  "options": {},
  "attributes": {
    "eyebrow_text": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "text"
    },
    "capability_cards": {
      "type": "component",
      "component": "home-page.capability-card",
      "repeatable": true
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\capability-card.json" = @'
{
  "collectionName": "components_home_page_capability_cards",
  "info": {
    "displayName": "Capability Card"
  },
  "options": {},
  "attributes": {
    "order_label": {
      "type": "string"
    },
    "accent_tone": {
      "type": "enumeration",
      "enum": [
        "blue",
        "orange",
        "purple",
        "green"
      ]
    },
    "image": {
      "type": "media",
      "multiple": false,
      "allowedTypes": [
        "images"
      ]
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "text"
    },
    "tags": {
      "type": "component",
      "component": "home-page.tag-item",
      "repeatable": true
    },
    "result_label": {
      "type": "string"
    },
    "result_value": {
      "type": "text"
    },
    "link_text": {
      "type": "string"
    },
    "link_url": {
      "type": "string"
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\tag-item.json" = @'
{
  "collectionName": "components_home_page_tag_items",
  "info": {
    "displayName": "Tag Item"
  },
  "options": {},
  "attributes": {
    "label": {
      "type": "string"
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\partner-network-section.json" = @'
{
  "collectionName": "components_home_page_partner_network_sections",
  "info": {
    "displayName": "Partner Network Section"
  },
  "options": {},
  "attributes": {
    "eyebrow_text": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "text"
    },
    "partner_pills": {
      "type": "component",
      "component": "home-page.partner-pill",
      "repeatable": true
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\partner-pill.json" = @'
{
  "collectionName": "components_home_page_partner_pills",
  "info": {
    "displayName": "Partner Pill"
  },
  "options": {},
  "attributes": {
    "label": {
      "type": "string"
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\client-portfolio-section.json" = @'
{
  "collectionName": "components_home_page_client_portfolio_sections",
  "info": {
    "displayName": "Client Portfolio Section"
  },
  "options": {},
  "attributes": {
    "eyebrow_text": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "text"
    },
    "client_cards": {
      "type": "component",
      "component": "home-page.client-card",
      "repeatable": true
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\client-card.json" = @'
{
  "collectionName": "components_home_page_client_cards",
  "info": {
    "displayName": "Client Card"
  },
  "options": {},
  "attributes": {
    "category_label": {
      "type": "string"
    },
    "client_name": {
      "type": "string"
    },
    "geography": {
      "type": "string"
    },
    "description": {
      "type": "text"
    },
    "metric_value": {
      "type": "string"
    },
    "metric_label": {
      "type": "string"
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\testimonials-section.json" = @'
{
  "collectionName": "components_home_page_testimonials_sections",
  "info": {
    "displayName": "Testimonials Section"
  },
  "options": {},
  "attributes": {
    "eyebrow_text": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "text"
    },
    "testimonial_cards": {
      "type": "component",
      "component": "home-page.testimonial-card",
      "repeatable": true
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\testimonial-card.json" = @'
{
  "collectionName": "components_home_page_testimonial_cards",
  "info": {
    "displayName": "Testimonial Card"
  },
  "options": {},
  "attributes": {
    "quote": {
      "type": "text"
    },
    "avatar_initials": {
      "type": "string"
    },
    "author_name": {
      "type": "string"
    },
    "author_role": {
      "type": "string"
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\faq-section.json" = @'
{
  "collectionName": "components_home_page_faq_sections",
  "info": {
    "displayName": "FAQ Section"
  },
  "options": {},
  "attributes": {
    "eyebrow_text": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "text"
    },
    "faq_items": {
      "type": "component",
      "component": "home-page.faq-item",
      "repeatable": true
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\faq-item.json" = @'
{
  "collectionName": "components_home_page_faq_items",
  "info": {
    "displayName": "FAQ Item"
  },
  "options": {},
  "attributes": {
    "question": {
      "type": "string"
    },
    "answer": {
      "type": "text"
    },
    "is_open_by_default": {
      "type": "boolean",
      "default": false
    }
  },
  "config": {}
}
'@

  "$base\components\home-page\final-cta-section.json" = @'
{
  "collectionName": "components_home_page_final_cta_sections",
  "info": {
    "displayName": "Final CTA Section"
  },
  "options": {},
  "attributes": {
    "title": {
      "type": "string"
    },
    "description": {
      "type": "text"
    },
    "primary_cta": {
      "type": "component",
      "component": "home-page.action-button",
      "repeatable": false
    },
    "secondary_cta": {
      "type": "component",
      "component": "home-page.action-button",
      "repeatable": false
    }
  },
  "config": {}
}
'@
}

foreach ($path in $files.Keys) {
  $dir = [System.IO.Path]::GetDirectoryName($path)

  if (-not [string]::IsNullOrWhiteSpace($dir) -and -not (Test-Path -LiteralPath $dir)) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
  }

  Set-Content -LiteralPath $path -Value $files[$path]
}

Write-Host 'Fresh Home Page CMS schema files created.'
