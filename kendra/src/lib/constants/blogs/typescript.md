# THE TYPESCRIPT PROGRAMMING GUIDE

## Introduction

By now, TypeScript has emerged as a fully-fledged de facto standard for writing secure, enterprise-grade Node apps. I am building this guide from  my experience and the TypeScript handbook to offer a brief introduction for those transitioning from JavaScript but please beware I am no SME on typescript. Readers should have some familiarity with JavaScript and Object-Oriented Programming (OOP). As we all are busy people I have kept the guide as concise as possible while being as clear as  I can. For a deeper dive into any topic, resources are provided at the end.

## TypeScript as a Superset of JavaScript

All JavaScript code is valid TypeScript. This means you can create a TypeScript file using pure JavaScript and then compile that script using the TypeScript compiler (`tsc`). 

For our exercises, we'll utilize the [TypeScript playground](https://www.typescriptlang.org/play).

Consider this JavaScript code:

```javascript
function func1(a) {
	let b = 7;
	return b + a;
} 
let c = func1(7);
console.log(c); // 14
c = func1('s');
console.log(c); // 7s
```

When you compile this JavaScript code in the playground, it should compile without issues.

## Writing Your First TypeScript Code

Let's transition the JavaScript example above to TypeScript by introducing types:

```typescript
function func1(a: number): number {
	let b = 7;
	return b + a;
} 
let c = func1(7);
console.log(c); // 14
// c = func1('s');  This would raise an error
```

In TypeScript, we use the `:` notation to denote types. Here are some foundational TypeScript types:

```typescript
let a: number;
let b: string;
let c: boolean;
let d: [];  // array
let e: {};  // object
let f: unknown;
let g: never;
let h: any;
let i: null;
let j: undefined;
let k: void;
```

We'll further explore `any`, `unknown`, and `never` later in this guide.

## Type Safety and Type Inference

Here's the syntax for explicitly defining types:

```typescript
let a: number;
```

Once a type is declared, TypeScript enforces constraints related to data type assignments:

```typescript
a = 6;       // Valid
// a = 'six';  This would be flagged
```

If types aren't explicitly declared, TypeScript uses type inference to identify and then enforce the type:

```typescript
let a = 6;           // TypeScript infers that a is of type number
// a = 'six';       This would result in an error
a = 78;              // Valid
```

## Return Types

Functions in TypeScript can also be associated with return types, which help in indicating the kind of data a function returns. Given that functions are first-class citizens in JavaScript, associating them with a return type is essential. 

We can also infer return types, which means that if the function's return type is obvious from the code, TypeScript will automatically determine it. However, explicitly defining return types can enhance readability and reduce potential errors.

Here's an example:

```typescript
function func1(a: number): number {
	let b = 7;
	return b + a;
}
console.log(typeof func1(7)); // Outputs: number
```

## Advanced Types: `any`, `unknown`, and `never`

### The `any` Type

The `any` type in TypeScript denotes that a variable could essentially be of any data type. It's like writing plain JavaScript without the benefits of TypeScript's type-checking:

```typescript
let variable: any = 'string';
variable = 7;
variable = true;
```

While it offers flexibility, overuse of `any`  defeats the purpose of using TypeScript. It's best to use it sparsely.

### The `unknown` Type

The `unknown` type is a type-safe counterpart to `any`. It allows anything to be assigned to it, but to use it further, you'll need to provide type checks or type assertions.

Here's a simple distinction between `any` and `unknown`:

```typescript
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;     
// let s2: string = vUnknown;  This would be flagged
```

### The `never` Type

The `never` type indicates values that will never occur. For instance:

```typescript
function throwError(errorMsg: string): never {
	throw new Error(errorMsg);
}
```

While both `void` and `never` indicate the absence of a value, they're used differently. With `void`, a function doesn't return a value. With `never`, a function will not complete normally (e.g., it will throw an error).

## Unions 

Unions are way to combine multiple primitive type to form  a custom type .

Consider a system  which emits a signal in either true and false  or 0 and 1. If you want to store the data in a variable but you are not sure what will it emit next so you handle you function.

```typescript
let a = emit() // true 
a = emit() // this time it emits 1 and your typescript will throw erorr  because of the inference typescript have assinged a the type of boolean 
```
In this scenario you can create a `union` of boolean and Number type so that variable can store either  number or boolean 

```typescript
let a  : boolean | number
a = true // valid 
a = 1 // valid 
```

### Literal Types 

But we can optimize this as well as we know that system will only emit 1s and 0s so no need to create an union with Number   you can create union with `Literal Types`. Literal Types as name suggest enforce storing only a particular value or a handful of values in case of union . Lets update our function 

```typescript
let a : boolean | 1 | 0
a = 1 //valid 
a = true // valid 
a = false //valid 
a = 0 // valid 
a = 2 // invalid - typescript will throw errror 
```
you can use Literal types and Unions for custom checkers 

```typescript
let checker : undefined | null | "" | 0 | false
```

