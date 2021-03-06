/**
 * TODO BAD PRATICE! Unbind these string helper form the String object.
 */
String.prototype.truncate = function (maxlength) {
  'use strict';

  var length = this.length,
    suffix = '…',
    suffixLength = suffix.length,
    result = this
  ;
  if (length > maxlength) {
    result = this.substr(0, (maxlength - suffixLength)) + suffix;
  }
  return result;
};
/**
 * Return a trimed string with whitespace and newlines to a single line.
 * @return {String}
 * @example
 *   '   foo
 *     bar  thut    '.trimWhitespace(); // output: 'foo bar thut'
 */
String.prototype.trimWhitespace = function () {
  'use strict';

  return this.replace(/\s+/g, ' ').split(/\n/).join(' ');
};
/**
 * Return an array
 * @param {String} A character they used as separator. Detault: ','
 * @return {Array}
 */
String.prototype.toArray = function (seperator) {
  'use strict';

  seperator = new RegExp(seperator || ',');
  return this.split(seperator);
};

/**
 * Specific helpers
 */
Namespace.create('xing.core.helpers');

xing.core.helpers.isArray =  function (obj) {
  'use strict';
  return Object.prototype.toString.call(obj) === '[object Array]';
};

xing.core.helpers.isObject =  function (obj) {
  'use strict';
  return Object.prototype.toString.call(obj) === '[object Object]';
};
