/* eslint-disable max-len */
import initMockApi from '../api/index.js';
import {throttle} from 'underscore';
import {existingUrlIndex} from '../api/db.js';
import {validUrl} from './domain.js';
import {requestUrlSnapshot} from './service.js';
import {update} from './helpers.js';

/**
 * The url component state.
 * @return {Object}
 */
export default function url() {
  return {
    /**
     * @type {AppState}
     */
    state: {status: undefined, message: undefined},

    init() {
      initMockApi(existingUrlIndex);
      this.handleInputWithThrottle = throttle(this.handleInput, 500, {leading: false});
    },

    /**
     * Input handler for the url component.
     * @param {String} val
     */
    async handleInput(val) {
      update(this.state, {status: 'loading', message: '.....'});
      const state = await getStateByUsecase(val.trim());
      update(this.state, state);
    },

  };
}

/**
 * @param {String} url
 * @return {Promise<AppState>}
 */
async function getStateByUsecase(url) {
  if (!url) return {status: 'initial', message: undefined};
  if (!validUrl(url)) return {status: 'failure', message: 'This is not a valid url.'};
  const urlSnapshot = await requestUrlSnapshot(url);
  if (!urlSnapshot) return {status: 'failure', message: 'No detail on this url was found.'};
  return {status: 'success', message: `✅ Found! This url is a ${urlSnapshot.type}.`};
}
