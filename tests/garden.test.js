import test from 'node:test';
import assert from 'node:assert/strict';
import {move,closest} from '../src/garden-logic.js';
import {content} from '../src/content.js';
test('avatar cannot leave the garden bounds',()=>{assert.deepEqual(move({x:50,y:50},{x:1000,y:-1000}),{x:90,y:20});assert.deepEqual(move({x:10,y:86},{x:-1,y:1}),{x:10,y:86});});
test('only flowers within interaction distance are offered, nearest first',()=>{const flowers=[{id:'a',x:20,y:30},{id:'b',x:22,y:30}];assert.equal(closest({x:21.9,y:30},flowers).id,'b');assert.equal(closest({x:90,y:80},flowers),undefined);});
test('content IDs are unique and every flower is reachable',()=>{assert.equal(new Set(content.flowers.map(f=>f.id)).size,content.flowers.length);for(const f of content.flowers){assert.deepEqual(move({x:f.x,y:f.y+6},{x:0,y:0}),{x:f.x,y:f.y+6});assert.equal(closest({x:f.x,y:f.y+6},[f]).id,f.id);}});
