'use strict';

app.component("skillsComponent", {
    templateUrl: "js/components/skills.component.html",
    bindings: {
        skills: '=',
        shouldShowAllSkills: '='
    },
    controllerAs: 'vm'
});