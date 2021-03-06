/**
 * @fileoverview MIME tests.
 *
 * @license Copyright 2018 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */
goog.require('cwc.utils.mime.Type');
goog.require('cwc.utils.mime.getTypeByContent');
goog.require('cwc.utils.mime.getTypeByExtension');


describe('File Mime Type', function() {
  let cwcData = '{ "format": "Coding with Chrome File Format x.0" }';
  let htmlData = '<!DOCTYPE html><title>Title</title><h1>Hello World</h1>';
  let javascriptData = 'var test = "Hello World";';
  let jsonData = '{"test":1}';
  let xmlData = '<?xml version="1.0" encoding="UTF-8"?><example></example>';

  it('getTypeByExtension', function() {
    expect(cwc.utils.mime.getTypeByExtension('image.png'))
      .toEqual('image/png');
    expect(cwc.utils.mime.getTypeByExtension('image.jpg'))
      .toEqual('image/jpeg');
    expect(cwc.utils.mime.getTypeByExtension('image.jpeg'))
      .toEqual('image/jpeg');
  });

  it('getTypeByContent', function() {
    expect(cwc.utils.mime.getTypeByContent(cwcData))
      .toEqual('application/cwc+json');
    expect(cwc.utils.mime.getTypeByContent(htmlData))
      .toEqual('text/html');
    expect(cwc.utils.mime.getTypeByContent(javascriptData))
      .toEqual('application/javascript');
    expect(cwc.utils.mime.getTypeByContent(jsonData))
      .toEqual('application/json');
    expect(cwc.utils.mime.getTypeByContent(xmlData))
      .toEqual('application/xml');
  });
});
