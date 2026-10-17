import test from 'node:test';
import assert from 'node:assert/strict';
import {messageDeck} from '../src/message-deck.js';
test('a hundred messages all appear before a new cycle, with no boundary repeat',()=>{
  const notes=Array.from({length:100},(_,i)=>`message ${i}`),next=messageDeck(notes,()=>.42);
  const first=Array.from({length:100},next),second=Array.from({length:100},next);
  assert.equal(new Set(first).size,100);assert.equal(new Set(second).size,100);assert.notEqual(first.at(-1),second[0]);
});
test('zero or one message remains safe',()=>{assert.equal(messageDeck([])(),'');const next=messageDeck(['love']);assert.equal(next(),'love');assert.equal(next(),'love');});
