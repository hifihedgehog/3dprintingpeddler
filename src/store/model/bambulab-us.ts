import {Store} from './store';

export const BambuLabUs: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: 'div.ProductForm__BuyButtons > button:nth-child(1) > span:nth-child(1)',
      text: ['in stock'],
    },
    maxPrice: {
      container:
        'span.ProductMeta__Price.Price.Text--subdued.u-h4',
    },
  },
  links: [
    {
      brand: 'Bambu Lab',
      cartUrl: 'https://us.store.bambulab.com/cart/add/41078274687112',
      model: 'PLA Basic',
      series: 'Filament with Spool - Jade White',
      url: 'https://us.store.bambulab.com/products/pla-basic-filament?variant=41078274687112',
    },
  ],
  name: 'BambuLabUs',
};
