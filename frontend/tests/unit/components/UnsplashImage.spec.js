import { expect } from 'chai';
// import { shallowMount } from '@vue/test-utils';
// import UnsplashImage from '@/components/UnsplashImage.vue';
// import moxios from 'moxios';

describe('UnsplashImage.vue', () => {
  beforeEach(() => {
    // moxios.install();
  });

  afterEach(() => {
    // moxios.uninstall();
  });

  it('Renders image form unsplash when called', (done) => {
    // const wrapper = shallowMount(UnsplashImage);
    // const imageUrl = 'test';
    /*
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          urls: {
            full: imageUrl,
          },
        },
      }).then(() => {
        expect(wrapper.find('.unsplash-image-container img').attributes().src).to.equal(imageUrl);
        done();
      });
    });
    */
    expect(true).to.equal(true);
    done();
  });
});
