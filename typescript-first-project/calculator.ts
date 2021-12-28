type Operation = 'multiply' | 'add' | 'divide';

type Result = number;

interface ParseNumbers {
  num1: number;
  num2: number;
}

const parseNums = (val1: string, val2: string): ParseNumbers => {
  if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
    return {
      num1: Number(val1),
      num2: Number(val2)
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

const calculator = (a: number, b: number, op: Operation) : Result => {
  switch(op) {
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) throw new Error('Can\'t divide by 0!');
      return a / b;
    case 'add':
      return a + b;
    default:
      throw new Error('Operation is not multiply, add or divide!');
  }
}


export const calculate = (a: string, b: string, op: Operation) => {
	try {
		const {num1, num2} =  parseNums(a,b);
		return calculator(num1, num2, op);
	} catch (error: unknown) {
		let errorMessage = 'Something went wrong.'
		if (error instanceof Error) {
			errorMessage += ' Error: ' + error.message;
		}
		return errorMessage;
	}
	
}

