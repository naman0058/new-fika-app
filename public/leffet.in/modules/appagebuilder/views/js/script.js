function addJSProduct(n){$(".thumbs_list_"+n).serialScroll({items:"li:visible",prev:".view_scroll_left_"+n,next:".view_scroll_right_"+n,axis:"y",offset:0,start:0,stop:!0,duration:700,step:1,lazy:!0,lock:!1,force:!1,cycle:!1,onBefore:function(t,a,e,i,o){0==o?$(".view_scroll_left_"+n).addClass("disable"):o==i.length-1?$(".view_scroll_right_"+n).addClass("disable"):($(".view_scroll_left_"+n).removeClass("disable"),$(".view_scroll_right_"+n).removeClass("disable"))}}),$(".thumbs_list_"+n).trigger("goto",1),$(".thumbs_list_"+n).trigger("goto",0)}function addEffectProducts(){"undefined"!=typeof leoOption&&leoOption.product_list_image&&($(".leo-more-info").each(function(){addJSProduct($(this).data("idproduct"))}),addEffectProduct())}function addEffectProduct(){var i="easeInOutQuad";$(".leo-more-info").each(function(){var e=this;$(e).find(".leo-hover-image").each(function(){$(this).mouseover(function(){var t=$(this).attr("rel"),a=$(e).parent().find(".product-thumbnail img").first();a.length||(a=$(e).parent().find(".product_image img").first()),a.length&&($(a).stop().animate({opacity:0},{duration:800,easing:i}),$(a).first().attr("src",t),$(a).first().attr("data-rel",t),$(a).stop().animate({opacity:1},{duration:800,easing:i})),$(this).hasClass("shown")||($(e).find(".shown").removeClass("shown"),$(this).parent().addClass("shown"))})}),$(".thickbox-ajax-"+$(this).data("idproduct")).fancybox({helpers:{overlay:{locked:!1}},hideOnContentClick:!0,transitionIn:"elastic",transitionOut:"elastic"})})}function addEffOneImg(){var a=800,e="easeInOutQuad";$(".product-additional").each(function(){var t;$(this).find("img").length&&($(this).parent().find("img").first(),t=$(this),$(this).parent().mouseenter(function(){$(this).find("img").first().stop().animate({opacity:0},{duration:a,easing:e}),$(t).stop().animate({opacity:1},{duration:a,easing:e})}),$(this).parent().mouseleave(function(){$(this).find("img").first().stop().animate({opacity:1},{duration:a,easing:e}),$(t).stop().animate({opacity:0},{duration:a,easing:e})}))})}function log(t){console.log(t)}function activeAnimation(){$(".has-animation").each(function(){onScrollInit($(this))})}function onScrollInit(t){t.each(function(){var t,a=$(this),e=$(a).data("animation"),i=$(a).data("animation-delay"),o=$(a).data("animation-duration"),n=$(a).data("animation-iteration-count");t=1==$(a).data("animation-infinite")?"infinite":n,a.css({"-webkit-animation-delay":i,"-moz-animation-delay":i,"animation-delay":i,"-webkit-animation-duration":o,"-moz-animation-duration":o,"animation-duration":o,"-webkit-animation-iteration-count":t,"-moz-animation-iteration-count":t,"animation-iteration-count":t}),a.waypoint(function(){a.hasClass("has-animation")&&a.addClass("animated "+e).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("has-animation animated "+e)}),this.destroy()},{triggerOnce:!0,offset:"100%"})})}function synSize(t){var a=$("#"+t),e=$(a).closest(".gmap-cover"),i=$(e).find(".gmap");$(a).height($(i).height())}function apshowmore(){$(".btn-show-more").click(function(){var e=parseInt($(this).data("page")),t=parseInt($(this).data("use-animation")),i=$(this),a=$(this).closest(".ApProductList").find(".apconfig").val();i.data("reset-text",i.html()),i.html(i.data("loading-text")),$.ajax({headers:{"cache-control":"no-cache"},url:prestashop.urls.base_url+"modules/appagebuilder/apajax.php",async:!0,cache:!1,dataType:"Json",data:{config:a,p:e,use_animation:t},success:function(t){var a=$(i).closest(".box-show-more");t.is_more||$(a).removeClass("open").fadeOut(),t.html&&$(a).prev().append(t.html),$(i).data("page",e+1),void 0!==$.LeoCustomAjax&&$.isFunction($.LeoCustomAjax)&&(new $.LeoCustomAjax).processAjax(),callLeoFeature(),activeAnimation()}}).always(function(){i.html(i.data("reset-text"))})})}function apPopupForm(){$.cookie("apnewletter")||$.fancybox({content:$(".ap-popup").html(),wrapCSS:"ap-popup-clone",afterClose:function(t,a){},beforeShow:function(t,a){this.inner.append("<div class='turnoff-popup-wrapper text-center'><input id='turnoff-popup-bt' name='turnoff-popup-bt' class='turnoff-popup' type='checkbox'><label for='turnoff-popup-bt'>"+turnoff_popup_text+"</label></div>"),$(".turnoff-popup").click(function(){$(this).hasClass("active")?($.cookie("apnewletter",null),$(this).removeClass("active")):($.cookie("apnewletter","1"),$(this).addClass("active"))})}})}function addClassLoading(a){$(".timeline-wrapper").each(function(){var t;$(this).data(a)<=$(this).data("item")&&(t=$(this).data("item")-$(this).data(a),$(this).data(a)<$(this).data("item")&&(t=$(this).data("item")-$(this).data(a),$(this).find(".timeline-parent").slice(-t).remove()),12%$(this).data(a)==0?"m"==a?$(this).find(".timeline-parent").addClass("col-xs-"+12/$(this).data(a)):$(this).find(".timeline-parent").addClass("col-"+a+"-"+12/$(this).data(a)):$(this).find(".timeline-parent").css({width:100/$(this).data(a)+"%",float:"left"}),$(".timeline-wrapper").removeClass("prepare"))})}function callLeoFeature(){"undefined"!=typeof leoBtCart&&leoBtCart(),"undefined"!=typeof leoSelectAttr&&leoSelectAttr(),"undefined"!=typeof LeoWishlistButtonAction&&LeoWishlistButtonAction(),"undefined"!=typeof LeoCompareButtonAction&&LeoCompareButtonAction(),"undefined"!=typeof actionQuickViewLoading&&actionQuickViewLoading()}function SetOwlCarouselFirstLast(t){t.find(".owl-item").removeClass("first"),t.find(".owl-item.active").first().addClass("first"),t.find(".owl-item").removeClass("last"),t.find(".owl-item.active").last().addClass("last")}function removeParamFromURL(t,a){var e=a.split("?")[0],i=[],o=-1!==a.indexOf("?")?a.split("?")[1]:"";if(""!==o){for(var n=(i=o.split("&")).length-1;0<=n;--n)i[n].split("=")[0]===t&&i.splice(n,1);0<i.length&&(e=e+"?"+i.join("&"))}return e}function getParamFromURL(t,a){a.split("?")[0];var e=[],i=-1!==a.indexOf("?")?a.split("?")[1]:"";if(""!==i)for(var o=(e=i.split("&")).length-1;0<=o;--o)if(e[o].split("=")[0]===t)return e[o].split("=")[1];return!1}!function(s){s.LeoCustomAjax=function(){this.leoData="leoajax=1"},s.LeoCustomAjax.prototype={processAjax:function(){var t=this;leoOption.category_qty&&s(".leo-qty").length?t.getCategoryList():s(".leo-qty").length&&s(".leo-qty").remove(),leoOption.product_list_image&&s(".leo-more-info").length?t.getProductListImage():s(".leo-more-info").length&&s(".leo-more-info").remove(),leoOption.product_one_img&&s(".product-additional").length?t.getProductOneImage():s(".product-additional").length&&s(".product-additional").remove(),leoOption.product_one_img&&s(".product-attribute-additional").length?t.getProductAttributeOneImage():s(".product-attribute-additional").length&&s(".product-attribute-additional").remove(),leoOption.product_one_img&&s(".product-all-additional").length?t.getProductAllOneImage():s(".product-all-additional").length&&s(".product-all-additional").remove(),leoOption.productCdown&&s(".leo-more-cdown").length?t.getProductCdownInfo():s(".leo-more-cdown").length&&s(".leo-more-cdown").remove(),leoOption.productCdown&&s(".leo-more-color").length?t.getProductColorInfo():s(".leo-more-color").length&&s(".leo-more-color").remove(),s(".product-item-size").length&&t.getSizeContent(),s(".product-item-attribute").length&&t.getAttributeContent(),s(".product-item-manufacture").length&&t.getManufactureName(),s(".leo-ajax-tabs").length&&t.getTabContent(),(s(".ap-total-wishlist").length||s(".ap-total-compare").length)&&t.getCountWishlistCompare(),"leoajax=1"!=t.leoData&&s.ajax({type:"POST",headers:{"cache-control":"no-cache"},url:prestashop.urls.base_url+"modules/appagebuilder/apajax.php?rand="+(new Date).getTime(),async:!0,cache:!1,dataType:"json",data:t.leoData,success:function(t){if(t){if(t.cat){for(i=0;i<t.cat.length;i++){var a=t.cat[i].total,e=s(".leo-qty.leo-cat-"+t.cat[i].id_category).data("str");void 0!==e&&(a+="<span>"+e+"</span>"),s(".leo-qty.leo-cat-"+t.cat[i].id_category).html(a),s(".leo-qty.leo-cat-"+t.cat[i].id_category).show()}s(".leo-qty").each(function(){""==s(this).html()&&(s(this).html("0"),s(this).show())})}if(t.product_list_image){var o=new Array;for(i=0;i<t.product_list_image.length;i++)o[t.product_list_image[i].id]=t.product_list_image[i].content;s(".leo-more-info").each(function(){s(this).html(o[s(this).data("idproduct")])}),addEffectProducts()}if(t.pro_cdown){o=new Array;for(i=0;i<t.pro_cdown.length;i++)o[t.pro_cdown[i].id]=t.pro_cdown[i].content;s(".leo-more-cdown").each(function(){s(this).html(o[s(this).data("idproduct")])})}if(t.pro_color){o=new Array;for(i=0;i<t.pro_color.length;i++)o[t.pro_color[i].id]=t.pro_color[i].content;s(".leo-more-color").each(function(){s(this).html(o[s(this).data("idproduct")])})}if(t.product_one_img){var n=new Array,r=new Array;for(i=0;i<t.product_one_img.length;i++)n[t.product_one_img[i].id]=t.product_one_img[i].content,r[t.product_one_img[i].id]=t.product_one_img[i].name;iw=360,ih=360,ih=void 0!==leoOption.homeWidth?(iw=leoOption.homeWidth,leoOption.homeheight):(iw=s(".product_img_link .img-fluid").first().attr("width"),s(".product_img_link .img-fluid").first().attr("height")),s(".product-additional").each(function(){var t,a;n[s(this).data("idproduct")]&&(t=n[s(this).data("idproduct")],src_image=s(this).data("image-type")?t.replace("home_default",s(this).data("image-type")):t.replace("home_default","home_default"),a=r[s(this).data("idproduct")],s(this).html('<img class="img-fluid" title="'+a+'" alt="'+a+'" src="'+src_image+'" width="'+iw+'" height="'+ih+'"/>'))})}if(t.product_attribute_one_img){n=new Array,r=new Array;for(i=0;i<t.product_attribute_one_img.length;i++)n[t.product_attribute_one_img[i].id]=t.product_attribute_one_img[i].content,r[t.product_attribute_one_img[i].id]=t.product_attribute_one_img[i].name;iw=360,ih=360,ih=void 0!==leoOption.homeWidth?(iw=leoOption.homeWidth,leoOption.homeheight):(iw=s(".product_img_link .img-fluid").first().attr("width"),s(".product_img_link .img-fluid").first().attr("height")),s(".product-attribute-additional").each(function(){var t,a;n[s(this).closest(".js-product-miniature").data("id-product")]&&(t=n[s(this).closest(".js-product-miniature").data("id-product")],src_image=s(this).data("image-type")?t.replace("home_default",s(this).data("image-type")):t.replace("home_default","home_default"),a=r[s(this).closest(".js-product-miniature").data("id-product")],s(this).html('<img class="img-fluid" title="'+a+'" alt="'+a+'" src="'+src_image+'" width="'+iw+'" height="'+ih+'"/>'))})}if(t.product_attribute&&(void 0!==t.product_attribute.attribute&&s.each(t.product_attribute.attribute,function(t,a){s(".product-attribute-"+t).html(a),s(".product-attribute-"+t).removeClass("product-item-attribute")}),void 0!==t.product_attribute.size&&s.each(t.product_attribute.size,function(t,a){s(".product-size-"+t).html(a),s(".product-size-"+t).removeClass("product-item-size")})),t.product_manufacture&&s.each(t.product_manufacture,function(t,a){s(".product-manufacture-"+t).html(a),s(".product-manufacture-"+t).removeClass("product-item-manufacture")}),t.product_all_one_img){n=new Array,r=new Array;for(i=0;i<t.product_all_one_img.length;i++)n[t.product_all_one_img[i].id]=t.product_all_one_img[i].content,r[t.product_all_one_img[i].id]=t.product_all_one_img[i].name;iw=360,ih=360,ih=void 0!==leoOption.homeWidth?(iw=leoOption.homeWidth,leoOption.homeheight):(iw=s(".product_img_link .img-fluid").first().attr("width"),s(".product_img_link .img-fluid").first().attr("height")),s(".product-all-additional").each(function(){var t,a;n[s(this).closest(".js-product-miniature").data("id-product")]&&(t=n[s(this).closest(".js-product-miniature").data("id-product")],src_image=s(this).data("image-type")?t.replace("home_default",s(this).data("image-type")):t.replace("home_default","home_default"),a=r[s(this).closest(".js-product-miniature").data("id-product")],s(this).html('<img class="img-fluid" title="'+a+'" alt="'+a+'" src="'+src_image+'" width="'+iw+'" height="'+ih+'"/>'))})}t.wishlist_products?(s(".ap-total-wishlist").data("wishlist-total",t.wishlist_products),s(".ap-total-wishlist").text(t.wishlist_products)):(s(".ap-total-wishlist").data("wishlist-total",0),s(".ap-total-wishlist").text("0")),t.compared_products?(s(".ap-total-compare").data("compare-total",t.compared_products),s(".ap-total-compare").text(t.compared_products)):(s(".ap-total-compare").data("compare-total",0),s(".ap-total-compare").text(0)),t.ajaxTab&&(callshowmore=callajaxcontent=0,s(".leo-ajax-tabs").addClass("loaded"),s.each(t.ajaxTab,function(t,a){s("#"+t).html(a),0<=a.indexOf("ApProductList")&&(callshowmore=1),0<=a.indexOf("product_list")&&(callajaxcontent=1)}),callshowmore&&apshowmore(),callajaxcontent&&(void 0!==s.LeoCustomAjax&&s.isFunction(s.LeoCustomAjax)&&(new s.LeoCustomAjax).processAjax(),callLeoFeature(),activeAnimation()))}},error:function(){}})},getCountWishlistCompare:function(){this.leoData+="&wishlist_compare=1"},getCategoryList:function(){var t="";return s(".leo-qty").each(function(){s(this).data("id")?t?t+=","+s(this).data("id"):t=s(this).data("id"):t?t+=","+s(this).attr("id"):t=s(this).attr("id")}),t&&(t=t.replace(/leo-cat-/g,""),this.leoData+="&cat_list="+t),!1},getProductListImage:function(){var t="";return s(".leo-more-info").each(function(){t+=t?","+s(this).data("idproduct"):s(this).data("idproduct")}),t&&(this.leoData+="&product_list_image="+t),!1},getProductCdownInfo:function(){var t="";return s(".leo-more-cdown").each(function(){t+=t?","+s(this).data("idproduct"):s(this).data("idproduct")}),t&&(this.leoData+="&pro_cdown="+t),!1},getProductColorInfo:function(){var t="";return s(".leo-more-color").each(function(){t+=t?","+s(this).data("idproduct"):s(this).data("idproduct")}),t&&(this.leoData+="&pro_color="+t),!1},getTabContent:function(){var t="",a="";return s(".leo-ajax-tabs").each(function(){s(this).hasClass("loaded")||(t+=t?"@|@"+s(this).data("shortcode"):s(this).data("shortcode"),a+=a?"@|@"+s(this).attr("id"):s(this).attr("id"),s(this).find("slick-loading").length||s(this).html('<div class="slick-loading" style="display: block;"><div class="slick-list" style="height: 600px;"> </div></div>'))}),t&&(this.leoData+="&tabshortcode="+t),t&&(this.leoData+="&tabshortcodekey="+a,t&&s("input:radio[name=ajaxtabcate]").length&&s("input:radio[name=ajaxtabcate]:checked").val()&&(this.leoData+="&ajaxtabcate="+s("input:radio[name=ajaxtabcate]:checked").val())),!1},getSizeContent:function(){var t="";return s(".product-item-size").each(function(){t+=t?","+s(this).data("idproduct"):s(this).data("idproduct")}),t&&(this.leoData+="&product_size="+t),!1},getAttributeContent:function(){var t="";return s(".product-item-attribute").each(function(){t+=t?","+s(this).data("idproduct"):s(this).data("idproduct")}),t&&(this.leoData+="&product_attribute="+t),!1},getManufactureName:function(){var t="",a=[];return s(".product-item-manufacture").each(function(){t?a.indexOf(s(this).data("idmanufacturer"))<0&&(t+=","+s(this).data("idmanufacturer"),a.push(s(this).data("idmanufacturer"))):(t+=s(this).data("idmanufacturer"),a.push(s(this).data("idmanufacturer")))}),t&&(this.leoData+="&product_manufacture="+t),!1},getProductOneImage:function(){var t="";return s(".product-additional").each(function(){t+=t?","+s(this).data("idproduct"):s(this).data("idproduct")}),t&&(this.leoData+="&product_one_img="+t),!1},getProductAttributeOneImage:function(){var t="0-0";return s(".product-attribute-additional").each(function(){t+=","+s(this).closest(".js-product-miniature").data("id-product")+"-"+s(this).closest(".js-product-miniature").data("id-product-attribute")}),t&&"0-0"!=t&&(this.leoData+="&product_attribute_one_img="+t),!1},getProductAllOneImage:function(){var t="0",a="0";return s(".product-all-additional").each(function(){t+=","+s(this).closest(".js-product-miniature").data("id-product"),a+=","+s(this).data("id-image")}),t&&(this.leoData+="&product_all_one_img="+t+"&image_product="+a),!1}}}(jQuery),function(t){window.addRule=function(a,e,t){e=function(t){if("string"==typeof t)return t;var a,e="";for(var i in t){t.hasOwnProperty(i)&&(a=t[i],e+=(i=i.replace(/([A-Z])/g,"-$1").toLowerCase())+":"+("content"===i?'"'+a+'"':a)+"; ")}return e}(e);try{(t=t||document.styleSheets[document.styleSheets.length-1]).insertRule?null!==t.cssRules&&0!==t.cssRules.length&&t.insertRule(a+" {"+e+"}",t.cssRules.length):t.addRule&&t.addRule(a,e)}catch(t){(function(){var t=document.createElement("style");return t.appendChild(document.createTextNode("")),document.head.appendChild(t),t})().sheet.insertRule(a+" {"+e+"}",0)}return this},t&&(t.fn.addRule=function(t,a){return addRule(this.selector,t,a),this})}(this.jQuery||this.Zepto),$(document).ready(function(){var t,a,e,i,o,n;$(".btn-show-more").length&&apshowmore(),activeAnimation(),$(".ajaxtabcate").length&&$("input:radio[name=ajaxtabcate]").click(function(){$(".leo-ajax-tabs").each(function(){($(this).find(".product-image").length||$(this).find(".product-title").length)&&($(this).removeClass("loaded"),void 0!==$.LeoCustomAjax&&$.isFunction($.LeoCustomAjax)&&(new $.LeoCustomAjax).processAjax())})}),$(".tabs-dropdown-menu").length&&$(".tabs-dropdown-menu").each(function(){wraper=$(this).parent(),tabdrop=$(this),$(this).hasClass("selecttext")&&(nav_active=$(wraper).find(".nav-link").first(),$(this).find("button").html($(nav_active).find("span").html())),$(this).find(".dropdown-item").first().addClass("active"),$(wraper).find(".nav-link").click(function(){if(!$(this).hasClass("active")){$(tabdrop).find(".dropdown-item").removeClass("active"),cclass=$(this).attr("class");var t=cclass.split(" ");formClass="";for(var a=0;a<t.length;a++)if(0<=t[a].indexOf("form")){formClass=t[a];break}$(wraper).find(".dropdown-item."+formClass).addClass("active")}}),$(tabdrop).find(".dropdown-item").click(function(){$(wraper).find(".nav-link").removeClass("active"),cclass=$(this).attr("class");var t=cclass.split(" ");formClass="";for(var a=0;a<t.length;a++)if(0<=t[a].indexOf("form")){formClass=t[a];break}$(wraper).find(".nav-link."+formClass).trigger("click")})}),$(".ap-popup").length&&($(".ap-popup").hasClass("index-only")&&$("body").attr("id"),apPopupForm()),$(".has-bg.bg-fullwidth").each(function(){id="#"+$(this).attr("id"),bg="",void 0!==$(this).data("src")&&(bg="url("+$(this).data("src")+")"),bg+=$(this).data("bg_data"),$(id+":before").addRule({background:bg})}),"undefined"!=typeof stellar&&stellar&&$.stellar({horizontalScrolling:!1}),currentPosX=[],currentPosY=[],$("div[data-mouse-parallax-strength]").each(function(){currentPos=$(this).css("background-position"),currentPosArray="string"==typeof currentPos?currentPos.split(" "):[$(this).css("background-position-x"),$(this).css("background-position-y")],currentPosX[$(this).data("mouse-parallax-rid")]=parseFloat(currentPosArray[0]),currentPosY[$(this).data("mouse-parallax-rid")]=parseFloat(currentPosArray[1]),$(this).mousemove(function(t){newPosX=currentPosX[$(this).data("mouse-parallax-rid")],newPosY=currentPosY[$(this).data("mouse-parallax-rid")],"axis-y"!=$(this).data("mouse-parallax-axis")&&(mparallaxPageX=t.pageX-$(this).offset().left,$(this).hasClass("full-bg-screen")&&(mparallaxPageX-=1e3),newPosX=mparallaxPageX*$(this).data("mouse-parallax-strength")*-1+newPosX),"axis-x"!=$(this).data("mouse-parallax-axis")&&(mparallaxPageY=t.pageY-$(this).offset().top,newPosY=mparallaxPageY*$(this).data("mouse-parallax-strength")*-1),$(this).css("background-position",newPosX+"px "+newPosY+"px")})}),$("div.iframe-youtube-api-tag").each(function(){t=$(this).attr("id"),a=$(this).data("youtube-video-id"),new YT.Player(t,{videoId:a,width:"100%",height:"100%",playerVars:{autoplay:1,controls:0,disablekb:1,fs:0,cc_load_policy:0,iv_load_policy:3,modestbranding:0,rel:0,showinfo:0,start:0},events:{onReady:function(t){t.target.mute(),setInterval(function(){t.target.seekTo(0)},1e3*(t.target.getDuration()-1))}}})}),"undefined"!=typeof MediaElementPlayer&&(e=new MediaElementPlayer("#special-youtube-video1"),i=new MediaElementPlayer("#special-youtube-video2"),e&&(o=setInterval(function(){$("#video-1 .mejs-overlay-play").html()&&($("#video-1 .mejs-overlay-play>.mejs-overlay-button").before('<div class="video-name">'+$("#special-youtube-video1").data("name")+"</div>"),$("#video-1 .mejs-overlay-play").append('<div class="video-description">Watch video and <span>subscribe us<span></div>'),clearInterval(o))},500)),i&&(n=setInterval(function(){$("#video-2 .mejs-overlay-play").html()&&($("#video-2 .mejs-overlay-play>.mejs-overlay-button").before('<div class="video-name">'+$("#special-youtube-video2").data("name")+"</div>"),$("#video-2 .mejs-overlay-play").append('<div class="video-description">Watch video and <span>subscribe us<span></div>'),clearInterval(n))},500))),current_url=window.location.href,$(".apconfig").each(function(){var t,a,e,i,o;0!=$(this).data("enablejs")&&(t="&leopanelchange",a=(a=$(this).data("url"))||(a=window.location.href).replace(t,""),e=$(this).data("type"),i=$(this).data("id"),o=new RegExp("([?|&])"+e+"=.*?(&|$)","i"),a.match(o)?$(this).attr("href",a.replace(o,"$1"+e+"="+i+"$2")+t):-1==a.indexOf("?")?$(this).attr("href",a+"?"+e+"="+i+t):$(this).attr("href",a+"&"+e+"="+i+t))}),$(window).resize(function(){$(".tab-pane .owl-carousel").length&&$(".tab-pane .owl-carousel").each(function(t,a){var e;$(a).parents(".tab-pane").hasClass("active")||void 0===$(a).data("owlCarousel")||(e=$(a).parents(".tab-pane").siblings(".active").find(".owl-carousel").width(),$(a).width(e),$(a).data("owlCarousel").updateVars(),$(a).width("100%"))})});var r=parseInt($(window).width());addClassLoading(992<=r&&r<1200?"lg":768<=r&&r<992?"md":576<=r&&r<768?"sm":r<576?"m":"xl"),$(".list-images-mobile").length&&1<$(".list-images-mobile").children().length&&$(".list-images-mobile").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!0,infinite:!1}),$(".product-list-images-mobile").length&&($("body").hasClass("lang-rtl")?$(".product-list-images-mobile").each(function(){1<$(this).children().length&&$(this).slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!0,infinite:!1,rtl:!0})}):$(".product-list-images-mobile").each(function(){1<$(this).children().length&&$(this).slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!0,infinite:!1})}),$(document).ajaxComplete(function(t,a,e){0<e.url.indexOf("apajax")&&$(".product-list-images-mobile").each(function(){function t(t){t.parents(".owl-item").on("touchstart mousedown",function(t){t.stopPropagation()})}$(".product-list-images-mobile").hasClass("slick-slider")&&(window.addEventListener?window.addEventListener("load",t($(this)),!1):window.attachEvent?window.attachEvent("onload",t($(this))):window.onload=t($(this)))})})),"product"==$("body").attr("id")&&$(document).ajaxComplete(function(t,a,e){0<e.url.indexOf("controller=product")&&$(".list-images-mobile").length&&1<$(".list-images-mobile").children().length&&$(".list-images-mobile").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!0})})}),$(document).ready(function(){"undefined"!=typeof ap_list_functions&&$.each(ap_list_functions,function(t,a){a(),ap_list_functions[t]=null}),"category"==$("body").attr("id")&&$("#search_filters").length&&$(".facet-label").on("click",function(){$(document).ajaxComplete(function(t,a,e){void 0!==a&&void 0!==a.responseJSON&&void 0!==a.responseJSON.products&&"undefined"!=typeof ap_list_functions&&$.each(ap_list_functions,function(t,a){void 0!==a&&null!=a&&(a(),ap_list_functions[t]=null)})})})}),$(window).load(function(){if("undefined"!=typeof ap_list_functions_loaded)for(var t=0;t<ap_list_functions_loaded.length;t++)ap_list_functions_loaded[t]()}),$(document).ready(function(){0<$("#sitemap").length&&$("#sitemap .sitemap").prepend(leo_site_map),$(".lazy").length&&($(function(){$(".lazy").lazy({effect:"fadeIn"})}),$(document).ajaxComplete(function(){$(".lazy").length&&$(".lazy").lazy({effect:"fadeIn"})})),"undefined"!=typeof approfile_multilang_url&&$.each(approfile_multilang_url,function(t,a){var e=prestashop.urls.base_url+a.iso_code,i=prestashop.urls.base_url+a.iso_code+"/"+a.friendly_url+".html";($("#leo_block_top").length?$("#leo_block_top .language-selector"):$(".language-selector-wrapper")).find("li a").each(function(){-1<$(this).attr("href").indexOf(e)&&$(this).attr("href",i)})}),($("#leo_block_top").length?$("#leo_block_top .currency-selector"):$(".currency-selector")).find("li a").each(function(){var t=$(this).attr("href"),a=getParamFromURL("id_currency",t),e=getParamFromURL("SubmitCurrency",t),i=window.location.href;"product"==prestashop.page.page_name&&(i=prestashop.urls.current_url);var o,i=removeParamFromURL("SubmitCurrency",i);o=-1==(i=removeParamFromURL("id_currency",i)).indexOf("?")?i+"?SubmitCurrency="+e+"&id_currency="+a:i+"&SubmitCurrency="+e+"&id_currency="+a,$(this).attr("href",o)}),prestashop.on("updateProductList",function(){void 0!==$.LeoCustomAjax&&$.isFunction($.LeoCustomAjax)&&(new $.LeoCustomAjax).processAjax()}),$(".demo-product-detail[data-menu-type=url] a").length&&"product"!=prestashop.page.page_name&&$.ajax({type:"POST",headers:{"cache-control":"no-cache"},url:prestashop.urls.base_url+"modules/appagebuilder/apajax.php?rand="+(new Date).getTime(),async:!0,cache:!1,dataType:"json",data:{action:"get-product-link"},success:function(i){i&&($(".demo-product-detail[data-menu-type=url] a").each(function(){var t=$(this).attr("href"),a=t.substring(t.indexOf("?layout=")),e=i.replace(".html",".html"+a);$(this).attr("href",e).addClass("updated")}),$(".lazy").length&&lazyLoadInstance&&lazyLoadInstance.update())},error:function(){}})});