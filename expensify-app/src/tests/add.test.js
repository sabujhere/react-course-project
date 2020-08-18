const add = (a, b) => a+b;
const generateGreetingLocal = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
const result = add(3,4);
expect(result).toBe(7);

});

test('should generateGreeting', () => {
    const result = generateGreetingLocal('Mike');
    expect(result).toBe('Hello Mike!');    
    });