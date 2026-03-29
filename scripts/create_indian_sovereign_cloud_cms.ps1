$base = 'D:\New folder\test\thynkwise_ai_cms\src'

$dirs = @(
  "$base\api\indian-sovereign-cloud-page\content-types\indian-sovereign-cloud-page",
  "$base\api\indian-sovereign-cloud-page\controllers",
  "$base\api\indian-sovereign-cloud-page\routes",
  "$base\api\indian-sovereign-cloud-page\services",
  "$base\components\indian-sovereign-cloud-page"
)

foreach ($dir in $dirs) {
  New-Item -ItemType Directory -Force $dir | Out-Null
}

$files = [ordered]@{}

$files["$base\api\indian-sovereign-cloud-page\content-types\indian-sovereign-cloud-page\schema.json"] = @'
{
  "kind": "singleType",
  "collectionName": "indian_sovereign_cloud_pages",
  "info": {
    "singularName": "indian-sovereign-cloud-page",
    "pluralName": "indian-sovereign-cloud-pages",
    "displayName": "Indian Sovereign Cloud Page"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "hero": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.hero-section",
      "repeatable": false
    },
    "comparison": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.comparison-section",
      "repeatable": false
    },
    "why_thynkwise": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.why-partner-section",
      "repeatable": false
    },
    "services": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.services-section",
      "repeatable": false
    },
    "use_cases": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.use-cases-section",
      "repeatable": false
    },
    "stats_band": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.stat-band-section",
      "repeatable": false
    },
    "case_studies": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.case-studies-section",
      "repeatable": false
    },
    "partner_ecosystem": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.partner-ecosystem-section",
      "repeatable": false
    },
    "common_questions": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.common-questions-section",
      "repeatable": false
    },
    "final_cta": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.final-cta-section",
      "repeatable": false
    },
    "faq": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.faq-section",
      "repeatable": false
    }
  }
}
'@

