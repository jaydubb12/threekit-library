'use client';

import { ProductLayout } from '@threekit-tools/treble/dist';
import { Dropdown } from '@threekit-tools/treble/dist/components/Dropdown';
import { Swatch } from '@threekit-tools/treble/dist/components/Swatch';

const products = {
  casket: { preview: { customId: '<ASSET_ID>' } },
};

export const ProductPersonalizeSelection = () => {
  return (
    <ProductLayout products={products}>
      <div>
        <Dropdown attribute="Exterior Material" />
        <Swatch attribute="Exterior Color" />
      </div>
    </ProductLayout>
  );
};
