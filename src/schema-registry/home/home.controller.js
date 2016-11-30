angularAPP.controller('HomeCtrl', function ($log, SchemaRegistryFactory, toastFactory) {
  sha256 = require('js-sha256').sha256;
  var password = prompt("Please enter your password", "");
  while(sha256(password) != ADMIN_PASSWORD_HASH){
    password = prompt("Please enter your password", "");
  }
  $log.info("Starting schema-registry controller - home");
  toastFactory.hideToast();
});