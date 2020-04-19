import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import UnsplashImage from '@/components/UnsplashImage.vue';

describe('UnsplashImage.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(UnsplashImage);
    expect(wrapper.contains('img')).to.equal(true);
  });
});
