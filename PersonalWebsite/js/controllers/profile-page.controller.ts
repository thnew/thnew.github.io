'use strict';

app.controller('ProfilePageController', [
	"$uibModal", "ProjectsFactory", "CustomersFactory",
	function($uibModal, ProjectsFactory: ProjectsFactory, CustomersFactory: CustomersFactory) {	
		let vm = this;
		let skills: Skill[] = [];

		(function constructor() {
			vm.skills = skills;
			vm.projects = ProjectsFactory.getProjects();
			vm.customers = CustomersFactory.getCustomers();
			vm.amountOfWebDeveloperYears = getWebDeveloperYears();

			vm.showCertificate = showCertificate;

			addSkillsToScope();
		})();

		function addOrIncrementSkill(skillName: string, months: number) {
			let skill = getSkillByName(skillName);
			if(skill == null) {
				skill = {
					name: skillName,
					months: 0
				};
				skills.push(skill);
			}
			
			skill.months += months;
		};
		
		function getSkillByName(skillName: string): Skill {
			for(let f in skills)
			{
				let item = skills[f];
				if(item.name == skillName)
				{
					return item;
				}
			}
		};
		
		function addSkillsToScope() {
			for(let f in vm.projects) {
				let project = vm.projects[f];
				
				let skills = project.technicalLanguages.concat(project.frameworks);
				for(let g in skills)
				{
					let skill = skills[g];
					
					addOrIncrementSkill(skill, project.months);
				}
			}
		};
		
		function showCertificate() {
			let modalInstance = $uibModal.open({
				animation: false,
				templateUrl: 'certificateModal',
				controller: 'MessageModalController',
				controllerAs: '$ctrl',
				size: "md"
			});
		};
		
		function getWebDeveloperYears() {
			return Math.floor(Math.abs(new Date().getTime() - new Date(2005, 1).getTime()) / (1000 * 60 * 60 * 24 * 365));
		};
}]);