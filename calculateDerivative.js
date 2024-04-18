class CalculateDerivative {
    constructor() {
        // No need to initialize terms here
    }

    calculateDerivative() {
        // Retrieve terms from AddTermController
        const terms = addTermController.terms;

        if (terms.length === 0) {
            alert("Please add at least one term to the polynomial.");
            return;
        }

        let stepsContent = document.getElementById("stepsContent");
        let answer=new DerivativeVal().compute(terms);
        let result = addTermController.generatePolynomial() + " is <b><u>" + answer + "</u></b>";


        stepsContent.innerHTML = '';
        document.getElementById("result").innerHTML = result;
        
        terms.forEach(term => {
            let p = document.createElement("p");
            let step = new DerivativeStep().compute(term.trim());
            if (step !== '') {
                let stepExplanation = step; // Modify the output to include the original term
                p.innerHTML = stepExplanation;
                stepsContent.appendChild(p);
            }
        });
        
        document.getElementById("steps").style.display = "block";
        document.getElementById("resultCard").style.display = "block"; // Show the second flashcard
    }
}
