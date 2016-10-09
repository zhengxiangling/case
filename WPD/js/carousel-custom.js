   $(function() {
       var $byc = $(".byc");
       var $bycLi = $byc.find("li");
       var $bycLiWidth = $bycLi.width();
       var $bycLiLength = $bycLi.length;
       $byc.width($bycLiWidth * $bycLiLength);
       var $lb = $(".btn_lft");
       var $rb = $(".btn_rit");

       function fnbyclft() {
           $(".byc").animate({
               "marginLeft": -$bycLiWidth
           }, function() {
               $(".byc li").first().appendTo(".byc");
               $(".byc").css("marginLeft", 0);
           });
       }

       $lb.click(function() {
           fnbyclft()
       })

       function fnbycrit() {
           $(".byc li").last().prependTo($byc);
           $byc.css("margin-left", -$bycLiWidth);
           $byc.animate({
               "marginLeft": 0
           });
       }

       $rb.click(function() {
           fnbycrit()
       })

       var $time = setInterval(fnbyclft, 3000);

       $lb.mouseenter(function() {
           clearInterval($time)
       })

       $rb.mouseenter(function() {
           clearInterval($time)
       })

       $lb.mouseleave(function() {
           $time = setInterval(fnbyclft, 3000)
       })

       $rb.mouseleave(function() {
           $time = setInterval(fnbyclft, 3000)
       })
       $bycLi.mouseenter(function() {
           clearInterval($time)
       })
       $bycLi.mouseleave(function() {
           $time = setInterval(fnbyclft, 3000)
       })

   })
