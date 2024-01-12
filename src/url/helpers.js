import {extend} from 'underscore';

/**
 * The extend function but with logging; useful for observing the state changes.
 * @param {Object} obj
 * @param {Object} props
 * @return {Object}
 */
export const update = (obj, props) => {
  console.debug('Updated, obj:', obj, 'with ,props:', props);
  return extend(obj, props);
};
