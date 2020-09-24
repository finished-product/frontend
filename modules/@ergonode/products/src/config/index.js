/*
 * Copyright © Bold Brand Commerce Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */
export default {
    name: '@ergonode/products',
    order: 70,
    relations: [
        '@ergonode/attributes',
        '@ergonode/categories',
        '@ergonode/product-templates',
    ],
    aliases: {
        '@Products': '/',
    },
};
