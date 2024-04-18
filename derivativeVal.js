class DerivativeVal {
    compute(terms) {
        let derivativeTerms = {};

        terms.forEach(term => {
            let termDerivative = new DerivativeTerm().compute(term.trim());
            console.log("Derivative term for " + term + ": " + termDerivative);
            if (termDerivative !== '') {
                let power = parseInt(term.split('x^')[1].trim());
                let coeff = parseInt(term.split('x^')[0]);
                let derivativeCoeff = coeff * power; // Calculate the derivative coefficient
                let derivativePower = power - 1; // Calculate the derivative power
                if (derivativeCoeff !== 0) {
                    if (derivativeTerms.hasOwnProperty(derivativePower)) {
                        derivativeTerms[derivativePower] += derivativeCoeff;
                    } else {
                        derivativeTerms[derivativePower] = derivativeCoeff;
                    }
                }
            }
        });

        console.log("Derivative terms object: ", derivativeTerms);

        let derivative = '';
        // Sort the powers in descending order
        let sortedPowers = Object.keys(derivativeTerms).sort((a, b) => b - a);
        sortedPowers.forEach(power => {
            let coeff = derivativeTerms[power];
            if (coeff === 0) return; // Skip adding the term if coefficient is zero
            let sign = eachTermSign(coeff); // Determine the sign for each term
            coeff = (coeff < 0) ? '- ' + (-coeff) : coeff;
            let term = '';
            if (parseInt(power) === 0) {
                term = coeff;
            } else {
                term = (coeff === 1 && parseInt(power) !== 0) ? 'x' : (coeff + 'x');
            }
            term += (parseInt(power) !== 0) ? '' + convertToSuperscript(power) : '';
            
            derivative += (derivative === '') ? term : (` ${sign} ${term}`); // Include sign for all terms
        });

        console.log("Derivative string: ", derivative);

        return derivative === '' ? '0' : derivative;
    }
}

function convertToSuperscript(num) {
    const superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    return num.toString().split('').map(digit => superscripts[digit]).join('');
}

function eachTermSign(coeff) {
    return (coeff < 0) ? '' : '+';
}
