class DerivativeTerm {
    compute(pTerm) {
        let sign = pTerm.charAt(0);
        let coeff = Math.abs(parseInt(pTerm.split('x^')[0].replace(/[+-]/g, '').trim())); // Absolute value of coefficient
        let power = parseInt(pTerm.split('x^')[1].trim());
        let negative = (sign === "-");

        // For ax^n, the derivative is a(n)x^(n-1)
        let derivativeCoeff = coeff * power;
        let derivativePower = power - 1;

        if (derivativeCoeff === 0) {
            return ''; // Don't show steps for terms that have a derivative of 0
        } else if(derivativePower === 0) {
            let powerString = `x<sup class="power">${derivativePower}</sup>`;
            return `${negative ? '-' : ''}${derivativeCoeff}`; // Append '-' for negative coefficients
        } else {
            let powerString = (derivativePower === 0) ? '' : `x<sup class="power">${derivativePower}</sup>`;
            return `${negative ? '-' : ''}${derivativeCoeff}${powerString}`; // Append '-' for negative coefficients
        }
    }
}
