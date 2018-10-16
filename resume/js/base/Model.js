// var model = Model({resourceName:'Message'})
window.Model = function(options){
  let resourceName = options.resourceName

  return {
    init:function(){
      var APP_ID = 'w0Cuf0gEw4sNM2CJdBywFOl2-gzGzoHsz'
      var APP_KEY = 'EYGr9kFfKR3Tlto2DAe6hhYB'
      //刚刚出现bug init.js:77 Uncaught Error: SDK is already initialized.
      //message调用的
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    fetch:function(){
      var query = new AV.Query(resourceName);
      return query.find()//Promise对象
    },
    save:function(object){
      var X = AV.Object.extend(resourceName);
      var x = new X();
      return x.save(object)
    }
  }
}