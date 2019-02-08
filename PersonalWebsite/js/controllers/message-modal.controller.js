'use strict';
app.controller('MessageModalController', ["$uibModalInstance", function ($uibModalInstance) {
        this.ok = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);
//# sourceMappingURL=message-modal.controller.js.map