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

## new types (keyworks)
- tuples
- enum types
- type aliases
- interfaces
- unions and intersections
- nullable typles
- the unknown type
- the never type

## new features
- type narrowing
- function interface
- Classes(private,protected)
- implement interface in class
- Generics(be used like a placehoder of type instead of any)
   -- <T> , funcName<...>
