# TS-Practice

## basic config

- npm i -g typescript
- tsc index.ts
- tsc --init
- tsc

## vs debug

- open souceMap then compile tsc
- get into index.ts write some logic and add a breakpoint.
- debug panel : create launch.json.file(node.js)
- "preLanuchTask":"tsc: bulid - tsconfig.json"
- then go to the Lanuch Program,look over the variables or watch..
  (make sure you use the debugger pannel [stepin or sth else)

## new types
- tuples
- enum types
- type aliases
- unions and intersections
- type narrowing
- nullable typles
- the unknown type
- the never type