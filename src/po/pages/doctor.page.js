const BasePage = require("./base.page");
const { AddDoctorModal, DoctorListHeader, SpecialistCard } = require("../components");

class DoctorsPage extends BasePage {
    constructor() {
        super("/showcase/angular/appoinmentplanner/#/doctors");
        this.addDoctorModal = new AddDoctorModal();
        this.doctorListHeader = new DoctorListHeader();
    }

    SpecialistCard(id) {
        return new SpecialistCard(id);
    }
}
module.exports = DoctorsPage;
