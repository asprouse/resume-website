import { assert } from 'chai';
import jsdom from 'jsdom';
import findMentions from 'app/libs/content/findMentions';
import fs from 'fs';

describe('findMentions', () => {

  it('finds twitter mentions on medium.com', (done) => {
    const html = fs.readFileSync(__dirname + '/data/medium.html');
    jsdom.env({
      html,
      done: (err, window) => {
        const mentions = findMentions('https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca', window.document);
        assert.sameDeepMembers(mentions, [
          {
            type: 'twitter',
            slices: 500,
            id: '@Medium'
          },
          {
            type: 'twitter',
            slices: 500,
            id: '@dan_abramov'
          }
        ]);
        done();
      }
    });

  });

  it('finds twitter mentions on thedailybeast.com', (done) => {
    const html = fs.readFileSync(__dirname + '/data/thedailybeast.html');
    jsdom.env({
      html,
      done: (err, window) => {
        const mentions = findMentions('http://www.thedailybeast.com/articles/2016/01/25/is-bloomberg-betting-hillary-gets-indicted.html', window.document);
        assert.sameDeepMembers(mentions, [
          {
            type: 'twitter',
            slices: 500,
            id: '@thedailybeast'
          },
          {
            type: 'twitter',
            slices: 500,
            id: '@mtomasky'
          }
        ]);
        done();
      }
    });

  });

});
