'use strict';

app.component('projectsComponent', {
    templateUrl: 'js/components/projects.component.html',
    bindings: {
        projects: '=',
        shouldShowOnlyTopProjects: '='
    },
    controllerAs: 'vm'
});