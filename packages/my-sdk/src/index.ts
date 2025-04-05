import { capitalize, reverse } from 'lodash';

export function formatMessage(message: string): string {
  const capitalizedMessage = capitalize(message);
  const reversedMessage = reverse(capitalizedMessage.split('')).join('');
  return `Original: ${capitalizedMessage}, Reversed: ${reversedMessage}`;
}

export function sayHello(name: string): string {
  return `Hello, ${capitalize(name)}!`;
}

export class SDK {
  constructor(private config: { apiKey: string }) {}

  public async initialize() {
    return true;
  }
} 