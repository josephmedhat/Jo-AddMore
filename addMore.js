(function($) {
  $.fn.AddMore = function(options) {
    var settings = $.extend(
      {
        // These are the defaults.
        Top: false,
        objects: [],
        BootstrapClass: "col-md-2",
        buttonAddLabel: "Add",
        buttonRemoveLabel: "Remove",
        maskCard: "$",
        onAdd: () => {},
        onFetch: () => {}
      },
      options
    );
    var AddMoreButton = $(
      '<button class=" add-more" ><i class="glyphicon glyphicon-plus"></i> ' +
        settings.buttonAddLabel +
        "</button>"
    );
    var myContent = this.html();
    var myClass = this;
    var na = ClassName();
    AddMoreButton.addClass(na);

    if (settings.Top) {
      AddMoreButton.addClass(settings.BootstrapClass);
      AddMoreButton.prependTo(this);
    } else {
      var div1 = $('<div class="col-md-12"></div>');
      div1.append(AddMoreButton);
      myClass.append(div1);
    }
    $("." + na).click(function(e) {
      //fire onAdd event
      e.preventDefault();
      settings.onAdd(Build());
    });

    $("body").on("click", ".remove", function(e) {
      console.log("removed");
      e.preventDefault();
      $(this)
        .parents(".canBeRemoved")
        .remove();
    });
    if ($(this).attr("data-value")) {
      settings.objects = JSON.parse($(this).attr("data-value"));
    }

    if (settings.objects.length > 0) {
      var repeated = settings.objects.length;
      for (var i = 1; i < repeated; i++) {
        //fire Fetch Event
        settings.onFetch(Build());
      }
      settings.objects.forEach(function(obj, index) {
        for (var name in obj) {
          if ($("[name='" + maskName(name) + "']").eq(index).length > 0) {
            $("[name='" + maskName(name) + "']")
              .eq(index)
              .val(obj[name]);
          }
        }
      });
    }

    function Build() {
      var div = $('<div class="form-group canBeRemoved"></div>');
      var RemoveButton = $(
        '<button class="btn-danger remove" type="button"><i class="glyphicon glyphicon-remove"></i> ' +
          settings.buttonRemoveLabel +
          "</button>"
      );
      if (settings.Top) {
        AddRemoveAtTheTop(RemoveButton, div);
        div.append(myContent);
      } else {
        div.append(myContent);
        AddRemoveAtTheEnd(RemoveButton, div);
      }
      myClass.after(div);
      return div;
    }

    function maskName(name) {
      return $(myClass)
        .attr("data-mask")
        .replace(settings.maskCard, name);
    }

    function AddRemoveAtTheTop(RemoveButton, div) {
      RemoveButton.addClass(settings.BootstrapClass);
      RemoveButton.prependTo(div);
    }

    function AddRemoveAtTheEnd(RemoveButton, div) {
      var ButtonContainer = $('<div class="col-md-12"></div>');
      ButtonContainer.append(RemoveButton);
      div.append(ButtonContainer);
    }
  };

  var ClassName = function() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };
})(jQuery);
