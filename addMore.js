(function ( $ ) {
 
    $.fn.AddMore = function(Top,BootstrapClass,objects) {
        var AddMoreButton=$('<button class="btn btn-success add-more" type="button"><i class="glyphicon glyphicon-plus"></i> Add</button>');
        var myContent=this.html();
        var myClass=this;
        var na=ClassName();
        AddMoreButton.addClass(na)

        if(Top){
            AddMoreButton.addClass(BootstrapClass)
           AddMoreButton.prependTo(this)
        }
        else{
            var div1=$('<div class="col-md-8"></div>');
            div1.append(AddMoreButton);
            myClass.append(div1);
        }
        // end of div
        

    
            $("."+na).click(function(){ 
                Build();
            });

            $("body").on("click",".remove",function(){ 
                console.log("removed")
                $(this).parents(".canBeRemoved").remove();
            });

            if(objects){
                var repeated=objects[0].values.length
                for(var i=1;i<repeated;i++){
                    Build();
                }
                objects.forEach(function(obj,index){
                    $('input[name='+obj.name+']').val(obj.values[0]);
                    for(var i=1;i<obj.values.length;i++){
                        $('input[name='+obj.name+']').eq(i).val(obj.values[i]);
                    }
                });
            }

            function Build(){
                var div=$('<div class="form-group canBeRemoved"></div>');
                var RemoveButton=$('<button class="btn btn-danger remove" type="button"><i class="glyphicon glyphicon-remove"></i> Remove</button>');  
                if(Top){
                    AddRemoveAtTheTop(RemoveButton,div);
                    div.append(myContent);

                }
                else{
                    div.append(myContent);
                    AddRemoveAtTheEnd(RemoveButton,div);
                }
                myClass.after(div);

           }


           function AddRemoveAtTheTop(RemoveButton,div){
               RemoveButton.addClass(BootstrapClass);
                RemoveButton.prependTo(div);

           }

            function AddRemoveAtTheEnd(RemoveButton,div){
                var ButtonContainer=$('<div class="col-md-8"></div>');
                ButtonContainer.append(RemoveButton);
                div.append(ButtonContainer)
            }

            
          };

          var ClassName = function () {
            // Math.random should be unique because of its seeding algorithm.
            // Convert it to base 36 (numbers + letters), and grab the first 9 characters
            // after the decimal.
            return '_' + Math.random().toString(36).substr(2, 9);
          };

 
}( jQuery ));



$( document ).ready(function() {
    $('label').css("height",$('input').eq(0).css("height"));

});