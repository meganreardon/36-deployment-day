'use strict';

require('./_a-modal.scss');

module.exports = function() {
  return {
    restrict: 'EAC',
    template: require('./a-modal.html'),
    controller: ['$log', '$uibModal', AModalController],
    bindToController: true,
    controllerAs: 'aModalCtrl',
    scope: {
      // resolve: '<',
      // close: '<',
      // dismiss: '<'
      resolve: '<',
      close: '&',
      dismiss: '&'
    }
  };
};

function AModalController($log, $uibModal) {
  $log.debug('AModalController');

  this.openModal = function() {
    $log.log('openModal()');
    $uibModal.open({
      templateUrl: 'aModalContent.html'
    });
  };

  this.closeModal = function() {
    $log.log('closeModal()') ;
    $uibModal.close();
  };
}
