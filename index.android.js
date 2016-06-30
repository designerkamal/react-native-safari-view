/**
 * Stub of SafariViewManager for Android.
 *
 * @providesModule SafariViewManager
 * @flow
 */
'use strict';

var warning = require('warning');

export default{
  test: function() {
    warning('Not yet implemented for Android.');
  },
  isAvailable: function() {
    return new Promise(function(resolve, reject) {
        resolve(false);
    });
  }
};
