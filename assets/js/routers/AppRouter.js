var AppRouter = Backbone.Router.extend({
  vent: _.extend({}, Backbone.Events),
  routes: {
    "": "index"
  },
  index: function() {
    var mailSignatureView = new MailSignatureView({
      el: $("#mail-signature-generator"),
      template: $('#MailSignatureTemplate1').html(),
      output: $('#output1')
    });
    mailSignatureView.render();

    var mailSignatureView2 = new MailSignatureView({
      el: $("#mail-signature-generator"),
      template: $('#MailSignatureTemplate2').html(),
      output: $('#output2')
    });
    mailSignatureView2.render();

  }
});