'use strict';
app.controller('ProfilePageController', [
    "$uibModal", "ProjectsFactory", "CustomersFactory",
    function ($uibModal, ProjectsFactory, CustomersFactory) {
        var vm = this;
        var skills = [];
        (function constructor() {
            vm.skills = skills;
            vm.projects = ProjectsFactory.getProjects();
            vm.customers = CustomersFactory.getCustomers();
            vm.amountOfWebDeveloperYears = getWebDeveloperYears();
            vm.showCertificate = showCertificate;
            addSkillsToScope();
        })();
        function addOrIncrementSkill(skillName, months) {
            var skill = getSkillByName(skillName);
            if (skill == null) {
                skill = {
                    name: skillName,
                    months: 0
                };
                skills.push(skill);
            }
            skill.months += months;
        }
        ;
        function getSkillByName(skillName) {
            for (var f in skills) {
                var item = skills[f];
                if (item.name == skillName) {
                    return item;
                }
            }
        }
        ;
        function addSkillsToScope() {
            for (var f in vm.projects) {
                var project = vm.projects[f];
                var skills_1 = project.technicalLanguages.concat(project.frameworks);
                for (var g in skills_1) {
                    var skill = skills_1[g];
                    addOrIncrementSkill(skill, project.months);
                }
            }
        }
        ;
        function showCertificate() {
            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: 'certificateModal',
                controller: 'MessageModalController',
                controllerAs: '$ctrl',
                size: "md"
            });
        }
        ;
        function getWebDeveloperYears() {
            return Math.floor(Math.abs(new Date().getTime() - new Date(2005, 1).getTime()) / (1000 * 60 * 60 * 24 * 365));
        }
        ;
    }
]);
//# sourceMappingURL=profile-page.controller.js.map