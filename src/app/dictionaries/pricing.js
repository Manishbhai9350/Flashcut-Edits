const pricingDictionaries = {
  'en-IN': {
    starter: {
      price: '₹9,999',
      currency: '₹',
      period: '/month',
      features: [
        '7 Short Form Videos',
        '1 Long Form Video (avg 5 min)',
        '7 Cover Images',
        'Personal Manager',
        '24x7 Support',
        '2 Revisions',
        'Good Editing',
        'SFX & Typography',
        'Color Correction'
      ],
      notIncluded: ['Motion Graphics']
    },
    pro: {
      price: '₹29,999',
      currency: '₹',
      period: '/month',
      features: [
        '15 Short Form Videos',
        '3 Long Form Videos (avg 5 min)',
        '15 Cover Images',
        '3 YouTube Thumbnails',
        'Personal Manager',
        '24x7 Support',
        'Unlimited Revisions',
        'Motion Graphics',
        'SFX & Typography',
        'Color Correction'
      ]
    },
    premium: {
      price: '₹89,999',
      currency: '₹',
      period: '/month',
      features: [
        '30 Short Form Videos',
        '10 Long Form Videos (avg 5 min)',
        '30 Thumbnails',
        '10 Cover Images',
        '2 Personal Managers',
        '24x7 Support',
        'Unlimited Revisions',
        'Motion Graphics',
        'SFX & Typography',
        'Color Correction'
      ]
    }
  },
  'en-US': {
    starter: {
      price: '$129',
      currency: '$',
      period: '/month',
      features: [
        '7 Short Form Videos',
        '1 Long Form Video (avg 5 min)',
        '7 Cover Images',
        'Personal Manager',
        '24x7 Support',
        '2 Revisions',
        'Good Editing',
        'SFX & Typography',
        'Color Correction'
      ],
      notIncluded: ['Motion Graphics']
    },
    pro: {
      price: '$349',
      currency: '$',
      period: '/month',
      features: [
        '15 Short Form Videos',
        '3 Long Form Videos (avg 5 min)',
        '15 Cover Images',
        '3 YouTube Thumbnails',
        'Personal Manager',
        '24x7 Support',
        'Unlimited Revisions',
        'Motion Graphics',
        'SFX & Typography',
        'Color Correction'
      ]
    },
    premium: {
      price: '$999',
      currency: '$',
      period: '/month',
      features: [
        '30 Short Form Videos',
        '10 Long Form Videos (avg 5 min)',
        '30 Thumbnails',
        '10 Cover Images',
        '2 Personal Managers',
        '24x7 Support',
        'Unlimited Revisions',
        'Motion Graphics',
        'SFX & Typography',
        'Color Correction'
      ]
    }
  }
};

export function getPricingData(locale) {
  return pricingDictionaries[locale] || pricingDictionaries['en-US'];
}
