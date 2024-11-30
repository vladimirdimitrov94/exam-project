import { ValidatorFn } from "@angular/forms";

export function matchPasswordValidator(
    passwordControlName: string,
    rePasswordControlName: string
): ValidatorFn {
    return (control) => {
        const passFormControl = control.get(passwordControlName)
        const rePassFormControl = control.get(rePasswordControlName)

        const passwordsMatched = passFormControl?.value === rePassFormControl?.value;
        
        return passwordsMatched ? null : {matchPasswordValidator : true}
    }
}