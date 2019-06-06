(function ( $ ) {
 
    $.fn.AddMore = function(Top,BootstrapClass,objects) {
        var AddMoreButton=$('<button class="btn btn-success add-more" type="button"><i class="glyphicon glyphicon-plus"></i> Add</button>');
        var myContent=this.html();
        var myClass=this;

        
        if(Top){
            AddMoreButton.addClass(BootstrapClass)
           AddMoreButton.prependTo(this)
        }
        else{
            var div1=$('<div class="col-md-8"></div>');
            div1.append(AddMoreButton);
            this.append(div1);
        }
        // end of div
        

    
            $(".add-more").click(function(){ 
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
                var div=$('<div class="canBeRemoved"></div>');
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


          function AddButtonAtTheTop(AddMoreButton){

          }
          function AddButtonAtTheEnd(AddMoreButton){
           
          }
 
}( jQuery ));



$( document ).ready(function() {
    $('label').css("height",$('input').eq(0).css("height"));

});