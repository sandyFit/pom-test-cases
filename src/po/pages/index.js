const DashboardPage = require("../pages/dashboard.page");
const DoctorsPage = require("../pages/doctor.page");

/**
 * @param name {'dashbdoard' | 'doctors'}
 * @returns {DashboardPage | DoctorsPage}
 */
function pages(name) {
    const items = {
        dashboard: new DashboardPage(),
        doctors: new DoctorsPage()
    }
    return items[name.toLowerCase()];
}
module.exports = {
    DashboardPage,
    DoctorsPage,
    pages
}
    
