'use strict';

interface TopSkillsFactory {
	isTopSkill(skillName: string): Boolean
}

app.factory('TopSkillsFactory', function(): TopSkillsFactory {
    let topSkills = [
        'JavaScript',
        'C#',
        'HTML',
        'CSS',
        'ASP.NET MVC',
        'JQuery',
        'ASP.NET WebAPI',
        'Bootstrap',
        'Entity Framework',
        'AngularJS',
        'SQL'
    ];
    
    return {
        isTopSkill(skillName: string): Boolean {
            return topSkills.indexOf(skillName) != -1;
        }
    };
});