'use strict';

app.controller('ProfilePageController', [
	"$uibModal", "ProjectsFactory", "CustomersFactory", "TopSkillsFactory", "JourneysFactory",
	function($uibModal, ProjectsFactory: ProjectsFactory, CustomersFactory: CustomersFactory, TopSkillsFactory: TopSkillsFactory, JourneysFactory: JourneysFactory) {	
		let vm = this;
		let skills: Skill[] = [];
		let activePage = "WORK";

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

		function addOrIncrementSkill(skillName: string, months: number) {
			let skill = getSkillByName(skillName);
			if(skill == null) {
				skill = {
					name: skillName,
					months: 0,
					isTopSkill: TopSkillsFactory.isTopSkill(skillName)
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

		function shouldShowOnlyTopProjects(showOnlyTopProjects?: boolean): boolean {
			if(showOnlyTopProjects != null) {
				vm.showOnlyTopProjects = showOnlyTopProjects;
			}
			
			return vm.showOnlyTopProjects;
		}

		function shouldShowAllSkills(showAllSkills?: boolean): boolean {
			if(showAllSkills != null) {
				vm.showAllSkills = showAllSkills;
			}

			return vm.showAllSkills;
		}

		function isWorkPage(){
			return activePage == "WORK";
		}

		function isTravelPage(){
			return activePage == "TRAVEL";
		}

		function switchPage(pageName){
			return activePage = pageName;
		}

		function getWebDeveloperYears() {
			return Math.floor(Math.abs(new Date().getTime() - new Date(2005, 1).getTime()) / (1000 * 60 * 60 * 24 * 365));
		};
	}
]);