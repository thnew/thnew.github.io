function Domain(domainObj, domainName) {
  for(var f in domainObj)
  {
    this[f] = domainObj[f];
  }

  if(this.toDTO == null)
    {
      throw ("Object of domain '" + domainName + "' has no method toDTO!");
    }
}

module.exports = Domain;