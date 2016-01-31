/* jshint -W117, -W030 */
describe('DashboardController', function() {
    var controller;
    var people = mockData.getMockPeople();

    beforeEach(function() {
        bard.appModule('app.dashboard');
        bard.inject('$controller', '$log', '$rootScope', 'dashboardService');
    });

    beforeEach(function () {
        sinon.stub(dashboardService);
        dashboardService.getExpenses.callsArgWith(0,people);
        controller = $controller('DashboardController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Dashboard controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Dashboard', function () {
                expect(controller.title).to.equal('Dashboard');
            });

            it('should have news', function () {
                expect(controller.news).to.not.be.empty;
            });
        });
    });
});
