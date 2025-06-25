const { pages } = require("../po");
/**
 * @fileoverview Test suite for the Doctors section of the Syncfunsion Appointment Planner demo app.
 * This includes tests for page title validation, modal interaction, and doctor creation.
 */

describe("Doctors' page", () => {
    /**
     * Navigate to the dashboard before each test case.
     */
    beforeEach(async () => {
        await pages("dashboard").open(); 
    });

    /**
     * @test Validates the page title of the Appointment Planner dashboard.
     */
    it("Check page title", async () => {
        const title = await browser.getTitle();
        console.log(`Page title in the browser: ${title}`)
        await expect(browser).toHaveTitle("Appointment Planner - Syncfusion Angular Components Showcase App");
    });

    /**
     * @test Opens the modal window for adding a new doctor and confirms its visibility.
     */
    it("open window to add a new doctor", async () => {
        await pages("dashboard").sideMenu.item("doctors").click();
        await pages("doctors").doctorListHeader.addNewDoctorBtn.click();
        await expect(pages("doctors").addDoctorModal.rootEl).toBeDisplayed();
    });

    /**
     * @test Fills out and submits the form to add a new doctor, then validates UI changes.
     */
    it("Add a new doctor", async () => {
        await pages("dashboard").sideMenu.item("doctors").click();
        await pages("doctors").doctorListHeader.addNewDoctorBtn.click();
        await pages("doctors").addDoctorModal.rootEl.waitForDisplayed();

        await $('[name="Name"]').setValue("John Doe");
        await $('#DoctorMobile').setValue(6669996969);
        await $('[name="Email"]').setValue("test@test.com");
        await $('[name="Education"]').setValue("Basic");
        await $('[name="Designation"]').setValue("Test");

        await $('.e-footer-content button.e-primary').click();
        await expect(pages("doctors").addDoctorModal.rootEl).not.toBeDisplayed();

        await expect($('#Specialist_8 .name')).toHaveText("Dr. John Doe");
        await expect($('#Specialist_8 .education')).toHaveText("Basic", { ignoreCase: true });
    });

    /**
     * @test Close the modal window for adding a new doctor
     */
    it("Close modal window", async () => {
        await pages("dashboard").sideMenu.item("doctors").click();
        await pages("doctors").doctorListHeader.addNewDoctorBtn.click();
        await pages("doctors").addDoctorModal.rootEl.waitForDisplayed();
        await $('.new-doctor-dialog button.e-dlg-closeicon-btn').click();

        await expect(pages("doctors").addDoctorModal.rootEl).not.toBeDisplayed();
    })
});

