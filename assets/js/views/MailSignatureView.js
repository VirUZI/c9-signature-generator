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
      name: this.$el.find("#name").val(),
      title: this.$el.find("#title").val(),
      phone: this.$el.find("#phone").val(),
      email: this.$el.find("#email").val()
    });

    $(this.el).find('.output').html(this.template(model.toJSON()));

    return this;
  }
});