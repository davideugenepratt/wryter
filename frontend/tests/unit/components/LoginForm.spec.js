import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import LoginForm from '@/components/LoginForm.vue';
import moxios from 'moxios';
import store from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('LoginForm.vue', () => {

  const $router = {
    push: () => {},
  };

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('renders a form for logging in', () => {
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.contains('form')).to.equal(true);
  });

  it('makes a request to login to the backend', (done) => {
    const token = 'asdfasdfasdfsdasfasfgasfg';

    const wrapper = shallowMount(LoginForm, {
      store,
      localVue,
      attachToDocument: true,
      mocks: {
        $router,
      },
    });

    wrapper.setData({ username: 'testuser@test.com', password: 'StrongPassword1*' });
    wrapper.find('#loginButton').trigger('click');

    wrapper.vm.$nextTick();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          token,
        },
      }).then(() => {
        wrapper.vm.$nextTick();
        expect(store.state.loggedIn).to.equal(true);
        done();
      });
    });

    wrapper.destroy();
  });
});
