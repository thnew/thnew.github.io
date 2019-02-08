'use strict';

app.component('projectsComponent', {
    templateUrl: 'js/components/projects.component.html',
    bindings: {
        projects: '='
    },
    controllerAs: 'vm'
});