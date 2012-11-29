var AppRouter = Backbone.Router.extend({
  vent: _.extend({}, Backbone.Events),
  routes: {
    "": "index"
  },
  index: function() {
    var mailSignatureView = new MailSignatureView({
      el: $("#mail-signature-generator"),
      template: $('#MailSignatureTemplate').html()
    });
    mailSignatureView.render();
  }
});