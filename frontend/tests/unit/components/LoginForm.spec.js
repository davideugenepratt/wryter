import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import LoginForm from '@/components/LoginForm.vue';
import moxios from 'moxios';
import store from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('LoginForm.vue', () => {
  const localStorageMock = () => {
    const storage = {};
    return {
      setItem(key, value) {
        storage[key] = value || '';
      },
      getItem(key) {
        return key in storage ? storage[key] : null;
      },
      removeItem(key) {
        delete storage[key];
      },
      getLength() {
        return Object.keys(storage).length;
      },
      key(i) {
        const keys = Object.keys(storage);
        return keys[i] || null;
      },
    };
  };

  const $router = {
    push: () => {},
  };

  beforeEach(() => {
    moxios.install();
    global.localStorage = localStorageMock();
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
