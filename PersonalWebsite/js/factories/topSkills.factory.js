'use strict';
app.factory('TopSkillsFactory', function () {
    var topSkills = [
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
        isTopSkill: function (skillName) {
            return topSkills.indexOf(skillName) != -1;
        }
    };
});
//# sourceMappingURL=topSkills.factory.js.map