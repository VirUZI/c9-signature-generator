var MailSignatureView = Backbone.View.extend({
  className: "mail-signature",
  tagName: "div",
  initialize: function(options) {
    var self = this;
    this.template = Handlebars.compile(options.template || "");
    this.$output = options.output;

    this.on("keyup", this.render);

    this.$el.find("input").keyup(function() {
      self.trigger("keyup");
    });

  },
  render: function() {

    var model = new MailSignature({
      name: this.$el.find("#name").val() || "För- och efternamn",
      title: this.$el.find("#title").val() || "Titel",
      direct: this.$el.find("#direct").val() || "8 120 330 00",
      mobile: this.$el.find("#mobile").val() || "Telefonnummer (mobil)"
    });

    this.$output.html(this.template(model.toJSON()));


    var rows = this.$output.val().split('\n').length;
    this.$output.attr("rows", rows);


    return this;
  }
});