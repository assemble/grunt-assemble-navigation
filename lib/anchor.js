/**
 * Default `.anchor` template
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

module.exports = [
  '<span class="anchor-target" id="<%= id %>"></span>',
  '<a href="#<%= id %>" name="<%= id %>" class="anchor glyphicon glyphicon-link"></a>',
].join('\n');


// Needs testing
var alt = [
  '<a href="#<%= id %>" name="<%= id %>" class="anchor">',
  '  <span class="anchor-target" id="<%= id %>"></span>',
  '  <span class="glyphicon glyphicon-link"></span>',
  '</a>'
].join('\n');