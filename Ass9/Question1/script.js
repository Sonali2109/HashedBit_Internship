function variableScopeDemo() {
    var varVariable = "I am var";
    let letVariable = "I am let";
    const constVariable = "I am const";
    
    if (true) {
        var varVariable = "Reassigned var inside block\n";
        let letVariable = "Reassigned let inside block\n";
        const constVariable = "Reassigned const inside block\n";
        console.log("Inside block:", varVariable, letVariable, constVariable);
    }
    console.log("Outside block:", varVariable);
    // console.log(letVariable, constVariable); // Error: let and const are block-scoped
}

variableScopeDemo();