### Narrowing 
Consider a function called  handleSyscall which takes an argument x  provided at runtime  , x can either have data of type string or it could be undefined . so we define res with type string | undefined . We want to return syscall response with message all lowercase. Lets write code forthat  

```typescript 
function handleSysCall(x : string | undefined){
    return  x.toLowerCase() // Typescript throws a error - > 'x' is possibly 'undefined'.
}

let x = await syscall()
handleSysCall(x)
```
Notice that we dont know the type of x at the run time we cannot run string operation as there is a good chance x will be undefined 
To handle this in  typescript  we perform  `Narrowing`

In simple terms, dynamic checks and predicates provide the information about values at runtime, So, Type narrowing is the process of providing this information during the compile time.

TypeScript follows some possible paths of execution that the programs can take to analyze the most specific possible type of a value at a given position. It searches for some special checks known as Type Guards and assignments. The process of refining types to some more specific types is known as Narrowing.

lets perform Narrowing by checking type of x at runtime to make sure that we do not encounter an error due to type mismatch


```typescript 
function handleSysCall(x : string | undefined){
    if(x !== undefined) return  x.toLowerCase() //Valid  -> Type script checks type and value at runtime to return what is valid for both types . 
    return 'syscall did not return value' 
}

let x = await syscall()
handleSysCall(x)
```

## Types Alias 
Consider this exercise where we have an employee object with some properties and method. Our method Dept func takes two properties and produces a function for employee.

In JavaScript, it's straightforward to mistakenly update a property with a value of a different type:

```javascript 
const employee = {
	id : 'CN1',
	name : 'Jack',
	deptCode : 112, 
	deptFunc : function(){
		console.log( this.id + (this.deptCode +  1000) )
	}
}
employee.deptFunc() // Outputs: CN11112

employee["deptCode"] = '112' // Accidentally changed deptCode to a string
employee.deptFunc()  // Outputs: CN11121000 (incorrect employee function )
```

When the same code is translated to TypeScript:

```typescript
const employee = {
	id : 'CN1',
	name : 'Jack',
	deptCode : 112, 
	deptFunc : function(){
		console.log( this.id + (this.deptCode +  1000) )
	}
}
employee.deptFunc() // Outputs: CN11112

employee["deptCode"] = '112' // Error in TypeScript: Type 'string' is not assignable to type 'number'.
```

TypeScript `infers` the types of properties and methods within the object and enforces those inferred types during subsequent assignments. This is where TypeScript's `Type Alias` comes into play. You can think of a Type Alias as creating your own custom type or data structure:

```typescript
type Employee = {
  id: string,
  name: string,
  deptCode: number,
  deptFunc: Function
}

const employee: Employee = {
	id : 'CN1',
	name : 'Jack',
	deptCode : 112, 
	deptFunc : function(){
		console.log( this.id + (this.deptCode +  1000) )
	}
}
employee.deptFunc() // Outputs: CN11112
```

With a Type Alias, TypeScript not only enforces the type of each property but also the overall structure of the object. This means you cannot randomly add new properties without first updating the Type Alias:

```typescript
employee["age"] = 17 // Error in TypeScript: Element implicitly has an 'any' type because expression of type '"age"' can't be used to index type 'Employee'. Property 'age' does not exist on type 'Employee'. 
```

To add a new property, we need to update the Type Alias:

```typescript
type Employee = {
  id: string,
  name: string,
  deptCode: number,
  age: number, // added the 'age' property with its type
  deptFunc: Function
}

const employee: Employee = {
	id : 'CN1',
	name : 'Jack',
	deptCode : 112, 
	age : 33,
	deptFunc : function(){
		console.log( this.id + (this.deptCode +  1000) )
	}
}
```

But what if certain fields like our age field  aren't always required to be updated or if they need to be added later? We can make them optional by adding a `?` next to the property name:

```typescript
type Employee = {
  id: string,
  name: string,
  deptCode: number,
  age?: number, // made 'age' optional by appending '?'
  deptFunc: Function
}

const employee: Employee = {
	id : 'CN1',					
	name : 'Jack',
	deptCode : 112, 
	deptFunc : function(){
		console.log( this.id + (this.deptCode +  1000) )
	}
}

// You can now add the 'age' property later without error
employee["age"] = 33
```

## Intefaces 

A second way ( and traditional ) way to defined Objects - structure and types is using Interfaces . `Intefaces` are also used as contracts in OOP but we will discuss them in `OOP Section`

```typescript
Interface Employee{
    Id : number,
    name : string , 
}

employee : Employee = {
	id  = 'UK010',
	name : "Daniel
}

secondEmp = Employee()
secondEmp.Id = `YT121'
secondEmp.name = `Martin`
```


Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable

### Extending a Type vs Extending an Interface 

Extending is use  inherit property from another object . There is syntatical differences how you extend based on what Alias you are using 

To extend a type we use `parent &` symbol .
```typescript 
 
