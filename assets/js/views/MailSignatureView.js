var MailSignatureView = Backbone.View.extend({
  className: "mail-signature",
  tagName: "div",
  initialize: function(options) {
    var self = this;
    this.template = Handlebars.compile(options.template || "");
    
    this.on("keyup", this.render);

    this.$el.find("input").keyup(function() {
      self.trigger("keyup");
    });

  },
  render: function() {

    var model = new MailSignature({
      name: this.$el.find("#name").val() || "För- och efternamn",
      title: this.$el.find("#title").val() || "Titel",
      phone: this.$el.find("#phone").val() || "Telefonnummer (direkt)",
      email: this.$el.find("#email").val() || "E-postadress"
    });

    $(this.el).find('div.output').html(this.template(model.toJSON()));

    return this;
  }
});