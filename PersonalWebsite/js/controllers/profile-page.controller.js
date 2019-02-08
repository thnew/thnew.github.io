'use strict';
app.controller('ProfilePageController', [
    "$uibModal", "ProjectsFactory", "CustomersFactory", "TopSkillsFactory",
    function ($uibModal, ProjectsFactory, CustomersFactory, TopSkillsFactory) {
        var vm = this;
        var skills = [];
        (function constructor() {
            vm.skills = skills;
            vm.projects = ProjectsFactory.getProjects();
            vm.customers = CustomersFactory.getCustomers();
            vm.amountOfWebDeveloperYears = getWebDeveloperYears();
            vm.showOnlyTopProjects = true;
            vm.showAllSkills = false;
            vm.showCertificate = showCertificate;
            vm.shouldShowOnlyTopProjects = shouldShowOnlyTopProjects;
            vm.shouldShowAllSkills = shouldShowAllSkills;
            addSkillsToScope();
        })();
        function addOrIncrementSkill(skillName, months) {
            var skill = getSkillByName(skillName);
            if (skill == null) {
                skill = {
                    name: skillName,
                    months: 0,
                    isTopSkill: TopSkillsFactory.isTopSkill(skillName)
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
        function shouldShowOnlyTopProjects(showOnlyTopProjects) {
            if (showOnlyTopProjects != null) {
                vm.showOnlyTopProjects = showOnlyTopProjects;
            }
            return vm.showOnlyTopProjects;
        }
        function shouldShowAllSkills(showAllSkills) {
            if (showAllSkills != null) {
                vm.showAllSkills = showAllSkills;
            }
            return vm.showAllSkills;
        }
        function getWebDeveloperYears() {
            return Math.floor(Math.abs(new Date().getTime() - new Date(2005, 1).getTime()) / (1000 * 60 * 60 * 24 * 365));
        }
        ;
    }
]);
//# sourceMappingURL=profile-page.controller.js.map