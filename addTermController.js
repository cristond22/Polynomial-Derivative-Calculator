class AddTermController {
    constructor() {
        this.terms = [];
    }

    addTerm() {
        let coeff = document.getElementById("coeffInput").value.trim();
        let power = document.getElementById("powerInput").value.trim();
        let sign = document.querySelector("#terms button").textContent;

        if (coeff === '' || power === '') {
            alert("Please fill in both coefficient and power for the X term.");
            return;
        }

        let term = (this.terms.length === 0 ? '' : sign) + coeff + "x^" + power;
        // Adjust sign for the first term
        if (this.terms.length === 0 && sign === '-') {
            term = '-' + term;
        }
        this.terms.push(term);

        // Clear inputs
        document.getElementById("coeffInput").value = '';
        document.getElementById("powerInput").value = '';

        this.updatePolynomialDisplay();
    }

    updatePolynomialDisplay() {
        let polynomialDisplay = document.getElementById("polynomial");
        polynomialDisplay.innerHTML = "Polynomial: " + this.generatePolynomialString();
    }

    generatePolynomialString() {
        return addTermController.terms.map(term => {
            const parts = term.split('x^');
            if (parts.length === 2) {
                return parts[0] + 'x<sup>' + parts[1] + '</sup>';
            } else {
                return term;
            }
        }).join(" ");
    }
    
    
    generatePolynomial() {
        return addTermController.terms.map(term => {
            const parts = term.split('x^');
            if (parts.length === 2) {
                return parts[0] + 'x' + convertToSuperscript(parts[1]);
            } else {
                return term;
            }
        }).join(" ");
    }

    clearPolynomial() {
        this.terms = [];
        this.updatePolynomialDisplay();
    }
    
}
function convertToSuperscript(num) {
    const superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    return num.toString().split('').map(digit => superscripts[digit]).join('');
}
