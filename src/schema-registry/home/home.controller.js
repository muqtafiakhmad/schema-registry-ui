angularAPP.controller('HomeCtrl', function ($log, SchemaRegistryFactory, toastFactory, UtilsFactory) {
  var password = prompt("Please enter your password", "");
  while(password == null || UtilsFactory.hashSha256(password) != ADMIN_PASSWORD_HASH){
    password = prompt("Please enter your password", "");
  }
  $log.info("Starting schema-registry controller - home");
  toastFactory.hideToast();
});
