// Import stylesheets
import '../style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
console.log('hello,world');
let sales: number = 20_120;
let course: string = 'type';
let isOK = true;

let numbers: number[] = [];
numbers[0] = 5;
numbers.forEach((n) => n.toFixed());
// tuple for two types element in array

let user: [number, string] = [1, 'abc'];
user.push;

// enum
enum Size {
  Small = 1,
  Medium, //auto 2
  Large, //auto 3
}

let mySize: Size = Size.Medium; //2

//functions:always declare the input params and return value(or void).

function add(a: number, b: number = 0): number {
  return a + b;
}

add(20_000);

//objects

let employee: Employee = {
  id: 1,
  name: 'chen',
  retire(date) {
    console.log(date);
  },
};

//employee.id = 2;

// type aliase
type Employee = { readonly id: number; name: string; retire(date: Date): void };

// union types: variable with 2+ types
function kgToLbs(weight: number | string): number {
  //narrow down the input to one type
  if (typeof weight === 'number') return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('200');

//intersections
type Draggable = {
  drag(): void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  // implement methods
  drag() {},
  resize: () => {},
};

//literal(exact,specific)

type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = 'cm' | 'inch';
let metric: Metric = 'inch';

//nullable
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log('Hola!');
}

greet(null);

//
type Customer = {
  birthday: Date;
};
function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
//optional property access operator
console.log(customer?.birthday?.getFullYear());
//optional element access operator
// customers?.[0]
//optional call
let log: any = null;
log?.('a');
