import { formatCurrency, formatNumber } from "../format";

describe('money format', () => {
  it('number format', () => {
    expect(formatNumber(100, 2)).toBe('100.00');
    expect(formatNumber(1000, 2)).toBe('1,000.00');
    expect(formatNumber(1000.23455, 2)).toBe('1,000.23');
    expect(formatNumber(1000.236, 2)).toBe('1,000.24');
    expect(formatNumber(0.1234567, 8)).toBe('0.12345670');
    expect(formatNumber(0.123456789, 8)).toBe('0.12345679');
    expect(formatNumber(0.000000001, 8)).toBe('0.00000000');
  });

  it('format USD', () => {
    expect(formatCurrency(1234.12345678, 'USD')).toBe('$1,234.12');
    expect(formatCurrency(1234.1, 'USD')).toBe('$1,234.10');
    expect(formatCurrency(12.64, 'USD')).toBe('$12.64');
    expect(formatCurrency(12.777, 'USD')).toBe('$12.78');
  });

  it('format BTC', () => {
    expect(formatCurrency(1234.12345678, 'BTC', 8)).toBe('1,234.12345678 BTC');
    expect(formatCurrency(1234.1, 'BTC', 8)).toBe('1,234.10000000 BTC');
    expect(formatCurrency(12.64, 'BTC', 8)).toBe('12.64000000 BTC');
    expect(formatCurrency(12.777, 'BTC', 8)).toBe('12.77700000 BTC');
  });
});