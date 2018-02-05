'use strict';

app.controller('ProfilePageController', [ "$scope", "$uibModal", "ProjectsFactory", function($scope, $uibModal, ProjectsFactory) {
	var self = this;
	
	$scope.minMonthsToDisplaySkill = 12;
	$scope.skills = [];
	$scope.projects = ProjectsFactory.getProjects();
	
	self.getSkillByName = function(skillName) {
		for(var f in $scope.skills)
		{
			var item = $scope.skills[f];
			if(item.name == skillName)
			{
				return item;
			}
		}
		
		return null;
	};
	
	self.addOrIncrementSkill = function(skillName, months) {
		var skill = self.getSkillByName(skillName);
		if(skill == null) {
			skill = {
				name: skillName,
				months: 0
			};
			$scope.skills.push(skill);
		}
		
		skill.months += months;
	};
	
	(function addSkillsToScope() {
		for(var f in $scope.projects) {
			var project = $scope.projects[f];
			
			var skills = project.technicalLanguages.concat(project.frameworks);
			for(var g in skills)
			{
				var skill = skills[g];
				
				self.addOrIncrementSkill(skill, project.months);
			}
		}
	})();
	
	$scope.showCertificate = function() {
		var modalInstance = $uibModal.open({
			animation: false,
			templateUrl: 'certificateModal',
			controller: 'MessageModalController',
			controllerAs: '$ctrl',
			size: "md"
		});
	};
}]);