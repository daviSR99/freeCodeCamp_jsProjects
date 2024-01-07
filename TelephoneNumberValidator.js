function telephoneCheck(str) {

    let phoneValidator = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/
    
    return phoneValidator.test(str);
    
    
    }
    
    telephoneCheck("555-555-5555");