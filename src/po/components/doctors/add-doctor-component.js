const BaseComponent = require("../common/base.component");

class AddDoctorComponent extends BaseComponent {
    constructor() {
        super('.new-doctor-dialog'); 
    }

    get saveBtn() {
        return this.rootEl.$('.e-footer-content button.e-primary');
    }

    get closeBtn() {
        return this.rootEl.$('.new-doctor-dialog button.e-dlg-closeicon-btn');
    }

    /**
     * @params {'name' | 'phone' | 'email' | 'education' | 'designation' |}
     * @returns {*}
     */
    input(name) {
        const selectors = {
            name: '[name="Name"]',
            phone: '#DoctorMobile',
            email: '[name="Email"]', 
            education: '[name="Education"]',
            designation: '[name="Designation"]'
        }
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }

        
}
module.exports = AddDoctorComponent;
