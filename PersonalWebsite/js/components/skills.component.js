'use strict';
app.component("skillsComponent", {
    templateUrl: "js/components/skills.component.html",
    bindings: {
        skills: '='
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
        vm.minMonthsToDisplaySkill = 12;
    }
});
//# sourceMappingURL=skills.component.js.map