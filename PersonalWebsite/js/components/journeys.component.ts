'use strict';

app.component('journeysComponent', {
    templateUrl: 'js/components/journeys.component.html',
    bindings: {
        journeys: '='
    },
    controllerAs: 'vm'
});