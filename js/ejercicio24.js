const regex = /^-?\d+(\.\d+)?([eE][-+]?\d+)?$/;

const testCases = [
    '2.3e-1',
    '-3e2',
    '23',
    '3.2',
    '123e+4',
    '-.5',
    'abc'
];

testCases.forEach(testCase => {
    console.log(`${testCase}: ${regex.test(testCase)}`);
});
