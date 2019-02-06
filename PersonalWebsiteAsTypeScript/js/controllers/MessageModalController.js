'use strict';
app.controller('MessageModalController', ["$uibModalInstance", function ($uibModalInstance) {
        this.ok = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);
//# sourceMappingURL=MessageModalController.js.map