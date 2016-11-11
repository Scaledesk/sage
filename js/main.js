/**
 * Created by neerajsingh on 17/10/16.
 */










//Floating labels//

$("input[type ='text']").click(function(){
    var $this = $(this);
    $this.attr("placeholder", "");
    $this.parent().find(".float-label").addClass("label-top");

});

//Ends here//


