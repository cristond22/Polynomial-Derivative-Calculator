class DerivativeStep {
    compute(term) {
        let sign = term.charAt(0);
        let coeff = Math.abs(parseInt(term.split('x^')[0].replace(/[+-]/g, '').trim())); // Absolute value of coefficient
        let power = parseInt(term.split('x^')[1].trim());
        let negative = (sign === "-");
        
        // For ax^n, the derivative is a(n)x^(n-1)
        let derivativeCoeff = coeff * power;
        let derivativePower = power - 1;
        
        if (derivativeCoeff === 0) {
            return ''; // Don't show steps for terms that have a derivative of 0
        } else if (derivativePower === 0) {
            let powerString = `x<sup class="power">${derivativePower}</sup>`;
            let originalCoeff = coeff;
            let powerOriginal = `<sup class="power red">${power}</sup>`;
            let powerRed = `<span class="red">${power}</span>`;
            let termOriginal = `${negative ? '-' : ''}<span class="green">${originalCoeff}</span>x${powerOriginal}`;
            let stepExplanation = `${negative ? '-' : ''}<span class="red">${power}</span> × <span class="green">${coeff}</span> × x<sup class="power">${powerRed}-1</sup>`;
            let resultString = `${negative ? '-' : ''}${derivativeCoeff}`;
            return `The derivative of ${termOriginal} = ${stepExplanation} = ${resultString}`; // Append '-' for negative coefficients
        } else {
            let powerString = (derivativePower === 0) ? '' : `x<sup class="power">${derivativePower}</sup>`;
            let originalCoeff = coeff;
            let powerOriginal = `<sup class="power red">${power}</sup>`;
            let powerRed = `<span class="red">${power}</span>`;
            let termOriginal = `${negative ? '-' : ''}<span class="green">${originalCoeff}</span>x${powerOriginal}`;
            let stepExplanation = `${negative ? '-' : ''}<span class="red">${power}</span> × <span class="green">${coeff}</span> × x<sup class="power">${powerRed}-1</sup>`;
            let resultString = `${negative ? '-' : ''}${derivativeCoeff}${powerString}`;
            return `The derivative of ${termOriginal} = ${stepExplanation} = ${resultString}`; // Append '-' for negative coefficients
        }
    }
}
function convertToSuperscript(num) {
    const superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    return num.toString().split('').map(digit => superscripts[digit]).join('');
}
