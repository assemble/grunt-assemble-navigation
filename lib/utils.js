/*!
 * grunt-assemble-navigation <https://github.com/assemble/grunt-assemble-navigation>
 *
 * Copyright (c) 2013-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

// The following code for slugifying is from underscore.string:
// https://github.com/epeli/underscore.string
var nativeTrim = String.prototype.trim;

var escapeRegExp = function (str) {
  if (str == null) {
    return '';
  }
  return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};

var defaultToWhiteSpace = function (characters) {
  if (characters == null) {
    return '\\s';
  } else if (characters.source) {
    return characters.source;
  } else {
    return '[' + escapeRegExp(characters) + ']';
  }
};

var trim = function (str, characters) {
  if (str == null) {return ''; }
  if (!characters && nativeTrim) {
    return nativeTrim.call(str);
  }
  characters = defaultToWhiteSpace(characters);
  return String(str).replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
};
var dasherize = function(str){
  return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};


exports.slugify = function (str) {
  if (str == null) {
    return '';
  }
  var from = "ąàáäâãåæăćęèéëêìíïîłńòóöôõøśșțùúüûñçżź";
  var to = "aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz";
  var regex = new RegExp(defaultToWhiteSpace(from), 'g');
  str = String(str).toLowerCase().replace(regex, function (c) {
    var index = from.indexOf(c);
    return to.charAt(index) || '-';
  });
  return dasherize(str.replace(/[^\w\s-]/g, ''));
};