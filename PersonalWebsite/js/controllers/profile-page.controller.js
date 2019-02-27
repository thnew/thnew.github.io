'use strict';
app.controller('ProfilePageController', [
    "$uibModal", "ProjectsFactory", "CustomersFactory", "TopSkillsFactory", "JourneysFactory",
    function ($uibModal, ProjectsFactory, CustomersFactory, TopSkillsFactory, JourneysFactory) {
        var vm = this;
        var skills = [];
        var activePage = "TRAVEL";
        (function constructor() {
            vm.skills = skills;
            vm.projects = ProjectsFactory.getProjects();
            vm.customers = CustomersFactory.getCustomers();
            vm.journeys = JourneysFactory.getJourneys();
            vm.amountOfWebDeveloperYears = getWebDeveloperYears();
            vm.showOnlyTopProjects = false;
            vm.showAllSkills = false;
            vm.journeyCount = JourneysFactory.getAmountOfCountries();
            vm.showCertificate = showCertificate;
            vm.shouldShowOnlyTopProjects = shouldShowOnlyTopProjects;
            vm.shouldShowAllSkills = shouldShowAllSkills;
            vm.isWorkPage = isWorkPage;
            vm.isTravelPage = isTravelPage;
            vm.switchPage = switchPage;
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
        function isWorkPage() {
            return activePage == "WORK";
        }
        function isTravelPage() {
            return activePage == "TRAVEL";
        }
        function switchPage(pageName) {
            return activePage = pageName;
        }
        function getWebDeveloperYears() {
            return Math.floor(Math.abs(new Date().getTime() - new Date(2005, 1).getTime()) / (1000 * 60 * 60 * 24 * 365));
        }
        ;
    }
]);
//# sourceMappingURL=profile-page.controller.js.map