(function ( $ ) {
 
    $.fn.AddMore = function(objects,repeated) {
          

        var AddMoreButton=$('<button class="btn btn-success add-more" type="button"><i class="glyphicon glyphicon-plus"></i> Add</button>');

        var myContent=this.html();
        var myClass=this;
    
            this.append(AddMoreButton);

            $(".add-more").click(function(){ 
              var div=$('<div class="canBeRemoved"></div>');
              div.append(myContent);
              var RemoveButton=$('<button class="btn btn-danger remove" type="button"><i class="glyphicon glyphicon-remove"></i> Remove</button>');            
              div.append(RemoveButton);
              myClass.after(div);
            });


            if(objects && repeated){
                for(var i=1;i<repeated;i++){
                    var div=$('<div class="canBeRemoved"></div>');
                    div.append(myContent);
                    var RemoveButton=$('<button class="btn btn-danger remove" type="button"><i class="glyphicon glyphicon-remove"></i> Remove</button>');            
                    div.append(RemoveButton);
                    myClass.after(div);
                }


                objects.forEach(function(obj,index){
                    $('input[name='+obj.name+']').val(obj.values[0]);
                    for(var i=1;i<obj.values.length;i++){
                        $('input[name='+obj.name+']').eq(i).val(obj.values[i]);
                    }
                });

               

            }


            $("body").on("click",".remove",function(){ 
                console.log("removed")
                $(this).parents(".canBeRemoved").remove();
            });

            
          };
 
}( jQuery ));