$files["$base\api\indian-sovereign-cloud-page\controllers\indian-sovereign-cloud-page.ts"] = @'
/**
 * indian-sovereign-cloud-page controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::indian-sovereign-cloud-page.indian-sovereign-cloud-page');
'@

$files["$base\api\indian-sovereign-cloud-page\routes\indian-sovereign-cloud-page.ts"] = @'
/**
 * indian-sovereign-cloud-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::indian-sovereign-cloud-page.indian-sovereign-cloud-page');
'@

$files["$base\api\indian-sovereign-cloud-page\services\indian-sovereign-cloud-page.ts"] = @'
/**
 * indian-sovereign-cloud-page service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::indian-sovereign-cloud-page.indian-sovereign-cloud-page');
'@

$files["$base\components\indian-sovereign-cloud-page\hero-section.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_hero_sections",
  "info": {
    "displayName": "Hero Section"
  },
  "options": {},
  "attributes": {
    "sovereign_badge_text": {
      "type": "string"
    },
    "compliance_badge_text": {
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
    "primary_cta_text": {
      "type": "string"
    },
    "primary_cta_link": {
      "type": "string"
    },
    "secondary_cta_text": {
      "type": "string"
    },
    "secondary_cta_link": {
      "type": "string"
    },
    "trust_stats": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.hero-trust-stat",
      "repeatable": true
    },
    "dashboard_card": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.dashboard-card",
      "repeatable": false
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\hero-trust-stat.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_hero_trust_stats",
  "info": {
    "displayName": "Hero Trust Stat"
  },
  "options": {},
  "attributes": {
    "value": {
      "type": "string"
    },
    "label": {
      "type": "string"
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\dashboard-card.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_dashboard_cards",
  "info": {
    "displayName": "Dashboard Card"
  },
  "options": {},
  "attributes": {
    "icon": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "subtitle": {
      "type": "string"
    },
    "rows": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.dashboard-row",
      "repeatable": true
    },
    "cta_text": {
      "type": "string"
    },
    "cta_link": {
      "type": "string"
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\dashboard-row.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_dashboard_rows",
  "info": {
    "displayName": "Dashboard Row"
  },
  "options": {},
  "attributes": {
    "label": {
      "type": "string"
    },
    "value": {
      "type": "string"
    },
    "value_tone": {
      "type": "enumeration",
      "enum": [
        "teal",
        "green",
        "white",
        "saffron"
      ],
      "default": "teal"
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\comparison-section.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_comparison_sections",
  "info": {
    "displayName": "Comparison Section"
  },
  "options": {},
  "attributes": {
    "eyebrow": {
      "type": "string"
    },
    "title": {
      "type": "text"
    },
    "description": {
      "type": "text"
    },
    "foreign_hyperscaler_column": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.comparison-column",
      "repeatable": false
    },
    "indian_csp_column": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.comparison-column",
      "repeatable": false
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\comparison-column.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_comparison_columns",
  "info": {
    "displayName": "Comparison Column"
  },
  "options": {},
  "attributes": {
    "icon": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "subtitle": {
      "type": "string"
    },
    "highlighted": {
      "type": "boolean",
      "default": false
    },
    "points": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.comparison-item",
      "repeatable": true
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\comparison-item.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_comparison_items",
  "info": {
    "displayName": "Comparison Item"
  },
  "options": {},
  "attributes": {
    "included": {
      "type": "boolean",
      "default": true
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "text"
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\why-partner-section.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_why_partner_sections",
  "info": {
    "displayName": "Why Partner Section"
  },
  "options": {},
  "attributes": {
    "eyebrow": {
      "type": "string"
    },
    "title": {
      "type": "text"
    },
    "description": {
      "type": "text"
    },
    "benefit_cards": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.benefit-card",
      "repeatable": true
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\benefit-card.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_benefit_cards",
  "info": {
    "displayName": "Benefit Card"
  },
  "options": {},
  "attributes": {
    "icon": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "text"
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\services-section.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_services_sections",
  "info": {
    "displayName": "Services Section"
  },
  "options": {},
  "attributes": {
    "eyebrow": {
      "type": "string"
    },
    "title": {
      "type": "text"
    },
    "description": {
      "type": "text"
    },
    "service_cards": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.service-card",
      "repeatable": true
    },
    "credentials_eyebrow": {
      "type": "string"
    },
    "credentials_title": {
      "type": "text"
    },
    "credential_cards": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.compliance-credential-card",
      "repeatable": true
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\service-card.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_service_cards",
  "info": {
    "displayName": "Service Card"
  },
  "options": {},
  "attributes": {
    "icon": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "text"
    },
    "tags": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.text-tag",
      "repeatable": true
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\text-tag.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_text_tags",
  "info": {
    "displayName": "Text Tag"
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

$files["$base\components\indian-sovereign-cloud-page\compliance-credential-card.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_compliance_credential_cards",
  "info": {
    "displayName": "Compliance Credential Card"
  },
  "options": {},
  "attributes": {
    "icon": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "text"
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\use-cases-section.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_use_cases_sections",
  "info": {
    "displayName": "Use Cases Section"
  },
  "options": {},
  "attributes": {
    "eyebrow": {
      "type": "string"
    },
    "title": {
      "type": "text"
    },
    "description": {
      "type": "text"
    },
    "use_case_cards": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.use-case-card",
      "repeatable": true
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\use-case-card.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_use_case_cards",
  "info": {
    "displayName": "Use Case Card"
  },
  "options": {},
  "attributes": {
    "icon": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "text"
    },
    "tags": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.text-tag",
      "repeatable": true
    },
    "result_text": {
      "type": "text"
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\stat-band-section.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_stat_band_sections",
  "info": {
    "displayName": "Stat Band Section"
  },
  "options": {},
  "attributes": {
    "stats": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.stat-item",
      "repeatable": true
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\stat-item.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_stat_items",
  "info": {
    "displayName": "Stat Item"
  },
  "options": {},
  "attributes": {
    "value": {
      "type": "string"
    },
    "label": {
      "type": "text"
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\case-studies-section.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_case_studies_sections",
  "info": {
    "displayName": "Case Studies Section"
  },
  "options": {},
  "attributes": {
    "eyebrow": {
      "type": "string"
    },
    "title": {
      "type": "text"
    },
    "description": {
      "type": "text"
    },
    "case_study_cards": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.case-study-card",
      "repeatable": true
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\case-study-card.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_case_study_cards",
  "info": {
    "displayName": "Case Study Card"
  },
  "options": {},
  "attributes": {
    "header_theme": {
      "type": "enumeration",
      "enum": [
        "navy",
        "green",
        "purple"
      ],
      "default": "navy"
    },
    "icon": {
      "type": "string"
    },
    "industry": {
      "type": "string"
    },
    "company": {
      "type": "string"
    },
    "challenge": {
      "type": "text"
    },
    "metrics": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.case-study-metric",
      "repeatable": true
    },
    "outcome": {
      "type": "text"
    },
    "key_outcome": {
      "type": "text"
    },
    "provider_text": {
      "type": "string"
    },
    "cta_text": {
      "type": "string"
    },
    "cta_link": {
      "type": "string"
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\case-study-metric.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_case_study_metrics",
  "info": {
    "displayName": "Case Study Metric"
  },
  "options": {},
  "attributes": {
    "value": {
      "type": "string"
    },
    "label": {
      "type": "string"
    },
    "background_tone": {
      "type": "enumeration",
      "enum": [
        "teal",
        "orange",
        "green",
        "blue",
        "purple"
      ],
      "default": "teal"
    },
    "value_tone": {
      "type": "enumeration",
      "enum": [
        "teal",
        "orange",
        "green",
        "blue",
        "purple"
      ],
      "default": "teal"
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\partner-ecosystem-section.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_partner_ecosystem_sections",
  "info": {
    "displayName": "Partner Ecosystem Section"
  },
  "options": {},
  "attributes": {
    "eyebrow": {
      "type": "string"
    },
    "title": {
      "type": "text"
    },
    "description": {
      "type": "text"
    },
    "partner_cards": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.partner-card",
      "repeatable": true
    },
    "selection_note_title": {
      "type": "string"
    },
    "selection_note_description": {
      "type": "text"
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\partner-card.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_partner_cards",
  "info": {
    "displayName": "Partner Card"
  },
  "options": {},
  "attributes": {
    "brand_theme": {
      "type": "enumeration",
      "enum": [
        "esds",
        "yotta",
        "ctrls",
        "sify",
        "e2e",
        "ntt",
        "custom"
      ],
      "default": "custom"
    },
    "logo": {
      "type": "media",
      "multiple": false,
      "allowedTypes": [
        "images"
      ]
    },
    "partner_name": {
      "type": "string"
    },
    "tagline": {
      "type": "text"
    },
    "badges": {
      "type": "component",
      "component": "indian-sovereign-cloud-page.partner-badge",
      "repeatable": true
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\partner-badge.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_partner_badges",
  "info": {
    "displayName": "Partner Badge"
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

$files["$base\components\indian-sovereign-cloud-page\common-questions-section.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_common_questions_sections",
  "info": {
    "displayName": "Common Questions Section"
  },
  "options": {},
  "attributes": {
    "eyebrow": {
      "type": "string"
    },
    "title": {
      "type": "text"
    },
    "description": {
      "type": "text"
    },
    "questions": {
      "type": "component",
      "component": "shared.question-and-answer",
      "repeatable": true
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\final-cta-section.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_final_cta_sections",
  "info": {
    "displayName": "Final CTA Section"
  },
  "options": {},
  "attributes": {
    "badge_text": {
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
    "primary_cta_text": {
      "type": "string"
    },
    "primary_cta_link": {
      "type": "string"
    },
    "secondary_cta_text": {
      "type": "string"
    },
    "secondary_cta_link": {
      "type": "string"
    },
    "support_note": {
      "type": "text"
    },
    "whatsapp_text": {
      "type": "string"
    },
    "whatsapp_link": {
      "type": "string"
    }
  },
  "config": {}
}
'@

$files["$base\components\indian-sovereign-cloud-page\faq-section.json"] = @'
{
  "collectionName": "components_indian_sovereign_cloud_page_faq_sections",
  "info": {
    "displayName": "FAQ Section"
  },
  "options": {},
  "attributes": {
    "eyebrow": {
      "type": "string"
    },
    "title": {
      "type": "text"
    },
    "description": {
      "type": "text"
    },
    "questions": {
      "type": "component",
      "component": "shared.question-and-answer",
      "repeatable": true
    }
  },
  "config": {}
}
'@

foreach ($entry in $files.GetEnumerator()) {
  [System.IO.File]::WriteAllText($entry.Key, $entry.Value, [System.Text.UTF8Encoding]::new($false))
}

Write-Host \"Created $($files.Count) CMS files for Indian Sovereign Cloud page.\"
