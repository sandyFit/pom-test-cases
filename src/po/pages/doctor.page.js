const BasePage = require("./base.page");
const ListHeaderComponent = require("../components/doctors/list-header-component");
const AddDoctorComponent = require("../components/doctors/add-doctor-component");

class DoctorsPage extends BasePage {
    constructor() {
        super("/showcase/angular/appoinmentplanner/#/doctors");
        this.addDoctorModal = new AddDoctorComponent();
        this.doctorListHeader = new ListHeaderComponent();
    }

    SpecialistCard(id) {
        return new SpecialistCard(id);
    }
}
module.exports = DoctorsPage;
