import SelectorsSignIn from "./selectors-signin";
import SelectorsSignup from "../SignUp/selectors-signup";

const select = new SelectorsSignIn();
const selector = new SelectorsSignup();

class SignInFunctionality {
    fillEmailAddress(email) {
        select.loginEmailAddressField().clear().type(email);
    }

    fillPassword(password) {
        select.loginPasswordField().clear().type(password);
    }

    clickOnLoginButton() {
        select.loginButton().click();
    }

    logout() {
        selector.shopMenu().contains('Logout').click();
    }

    login(email, password) {
        this.fillEmailAddress(email);
        this.fillPassword(password);
        this.clickOnLoginButton();
    }

    loginViaApi(email, password) {
        return cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            body: {
                email: email,
                password: password
            }
        });
    }

     createUserViaApi(){
         return cy.request({
             method: 'POST',
             url: 'https://automationexercise.com/api/createAccount',
             body: {
                 name:'7237wmm16sb@gmail.com',
                 password: 'title',
                 birth_date:'20',
                 birth_month: '02',
                 birth_year: '2000',
                 firstname: 'firstName',
                 lastname: 'lastName',
                 company: 'Tesvan',
                 address1: 'Washington',
                 country: 'test',
                 zipcode: 'test',
                 state: 'test',
                 city: 'test',
                 mobile_number: 'test'

             }
         });
    }
}

export default SignInFunctionality;
