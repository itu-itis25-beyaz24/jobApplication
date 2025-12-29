function validateTCKN(tckn) {
    if (!/^[1-9][0-9]{10}$/.test(tckn)) return false;
    const digits = tckn.split('').map(Number);
    const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
    const evenSum = digits[1] + digits[3] + digits[5] + digits[7];
    const check10 = ((oddSum * 7) - evenSum) % 10;
    const totalSum = digits.slice(0, 10).reduce((a, b) => a + b, 0);
    return check10 === digits[9] && totalSum % 10 === digits[10];
}