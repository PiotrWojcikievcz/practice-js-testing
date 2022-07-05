import randomNumber from './app';

it ('when min = 1 and  max = 1 return 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
});

it ('throw exception when min is not number' , () => {    
    function drawNumber() {
        randomNumber('1', 2);
    }
    
    expect(drawNumber).toThrow();
});