type Employee = {
    Id : number,
    name : string , 
    age : number , 
    deptCode : number
}

type Personal =  Employee & { // using & symbol to extend 
	address : string,
	pincode : number 
}

personal = Personal()
personal.address //valid property 
personal.age // valid property // inherited from Employee
```

In Interfaces we use extends keyword
```typescript 

inteface Employee  {
    Id : number,
    name : string , 
    age : number , 
    deptCode : number
}

Interface Personal  extends Employee { // using extends keyword 
	address : string,
	pincode : number 
}

personal = Personal()
personal.address //valid property 
personal.age // valid property // inherited from Employee
```


For our intent and purposes types and interfaces can be used interchangabily. Personally I find Type alias to be used in Type defination when writing functional style codes and Interfaces when working in OOP style but thats and preference and no added benefits are provided .

## Non-null Assertion Operator (Postfix!)

Consider a function that calculates a value for a given percentage. We have a variable `nums` as input, but the type of the variable can either be a number or null. TypeScript will throw an error because it cannot perform division on a type `number | null`, as null values cannot be divided by a number.

```typescript
let nums: number | null = 23;

function calculatePercentage(): number {
    return (nums / 100) * 35; // TypeScript gives you an error that you cannot perform division on type number | null.
}
```

To solve this issue, you can either run a null check:

```typescript
let nums: number | null = 23;

function calculatePercentage(): number {
    if (nums !== null) return (nums / 100) * 35; // No else condition will throw an error.
}
```

This may work for simpler code, but note that the function is now returning void because we have not handled the else condition:

```typescript
let nums: number | null = 23;

function calculatePercentage(): number {
    if (nums !== null) {
        return (nums / 100) * 35;
    } else {
        return 0;
    }
}
```

The code has now become more verbose. To handle such conditions more concisely, TypeScript provides the `!` (bang) postfix, which is used to handle null checks without long if-else conditions. We can simply put the `!` postfix with `nums`, and TypeScript will handle null:

```typescript
let nums: number | null = 23;

function calculatePercentage(): number {
    return (nums! / 100) * 35; // Valid, TypeScript will not give an error for handling null.
}

console.log(calculatePercentage());
```

The `!` postfix will also handle null values:

```typescript
let nums: number | null = null; // Changed nums to null.

function calculatePercentage(): number {
    return (nums! / 100) * 35; // Valid, TypeScript will not give an error for handling null.
}

console.log(calculatePercentage()); // Prints 0 as 0/100 * 35 equals zero.
```

Note: Be careful when handling null and undefined using `!` as this may cause unhandled exceptions if not handled correctly.


Certainly! Here's a section explaining how TypeScript enums work:

## Enums

Enums in TypeScript allow you to define a set of named constants. These constants represent distinct values or categories. Enums make your code more readable and self-documenting by giving meaningful names to values.

To define an enum in TypeScript, you can use the `enum` keyword, followed by the name of the enum and a code block that lists its members. Here's an example:

```typescript
enum DaysOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
```

In this example, we've defined an enum called `DaysOfWeek` with seven members representing the days of the week. By default, TypeScript assigns numeric values to the enum members starting from 0. So, `Sunday` has a value of 0, `Monday` has a value of 1, and so on.

You can also explicitly assign values to enum members:

```typescript
enum DaysOfWeek {
    Sunday = 1,
    Monday = 2,
    Tuesday = 3,
    Wednesday = 4,
    Thursday = 5,
    Friday = 6,
    Saturday = 7
}
```

Now, `Sunday` has a value of 1, `Monday` has a value of 2, and so on.

You can use enums to create variables and functions that make use of these named constants:

```typescript
let today: DaysOfWeek = DaysOfWeek.Wednesday;

function isWeekend(day: DaysOfWeek): boolean {
    return day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday;
}

console.log(isWeekend(today)); // Prints false since it's Wednesday.
```

Enums are often used to represent a set of predefined options or choices, making your code more expressive and less error-prone. Additionally, enums can be useful when working with switch statements, as you can switch on the enum values, making your code more readable and less error-prone when dealing with multiple cases.


Certainly! TypeScript provides several less common primitive types in addition to the commonly used ones like `number`, `string`, and `boolean`. Let's explore some of these less common primitive types:

## Less Common Primitive Types in TypeScript

 **`bigint`**: The `bigint` type represents arbitrary-precision integers, which are useful when dealing with very large numbers that cannot be accurately represented using the `number` type. You can create `bigint` literals by appending an `n` to the end of an integer value.

   ```typescript
   let bigIntValue: bigint = 1234567890123456789012345678901234567890n;
   ```

 **`symbol`**: The `symbol` type represents a unique and immutable value. Symbols are often used as object property keys when you want to create private or hidden properties.

   ```typescript
   const uniqueSymbol = Symbol('unique');
   let obj = {
       [uniqueSymbol]: 'This is a unique symbol key',
   };
   ```

These less common primitive types provide additional flexibility and safety when working with various data types and scenarios in TypeScript.