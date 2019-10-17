/*
 * Copyright © Bold Brand Commerce Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */
import { mount } from '@vue/test-utils';
import CategoryPage from '~/components/Pages/CategoryPage';

const mocks = {
    $hasAccess: jest.fn(),
    $route: {
        params: {
            id: '12345',
        },
    },
};
describe('Pages/CategoryPage', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(CategoryPage, {
            mocks,
            propsData: {
                title: '',
            },
            stubs: {
                NuxtLink: true,
                Button: true,
                HorizontalTabBar: true,
            },
        });
    });
    it('Component rendered correctly', () => {
        expect(wrapper.is(CategoryPage)).toBe(true);
    });

    it('Check if component is named correctly', () => {
        expect(typeof CategoryPage.name).toBe('string');
        expect(CategoryPage.name).toEqual('CategoryPage');
    });
});
