function leoBtCart() {
    $(".leo-bt-cart").each(function() {
        $(this).hasClass("leo-enable") || ($(this).addClass("leo-enable"), $(this).click(function(o) {
            if ($(this).hasClass("active") || $(this).hasClass("reset") || $(".leo-bt-cart.active").length || $(this).hasClass("disabled")) return !1;
            $(this).find(".leo-bt-cart-content").hide(), $(this).find(".leo-loading").css({
                display: "block"
            }), $(this).addClass("active");
            var t = $(this).parents(".product-miniature");
            t.find(".leo_cart_quantity").length && t.find(".qty_product").val(t.find(".leo_cart_quantity").val());
            var e = t.find(".qty_product").val(),
                a = t.find(".minimal_quantity").val();
            t.find(".quantity_product").val();
            if (!(Math.floor(e) == e && $.isNumeric(e) && 0 < e)) return $(this).addClass("reset"), $(".leo-modal-cart .modal-header").addClass("warning-mess"), $(".leo-modal-cart .leo-warning").show(), $(".leo-modal-cart").modal("show"), !1;
            if (parseInt(e) < parseInt(a)) return $(this).addClass("reset"), $(".leo-modal-cart .modal-header").addClass("info-mess"), $(".leo-modal-cart .leo-info .alert-min-qty").text(a), $(".leo-modal-cart .leo-info").show(), $(".leo-modal-cart").modal("show"), !1;
            var r = t.find(".id_product").val(),
                l = t.find(".id_product_attribute").val(),
                c = t.find(".id_customization").val(),
                i = $(this);
            return $(this).removeData("check-outstock"), checkProductOutStock(r, l, c, e, i, !0), check_data_outstock = setInterval(function() {
                var t, e, a;
                void 0 !== i.data("check-outstock") && (clearInterval(check_data_outstock), i.data("check-outstock") ? (e = (t = i.closest("form")).serialize() + "&add=1&action=update", a = t.attr("action"), $.ajax({
                    type: "POST",
                    headers: {
                        "cache-control": "no-cache"
                    },
                    url: a,
                    async: !0,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        var a, o, e, r, l;
                        t.success ? ($(".leo-notification").length && "undefined" != typeof enable_notification && enable_notification && (a = t.id_product, o = !1, $.each(t.cart.products, function(t, e) {
                            if (a == e.id_product) return o = e.name, !1
                        }), showLeoNotification("success", "add", o)), "undefined" != typeof enable_flycart_effect && enable_flycart_effect && $(".leo-bt-cart.active").length && flyCartEffect($(".leo-bt-cart.active")), $(".leo-fly-cart .leo-fly-cart-cssload-loader").length && $(".leo-fly-cart .leo-fly-cart-cssload-loader").show(), $(".leo-blockcart.cart-preview .cssload-piano").length && $(".leo-blockcart.cart-preview .cssload-piano").show(), "undefined" == typeof show_popup || show_popup || ($(".leo-bt-cart.active").length && ($(".leo-bt-cart.active").find(".leo-bt-cart-content").fadeIn("fast"), $(".leo-bt-cart.active").find(".leo-loading").hide(), $(".leo-bt-cart.active").removeClass("active reset")), e = $(".leo-blockcart").data("refresh-url"), $.ajax({
                            type: "POST",
                            headers: {
                                "cache-control": "no-cache"
                            },
                            url: e,
                            async: !0,
                            cache: !1,
                            success: function(t) {
                                $(".leo-blockcart").replaceWith($(t.preview).find(".blockcart")), $(".blockcart.cart-preview").addClass("leo-blockcart").removeClass("blockcart"), createModalAndDropdown(1, 0)
                            },
                            error: function(t, e, a) {
                                console.log("TECHNICAL ERROR: \n\nDetails:\nError thrown: " + t + "\nText status: " + e)
                            }
                        })), "undefined" != typeof show_popup && show_popup && (r = $(".blockcart").data("refresh-url"), l = {
                            id_product_attribute: t.id_product_attribute,
                            id_product: t.id_product,
                            action: "add-to-cart"
                        }, $.ajax({
                            type: "POST",
                            headers: {
                                "cache-control": "no-cache"
                            },
                            url: r,
                            async: !0,
                            cache: !1,
                            data: l,
                            dataType: "json",
                            success: function(t) {
                                $(".leo-bt-cart.active").length && ($(".leo-bt-cart.active").find(".leo-bt-cart-content").fadeIn("fast"), $(".leo-bt-cart.active").find(".leo-loading").hide(), $(".leo-bt-cart.active").removeClass("active reset")), $(".blockcart").replaceWith($(t.preview).find(".blockcart")), t.modal && showModalPopupCart(t.modal), createModalAndDropdown(1, 0)
                            },
                            error: function(t, e, a) {
                                console.log("TECHNICAL ERROR: \n\nDetails:\nError thrown: " + t + "\nText status: " + e)
                            }
                        }))) : showLeoNotification("error", "add", !1)
                    },
                    error: function(t, e, a) {
                        showLeoNotification("error", "add", !1)
                    }
                })) : (i.addClass("reset"), $(".leo-modal-cart .modal-header").addClass("block-mess"), $(".leo-modal-cart .leo-block").show(), $(".leo-modal-cart").modal("show"), o.preventDefault(), o.stopPropagation()))
            }, 10), !1
        }))
    }), $(".leo_cart_quantity").each(function() {
        $(this).parents(".product-miniature").find(".qty_product").val() ? $(this).val($(this).parents(".product-miniature").find(".qty_product").val()) : $(this).hide()
    })
}

function leoSelectAttr() {
    $(".leo-select-attr").click(function(t) {
        t.preventDefault();
        var a, e = $(this).data("id-product"),
            o = $(this).text(),
            r = $(this).data("id-attr"),
            l = $(this).data("qty-attr"),
            c = $(this).data("min-qty-attr"),
            i = $(this).parents(".product-miniature");
        $(this).hasClass("selected") || ($(this).siblings().removeClass("selected"), $(this).addClass("selected"), i.find(".dropdownListAttrButton_" + e).text(o), $(this).hasClass("disable") ? i.find(".leo-bt-cart_" + e).hasClass("disabled") || i.find(".leo-bt-cart_" + e).addClass("disabled") : i.find(".leo-bt-cart_" + e).hasClass("disabled") && i.find(".leo-bt-cart_" + e).removeClass("disabled"), (a = $(this).parents(".product-miniature[data-id-product=" + e + "]")).find(".leo-bt-cart .leo-bt-cart-content").hide(), a.find(".leo-bt-cart .leo-loading").css({
            display: "block"
        }), a.find(".leo-bt-cart").addClass("active"), $.ajax({
            type: "POST",
            headers: {
                "cache-control": "no-cache"
            },
            url: prestashop.urls.base_url + "modules/leofeature/psajax.php?rand=" + (new Date).getTime(),
            async: !0,
            cache: !1,
            data: {
                action: "get-attribute-data",
                id_product: e,
                id_product_attribute: r,
                token: leo_token
            },
            success: function(t) {
                var e;
                "" != t ? (e = $.parseJSON(t), a.find(".product-thumbnail img").attr("src", e.product_cover.bySize.home_default.url).attr("alt", e.product_cover.legend), a.find(".product-thumbnail").attr("href", e.product_url), a.find(".product-price-and-shipping").empty().append(e.price_attribute)) : alert(add_cart_error), $(".leo-bt-cart.active").find(".leo-bt-cart-content").fadeIn("fast"), $(".leo-bt-cart.active").find(".leo-loading").hide(), $(".leo-bt-cart.active").removeClass("active reset")
            },
            error: function(t, e, a) {
                alert("TECHNICAL ERROR: \n\nDetails:\nError thrown: " + t + "\nText status: " + e)
            }
        })), i.find(".quantity_product_" + e).val(l), i.find(".id_product_attribute_" + e).val(r), i.find(".minimal_quantity_" + e).val(c), i.find(".qty_product_" + e).val(c).data("min", c), i.find(".leo_cart_quantity").val(c), i.find(".dropdownListAttrButton_" + e).trigger("click")
    })
}

function activeEventModal() {
    $(".leo-modal-cart").on("hide.bs.modal", function(t) {
        $(".leo-modal-cart .modal-header").removeClass("block-mess info-mess warning-mess"), $(".leo-modal-cart .modal-title").hide();
        var e = $(".leo-bt-cart.reset").parents(".button-container").find(".minimal_quantity").val();
        $(".leo-bt-cart.reset").parents(".button-container").find(".qty_product").val(e), $(".leo-bt-cart.reset").parents(".product-miniature").find(".leo_cart_quantity").val(e), $(".leo-bt-cart.active").find(".leo-bt-cart-content").fadeIn("fast"), $(".leo-bt-cart.active").find(".leo-loading").hide(), $(".leo-bt-cart.active").removeClass("active reset")
    })
}

function updatePostionLabel(t) {
    var e = t.find(".discount-percentage"),
        a = t.find(".on-sale"),
        o = t.find(".new");
    e.length && (o.css("top", 2 * e.height() + 10), e.css("top", -t.find(".thumbnail-container").height() + t.find(".product-description").height() + 10)), a.length && (e.css("top", parseFloat(e.css("top")) + a.height() + 10), o.css("top", 2 * e.height() + a.height() + 20))
}

function showDropDownCart(t, e) {
    var a = "";
    "defaultcart" == e && (a = t.siblings(".leo-dropdown-cart")), "flycart" == e && (a = t.parents(".leo-fly-cart").find(".leo-dropdown-cart")), a.hasClass("show") ? a.removeClass("show") : a.addClass("show")
}

function showSlideBarCart(t) {
    var e, a, o, r;
    $(".leo-fly-cart-slidebar.disable").length || (t.hasClass("active-slidebarcart") ? $(".leo-fly-cart-slidebar .leo-fly-cart-icon").trigger("click") : (e = t.data("type"), a = t.data("pusheffect"), t.addClass("active-slidebarcart"), $(".leo-fly-cart-slidebar." + e).addClass("active"), $(".leo-fly-cart-mask").length && ($(".leo-fly-cart-mask").first().addClass("active"), $("body").addClass("leoflycart-active-slidebar")), $("html").hasClass("safari-win") && $(".leo-fly-cart-slidebar .leo-dropdown-list-item").each(function() {
        checkFlyCartScrollBar($(this))
    }), a && ($(".leo-fly-cart-slidebar." + e).addClass("push"), $("body").addClass("leoflycart-active-push"), "slidebar_top" != e && "slidebar_bottom" != e || (r = "Y", "slidebar_top" == e && (o = $(".leo-fly-cart-slidebar.push." + e).outerHeight()), "slidebar_bottom" == e && (o = -$(".leo-fly-cart-slidebar.push." + e).outerHeight())), "slidebar_right" != e && "slidebar_left" != e || (r = "X", "slidebar_left" == e && (o = $(".leo-fly-cart-slidebar.push." + e).outerWidth()), "slidebar_right" == e && (o = -$(".leo-fly-cart-slidebar.push." + e).outerWidth())), $("body.leoflycart-active-push main").css({
        "-moz-transform": "translate" + r + "(" + o + "px)",
        "-webkit-transform": "translate" + r + "(" + o + "px)",
        "-o-transform": "translate" + r + "(" + o + "px)",
        "-ms-transform": "translate" + r + "(" + o + "px)",
        transform: "translate" + r + "(" + o + "px)"
    }))))
}

function activeDropdownEvent() {
    var r;
    $(".leo-dropdown-list-item").each(function() {
        $(this).parents(".leo-fly-cart-slidebar").length || checkFlyCartScrollBarDropDown($(this)), $(this).parents(".leo-fly-cart-slidebar").length && checkFlyCartScrollBar($(this))
    }), $(".leo-remove-from-cart, .view-leo-dropdown-additional").hover(function() {
        $(this).hasClass("leo-remove-from-cart") && $(this).parents(".leo-dropdown-cart-item").addClass("high-light")
    }, function() {
        $(this).hasClass("leo-remove-from-cart") && $(this).parents(".leo-dropdown-cart-item").removeClass("high-light")
    }), $(".view-leo-dropdown-additional").click(function() {
        var t, e = $(this).parents(".leo-dropdown-cart-item"),
            a = $(this).parents(".leo-dropdown-list-item");
        return $(this).hasClass("show") ? (e.removeClass("show-additional"), a.hasClass("active-scrollbar") && e.hasClass("last") ? (a.find(".fake-element").fadeOut("200", function() {
            $(this).remove()
        }), a.mCustomScrollbar("update")) : a.parents(".leo-dropdown-list-item-warpper").hasClass("active-scrollbar") && e.hasClass("last") && e.hasClass("first") && (a.find(".fake-element").fadeOut("200", function() {
            $(this).remove()
        }), e.removeClass("show-additional"), $(this).removeClass("show"), setTimeout(function() {
            a.parents(".leo-dropdown-list-item-warpper").mCustomScrollbar("update")
        }, 500)), e.removeClass("show-additional"), $(this).removeClass("show")) : (a.find(".leo-dropdown-cart-item.show-additional") && (a.find(".leo-dropdown-cart-item.show-additional").removeClass("show-additional"), a.find(".view-leo-dropdown-additional.show").removeClass("show"), a.find(".fake-element").fadeOut("200", function() {
            $(this).remove()
        }), a.mCustomScrollbar("update"), setTimeout(function() {
            a.parents(".leo-dropdown-list-item-warpper").mCustomScrollbar("update")
        }, 500)), $(this).addClass("show"), a.hasClass("active-scrollbar") && e.hasClass("last") ? (t = e.find(".leo-dropdown-additional").height(), a.find(".mCSB_container").append('<p class="fake-element" style="height:' + t + 'px"></p>'), a.mCustomScrollbar("update"), a.mCustomScrollbar("scrollTo", "bottom", {
            callbacks: e.addClass("show-additional")
        })) : a.parents(".leo-dropdown-list-item-warpper").hasClass("active-scrollbar") && e.hasClass("last") && e.hasClass("first") ? (a.append('<li class="leo-dropdown-cart-item clearfix has-view-additional fake-element" style="width:' + width_cart_item + "px; height:" + height_cart_item + 'px"></p>'), a.parents(".leo-dropdown-list-item-warpper").mCustomScrollbar("update"), a.parents(".leo-dropdown-list-item-warpper").mCustomScrollbar("scrollTo", "last", {
            callbacks: e.addClass("show-additional")
        })) : e.addClass("show-additional")), !1
    }), $(".leo-remove-from-cart").click(function() {
        var t, a, o = $(this).data("id-product"),
            r = $(this).data("id-product-attribute"),
            l = $(this).data("id-customization"),
            c = $(this).parents(".leo-dropdown-cart-item");
        return c.addClass("deleting"), c.hasClass("show-additional") && c.find(".view-leo-dropdown-additional").trigger("click"), c.find(".leo-dropdown-overlay").show(), c.find(".leo-dropdown-cssload-speeding-wheel").show(), $(".remove-from-cart").length ? ($(".leo-dropdown-cart.dropdown").addClass("disable-close"), $(".leo-dropdown-cart.dropup").addClass("disable-close"), $('.remove-from-cart[data-id-product="' + o + '"][data-id-product-attribute="' + r + '"][data-id-customization="' + l + '"]').trigger("click")) : (t = $(this).data("link-url"), a = $(".leo-blockcart.cart-preview").data("refresh-url"), $.ajax({
            type: "POST",
            headers: {
                "cache-control": "no-cache"
            },
            url: t,
            async: !0,
            cache: !1,
            data: {
                ajax: 1,
                action: "update"
            },
            success: function(t) {
                var e = $.parseJSON(t);
                c.find(".leo-dropdown-overlay").hide(), c.find(".leo-dropdown-cssload-speeding-wheel").hide(), e.success ? (c.fadeOut(function() {
                    c.remove(), $('.leo-remove-from-cart[data-id-product="' + o + '"][data-id-product-attribute="' + r + '"][data-id-customization="' + l + '"]').parents(".leo-dropdown-cart-item").remove(), updateClassCartItem()
                }), showLeoNotification("success", "delete", !1), $.ajax({
                    type: "POST",
                    headers: {
                        "cache-control": "no-cache"
                    },
                    url: a,
                    async: !0,
                    cache: !1,
                    success: function(t) {
                        $(".leo-blockcart").replaceWith($(t.preview).find(".blockcart")), $(".blockcart.cart-preview").addClass("leo-blockcart"), "undefined" == typeof show_popup || show_popup || $(".blockcart.cart-preview").removeClass("blockcart"), createModalAndDropdown(1, 1)
                    },
                    error: function(t, e, a) {
                        console.log("TECHNICAL ERROR: \n\nDetails:\nError thrown: " + t + "\nText status: " + e)
                    }
                })) : showLeoNotification("error", "delete", !1)
            },
            error: function(t, e, a) {
                console.log("TECHNICAL ERROR: \n\nDetails:\nError thrown: " + t + "\nText status: " + e)
            }
        })), !1
    }), $(".leo-input-product-quantity").focusout(function() {
        updateQuantityProductDropDown($(this))
    }), $(".leo-input-product-quantity").keyup(function(t) {
        13 == t.keyCode && updateQuantityProductDropDown($(this))
    });
    var l = !1;
    $(".leo-bt-product-quantity-down, .leo-bt-product-quantity-up").on("touchstart click", function() {
        1 == l && (l = !1, clearTimeout(r)), l = !0;
        var t, e = "up",
            a = $(this).parents(".leo-dropdown-cart-item").find(".leo-input-product-quantity"),
            o = parseInt(a.val());
        return $(this).hasClass("leo-bt-product-quantity-down") && (e = "down"), "up" == e && (t = o + 1), "down" == e && (t = o - 1), a.val(t), r = setTimeout(function() {
            l = !1, updateQuantityProductDropDown(a)
        }, 800), !1
    })
}

function updateQuantityProductDropDown(r) {
    var l = r,
        c = l.data("product-quantity"),
        t = l.data("min-quantity"),
        i = (l.data("quantity-available"), l.val());
    if (!(Math.floor(i) == i && $.isNumeric(i) && 0 < i)) return showLeoNotification("normal", "check", !1), void l.val(c);
    if (parseInt(i) < parseInt(t)) return showLeoNotification("warning", "min", t), l.val(c), !1;
    var s, d, n, p, f, h = parseInt(i) - parseInt(c);
    0 != h && (s = l.data("id-product"), d = l.data("id-product-attribute"), n = l.data("id-customization"), l.removeData("check-outstock"), p = !0, (f = l.parents(".leo-dropdown-cart-item")).addClass("updating"), f.find(".leo-dropdown-overlay").show(), f.find(".leo-dropdown-cssload-speeding-wheel").show(), checkProductOutStock(s, d, n, i, l, !1), check_data_outstock = setInterval(function() {
        if (void 0 !== r.data("check-outstock")) {
            if (clearInterval(check_data_outstock), l.data("check-outstock") || (showLeoNotification("warning", "max", !1), l.val(c), p = !1, f.find(".leo-dropdown-overlay").hide(), f.find(".leo-dropdown-cssload-speeding-wheel").hide(), f.removeClass("updating")), !p) return !1;
            var t, e, a, o;
            $(".js-cart-line-product-quantity").length ? 
            ((t = $.Event("keyup")).keyCode = 13, $('.remove-from-cart[data-id-product="' + s + '"][data-id-product-attribute="' + d + '"][data-id-customization="' + n + '"]').parents(".cart-item").find(".js-cart-line-product-quantity").val(i).trigger(t)) :
             (e = l.data("update-url"), a = $(".leo-blockcart.cart-preview").data("refresh-url"), o = "", o = 0 < h ? "up" : "down",
             $.ajax({
                type: "POST",
                headers: {
                    "cache-control": "no-cache"
                },
                url: e,
                async: !0,
                cache: !1,
                data: {
                    ajax: 1,
                    action: "update",
                    qty: Math.abs(h),
                    op: o
                },
                success: function(t) {
                    var e = $.parseJSON(t);
                    f.find(".leo-dropdown-overlay").hide(), f.find(".leo-dropdown-cssload-speeding-wheel").hide(), f.removeClass("updating"), e.success ? ($('.leo-input-product-quantity[data-id-product="' + s + '"][data-id-product-attribute="' + d + '"][data-id-customization="' + n + '"]').val(i).data("product-quantity", i), showLeoNotification("success", "update", !1), $.ajax({
                        type: "POST",
                        headers: {
                            "cache-control": "no-cache"
                        },
                        url: a,
                        async: !0,
                        cache: !1,
                        success: function(t) {
                            $(".leo-blockcart").replaceWith($(t.preview).find(".blockcart")), $(".blockcart.cart-preview").addClass("leo-blockcart"), "undefined" == typeof show_popup || show_popup || $(".blockcart.cart-preview").removeClass("blockcart"), createModalAndDropdown(1, 1)
                        },
                        error: function(t, e, a) {
                            console.log("TECHNICAL ERROR: \n\nDetails:\nError thrown: " + t + "\nText status: " + e)
                        }
                    })) : showLeoNotification("error", "update", !1)
                },
                error: function(t, e, a) {
                    console.log("TECHNICAL ERROR: \n\nDetails:\nError thrown: " + t + "\nText status: " + e)
                }
            }))
        }
    }, 10))
}

function createModalAndDropdown(t, e) {
    "undefined" != typeof enable_dropdown_defaultcart && (enable_dropdown_defaultcart ? ($(".blockcart.cart-preview").length ? $(".blockcart.cart-preview").addClass("leo-blockcart show-leo-loading").append('<div class="cssload-piano"><div class="cssload-rect1"></div><div class="cssload-rect2"></div><div class="cssload-rect3"></div></div>') : $(".leo-blockcart.cart-preview").addClass("show-leo-loading").append('<div class="cssload-piano"><div class="cssload-rect1"></div><div class="cssload-rect2"></div><div class="cssload-rect3"></div></div>'), $(".leo-blockcart.cart-preview .cssload-piano").show(), $(".leo-blockcart.cart-preview.show-leo-loading").data("type", type_dropdown_defaultcart), "undefined" != typeof type_dropdown_defaultcart && ("dropdown" != type_dropdown_defaultcart && "dropup" != type_dropdown_defaultcart || $(".leo-blockcart.cart-preview.show-leo-loading").click(function() {
        return showDropDownCart($(this), "defaultcart"), !1
    }), "slidebar_left" != type_dropdown_defaultcart && "slidebar_right" != type_dropdown_defaultcart && "slidebar_top" != type_dropdown_defaultcart && "slidebar_bottom" != type_dropdown_defaultcart || $(".leo-blockcart.cart-preview.show-leo-loading").click(function() {
        return showSlideBarCart($(this)), !1
    }))) : $(".blockcart.cart-preview").addClass("leo-blockcart")), $(".leo-fly-cart .leo-fly-cart-cssload-loader").length && $(".leo-fly-cart .leo-fly-cart-cssload-loader").show(), $.ajax({
        type: "POST",
        headers: {
            "cache-control": "no-cache"
        },
        url:'/mycart',
        async: !0,
        cache: !1,
        data: {
            action: "render-modal",
            only_dropdown: t,
            only_total: e,
            token: leo_token
        },
        success: function(t) {

           if(t.msg=='success'){
            //    alert('h')
           }
            // console.log('done')
            // window.location.href = '/mycart'
            "" != t ? ($(".leo-blockcart.cart-preview .cssload-piano").hide(), $(".leo-fly-cart .leo-fly-cart-cssload-loader").length && setTimeout(function() {
                $(".leo-fly-cart .leo-fly-cart-cssload-loader").hide()
            }, 2e3), "" != t.dropdown ? ($(".leo-fly-cart-slidebar.disable").length && $(".leo-fly-cart-slidebar").removeClass("disable"), $(".leo-dropdown-cart").length ? $(".leo-dropdown-cart").addClass("update") : ("undefined" == typeof type_dropdown_defaultcart || "dropdown" != type_dropdown_defaultcart && "dropup" != type_dropdown_defaultcart || $(".leo-blockcart.cart-preview.show-leo-loading").after('<div class="leo-dropdown-cart defaultcart ' + type_dropdown_defaultcart + '"></div>'), $(".leo-fly-cart.enable-dropdown").length && $(".leo-fly-cart.enable-dropdown").append('<div class="leo-dropdown-cart flycart ' + $(".leo-fly-cart.enable-dropdown").data("type") + '"></div>'), $(".leo-fly-cart-slidebar").length && $(".leo-fly-cart-slidebar").append('<div class="leo-dropdown-cart"></div>')), $(".leo-dropdown-cart-content").length ? 1 == e ? ($(".leo-dropdown-cart-content .leo-dropdown-total").replaceWith(t.dropdown), $(".leo-dropdown-list-item").each(function() {
                $(this).parents(".leo-fly-cart-slidebar").length || checkFlyCartScrollBarDropDown($(this)), $(this).parents(".leo-fly-cart-slidebar").length && $(this).parents(".leo-fly-cart-slidebar").find(".active-scrollbar") && checkFlyCartScrollBar($(this))
            })) : ($(".leo-dropdown-cart-content").replaceWith(t.dropdown), activeDropdownEvent()) : ($(".leo-dropdown-cart").append(t.dropdown), activeDropdownEvent())) : ($(".leo-dropdown-cart").length && $(".leo-dropdown-cart").remove(), $(".leo-fly-cart-slidebar").addClass("disable"), $(".leo-fly-cart-slidebar.active").length && $(".leo-fly-cart-slidebar.active").find(".leo-fly-cart-icon").trigger("click")), "" != t.modal && ($("body").append(t.modal), activeEventModal()), "" != t.notification && $("body").append(t.notification), $(".leo-fly-cart-total").length && ($(".leo-dropdown-total").length ? $(".leo-fly-cart-total").text($(".leo-dropdown-total").data("cart-total")) : $(".leo-fly-cart-total").text("0"))) : alert(add_cart_error)
            //  window.location.reload()x
      
        },
        error: function(t, e, a) {
            // window.location.href='/'
             console.log("TECHNICAL ERROR: \n\nDetails:\nError thrown: " + t + "\nText status: " + e)
        }
    })
}

function activeEventNotification() {
    $(".leo-notification .notification").click(function() {
        $(this).removeClass("show").addClass("closed").parent().addClass("disable")
    })
}

function showLeoNotification(t, e, a) {
    $(".leo-notification").hasClass("active") || $(".leo-notification").addClass("active");
    var o = "";
    (o = $(".leo-temp-" + t + ">div").clone()).find(".noti-" + e).addClass("active"), a && "" != a && o.find(".noti-" + e).find(".noti-special").text(a), $(".leo-notification").append(o), setTimeout(function() {
        o.find(".notification").addClass("show")
    }, 100), activeEventNotification(), setTimeout(function() {
        o.find(".notification").removeClass("show").addClass("closed").parent().addClass("disable")
    }, 5e3)
}

function checkProductOutStock(t, e, a, o, r, l) {
    $.ajax({
        type: "POST",
        headers: {
            "cache-control": "no-cache"
        },
        url: prestashop.urls.base_url + "modules/leofeature/psajax.php?rand=" + (new Date).getTime(),
        async: !0,
        cache: !1,
        data: {
            action: "check-product-outstock",
            id_product: t,
            id_product_attribute: e,
            id_customization: a,
            quantity: o,
            check_product_in_cart: l,
            token: leo_token
        },
        success: function(t) {
            var e;
            "" != t ? (e = $.parseJSON(t), r.data("check-outstock", e.success)) : alert(add_cart_error)
        },
        error: function(t, e, a) {
            console.log("TECHNICAL ERROR: \n\nDetails:\nError thrown: " + t + "\nText status: " + e)
        }
    })
}

function updateClassCartItem() {
    $(".leo-dropdown-list-item").each(function() {
        $(this).find(".leo-dropdown-cart-item").first().addClass("first"), $(this).find(".leo-dropdown-cart-item").last().addClass("last")
    })
}

function flyCartEffect(t) {
    var e;
    if (void 0 !== (e = t.hasClass("leo-bt-cart") ? t.parents(".product-miniature").find(".product-thumbnail").find("img").eq(0) : (e = "", $(".quickview .product-cover").length ? $(".quickview .product-cover").find("img").eq(0) : $(".product-cover").find("img").eq(0))) && e.length) {
        var a = "";
        if ($(".leo-fly-cart-slidebar.active .leo-fly-cart-icon").length) a = $(".leo-fly-cart-slidebar.active .leo-fly-cart-icon");
        else if ($(".leo-fly-cart.solo .leo-fly-cart-icon").length) a = $(".leo-fly-cart.solo .leo-fly-cart-icon");
        else if ($(".leo-blockcart.cart-preview").length) a = $(".leo-blockcart.cart-preview");
        else {
            if (!$(".blockcart.cart-preview").length) return;
            a = $(".blockcart.cart-preview")
        }
        $("body").addClass("enable-leo-fly-cart");
        var o = e.clone(),
            r = e.offset().top,
            l = e.offset().left;
        0 != $("body").offset().left && (l -= $("body").offset().left), o.css({
            position: "absolute",
            top: r + "px",
            left: l + "px",
            opacity: 1,
            "z-index": 1e3,
            width: e.width(),
            height: e.height()
        }), $("body").append(o);
        var c, i = a.offset().left + a.width() / 2 - e.width() / 4 / 2;
        0 != $("body").offset().left && (i -= $("body").offset().left), c = $("html").hasClass("safari-win") && $(".leo-fly-cart-slidebar.active .leo-fly-cart-icon").length ? $(window).scrollTop() + a.offset().top + a.height() / 2 - e.height() / 4 / 2 : a.offset().top + a.height() / 2 - e.height() / 4 / 2, o.animate({
            opacity: .4,
            left: i,
            top: c,
            width: e.width() / 4,
            height: e.height() / 4
        }, 1e3, function() {
            o.fadeOut("fast", function() {
                o.remove(), $("body").removeClass("enable-leo-fly-cart")
            }), "undefined" != typeof type_flycart_effect && ("shake" == type_flycart_effect && (a.parents(".leo-fly-cart").find(".leo-fly-cart-total").css({
                opacity: 0
            }), setTimeout(function() {
                a.effect("shake", {
                    times: 2
                }, 200, function() {
                    a.parents(".leo-fly-cart").find(".leo-fly-cart-total").css({
                        opacity: 1
                    })
                })
            }, 500)), "fade" == type_flycart_effect && a.fadeOut("fast", function() {
                a.fadeIn("fast", function() {})
            }))
        })
    }
}

function activeEventFlyCartSlideBar() {
    $(".leo-fly-cart-mask, .leo-fly-cart-slidebar .leo-fly-cart-icon, .leo-fly-cart-slidebar .leo-fly-cart-icon-wrapper, .leo-fly-cart-slidebar .leo-fly-cart").click(function() {
        $(".leo-fly-cart-mask.active").removeClass("active"), $(".leo-fly-cart-icon.active-slidebarcart").removeClass("active-slidebarcart"), $(".leo-blockcart.cart-preview.active-slidebarcart").removeClass("active-slidebarcart"), $("body.leoflycart-active-push main").css({
            "-moz-transform": "translateY(0px)",
            "-webkit-transform": "translateY(0px)",
            "-o-transform": "translateY(0px)",
            "-ms-transform": "translateY(0px)",
            transform: "translateY(0px)"
        }), setTimeout(function() {
            $("body").removeClass("leoflycart-active-slidebar leoflycart-active-push")
        }, 300), $(".leo-fly-cart-slidebar.active").removeClass("active")
    }), $(document).keyup(function(t) {
        27 == t.keyCode && ($(".leo-fly-cart-mask").hasClass("active") ? $(".leo-fly-cart-mask.active").trigger("click") : $(".leo-fly-cart-slidebar.active .leo-fly-cart-icon").length && $(".leo-fly-cart-slidebar .leo-fly-cart-icon").trigger("click"))
    })
}

function checkFlyCartScrollBar(t) {
    var e, a, o, r, l = t.parents(".leo-fly-cart-slidebar");
    (l.hasClass("slidebar_top") || l.hasClass("slidebar_bottom")) && (e = l.find(".leo-dropdown-bottom").outerWidth(), (a = $(window).width()) < ("undefined" != typeof width_cart_item ? t.find(".leo-dropdown-cart-item").length * width_cart_item : t.find(".leo-dropdown-cart-item").length * t.find(".leo-dropdown-cart-item").outerWidth()) + e ? (l.addClass("active-scroll"), l.find(".leo-dropdown-list-item-warpper").addClass("active-scrollbar"), l.find(".leo-dropdown-list-item-warpper").css({
        width: a - e
    }), l.find(".leo-dropdown-list-item-warpper").mCustomScrollbar({
        theme: "dark",
        axis: "x",
        scrollInertia: 200,
        callbacks: {
            onInit: function() {}
        },
        advanced: {
            autoExpandHorizontalScroll: !0
        },
        keyboard: {
            enable: !0
        }
    }), l.find(".leo-dropdown-list-item-warpper").mCustomScrollbar("update")) : (l.removeClass("active-scroll"), l.find(".leo-dropdown-list-item-warpper").removeClass("active-scrollbar").css({
        width: "auto"
    }), l.find(".leo-dropdown-list-item-warpper").mCustomScrollbar("destroy"))), (l.hasClass("slidebar_left") || l.hasClass("slidebar_right")) && (o = l.find(".leo-dropdown-bottom").outerHeight(), (r = $(window).height()) < ("undefined" != typeof height_cart_item ? t.find(".leo-dropdown-cart-item").length * height_cart_item : t.find(".leo-dropdown-cart-item").length * t.find(".leo-dropdown-cart-item").outerHeight()) + o ? (l.addClass("active-scroll"), t.addClass("active-scrollbar"), t.css({
        "max-height": r - o
    }), t.mCustomScrollbar({
        theme: "dark",
        scrollInertia: 200,
        callbacks: {
            onInit: function() {}
        },
        keyboard: {
            enable: !0
        }
    }), t.mCustomScrollbar("update")) : (l.removeClass("active-scroll"), t.removeClass("active-scrollbar").css({
        "max-height": "none"
    }), t.mCustomScrollbar("destroy")))
}

function checkFlyCartScrollBarDropDown(t) {
    var e = t.parents(".leo-fly-cart.type-fixed.enable-dropdown"),
        a = e.data("type"),
        o = e.find(".leo-dropdown-bottom").outerHeight(),
        r = height_cart_item * t.find(".leo-dropdown-cart-item").length,
        l = e.find(".leo-fly-cart-icon-wrapper").outerHeight(),
        c = ($(window).height(), 3);
    "undefined" != typeof number_cartitem_display && (c = number_cartitem_display);
    var i = height_cart_item * number_cartitem_display;
    0 < e.length && "dropup" == a && r + o > e.position().top && i + o > e.position().top ? (t.addClass("active-scrollbar").css({
        "max-height": e.position().top - l - o
    }), t.mCustomScrollbar({
        theme: "dark",
        scrollInertia: 200,
        callbacks: {
            onInit: function() {}
        },
        keyboard: {
            enable: !0
        }
    }), t.mCustomScrollbar("update")) : 0 < e.length && "dropdown" == a && r + o > $(window).height() - e.position().top && i + o > $(window).height() - e.position().top ? (t.addClass("active-scrollbar").css({
        "max-height": $(window).height() - e.position().top - l - o
    }), t.mCustomScrollbar({
        theme: "dark",
        scrollInertia: 200,
        callbacks: {
            onInit: function() {}
        },
        keyboard: {
            enable: !0
        }
    }), t.mCustomScrollbar("update")) : t.find(".leo-dropdown-cart-item").length > c ? ("undefined" != typeof height_cart_item ? t.addClass("active-scrollbar").css({
        "max-height": height_cart_item * number_cartitem_display
    }) : t.addClass("active-scrollbar").css({
        "max-height": t.find(".leo-dropdown-cart-item").outerHeight() * c
    }), t.mCustomScrollbar({
        theme: "dark",
        scrollInertia: 200,
        callbacks: {
            onInit: function() {}
        },
        keyboard: {
            enable: !0
        }
    })) : (t.removeClass("active-scrollbar").css({
        "max-height": "none"
    }), t.mCustomScrollbar("destroy"))
}

function getOffsetFlycartIcon() {
    $(".leo-fly-cart.solo .leo-fly-cart-icon").length && ($(".leo-fly-cart.solo .leo-fly-cart-icon").offset().top, $(".leo-fly-cart.solo .leo-fly-cart-icon").offset().left <= $(window).width() / 2 ? $(".leo-fly-cart.solo").removeClass("offset-right").addClass("offset-left") : $(".leo-fly-cart.solo").removeClass("offset-left").addClass("offset-right"), lf_is_gen_rtl && 1 == prestashop.language.is_rtl && ($(".leo-fly-cart.solo").hasClass("offset-right") ? $(".leo-fly-cart.solo").removeClass("offset-right").addClass("offset-left") : $(".leo-fly-cart.solo").hasClass("offset-left") && $(".leo-fly-cart.solo").removeClass("offset-left").addClass("offset-right")))
}

function showModalPopupCart(t) {
    $("#blockcart-modal").length && $("#blockcart-modal").remove(), $("body").append(t), $("#blockcart-modal").modal("show")
}
$(document).ready(function() {
    var t = !1; - 1 !== navigator.userAgent.toLowerCase().indexOf("chrome/") ? t = !1 : -1 !== navigator.userAgent.toLowerCase().indexOf("safari/") && (t = !0), -1 != navigator.appVersion.indexOf("Win") && t && $("html").addClass("safari-win"), "undefined" == typeof show_popup || show_popup || $(".blockcart.cart-preview").addClass("leo-blockcart").removeClass("blockcart"), createModalAndDropdown(0, 0), leoSelectAttr(), leoBtCart(), prestashop.on("updateProductList", function() {
        leoSelectAttr(), leoBtCart()
    }), prestashop.on("updateCart", function(e) {
        var t, a, o, r;
        "undefined" == typeof show_popup || show_popup || ($(".leo-blockcart.cart-preview .cssload-piano").length && $(".leo-blockcart.cart-preview .cssload-piano").show(), t = $(".leo-blockcart").data("refresh-url"), $.ajax({
            type: "POST",
            headers: {
                "cache-control": "no-cache"
            },
            url: t,
            async: !0,
            cache: !1,
            success: function(t) {
                $(".leo-blockcart").replaceWith($(t.preview).find(".blockcart")), $(".blockcart.cart-preview").addClass("leo-blockcart").removeClass("blockcart"), "add-to-cart" == e.reason.linkAction && e.resp.success && prestashop.emit("updateProduct", {
                    reason: ""
                })
            },
            error: function(t, e, a) {
                console.log("TECHNICAL ERROR: \n\nDetails:\nError thrown: " + t + "\nText status: " + e)
            }
        })), "add-to-cart" == e.reason.linkAction && e.resp.success && ("undefined" != typeof enable_flycart_effect && enable_flycart_effect && ($(".leo-bt-cart.active").length ? flyCartEffect($(".leo-bt-cart.active")) : "product" != prestashop.page.page_name && !$(".product-add-to-cart .add-to-cart").length || flyCartEffect($(".product-add-to-cart .add-to-cart"))), $(".leo-notification").length && "undefined" != typeof enable_notification && enable_notification && (a = e.resp.id_product, o = !1, $.each(e.resp.cart.products, function(t, e) {
            if (a == e.id_product) return o = e.name, !1
        }), showLeoNotification("success", "add", o), $("#custom_measurement").val(""))), "add-to-cart" != e.reason.linkAction || e.resp.success || (showLeoNotification("error", "custom", !1), r = e.resp.errors[0], customModal(r.url, r.measurement_id), product_page_product_id), "undefined" != typeof show_popup && show_popup && (check_active_modal_cart = setInterval(function() {
            $(".leo-bt-cart.active").length && $("#blockcart-modal").length && $("#blockcart-modal").hasClass("modal fade in") && ($(".leo-bt-cart.active").find(".leo-bt-cart-content").fadeIn("fast"), $(".leo-bt-cart.active").find(".leo-loading").hide(), $(".leo-bt-cart.active").removeClass("active reset"), clearInterval(check_active_modal_cart))
        }, 200)), "undefined" == typeof show_popup || show_popup || $(".leo-bt-cart.active").length && ($(".leo-bt-cart.active").find(".leo-bt-cart-content").fadeIn("fast"), $(".leo-bt-cart.active").find(".leo-loading").hide(), $(".leo-bt-cart.active").removeClass("active reset")), $(".leo-fly-cart .leo-fly-cart-cssload-loader").length && $(".leo-fly-cart .leo-fly-cart-cssload-loader").show(), $(".leo-dropdown-cart-item.deleting").length && ($(".leo-dropdown-cart-item.deleting .leo-dropdown-overlay").hide(), $(".leo-dropdown-cart-item.deleting .leo-dropdown-cssload-speeding-wheel").hide(), $(".leo-dropdown-cart-item.deleting").fadeOut(function() {
            $(".leo-dropdown-cart-item.deleting").remove(), updateClassCartItem()
        }), showLeoNotification("success", "delete", !1)), $(".leo-dropdown-cart-item.updating").length && ($(".leo-dropdown-cart-item.updating .leo-dropdown-overlay").hide(), $(".leo-dropdown-cart-item.updating .leo-dropdown-cssload-speeding-wheel").hide(), $(".leo-dropdown-cart-item.updating").removeClass("updating"), showLeoNotification("success", "update", !1)), $(".leo-dropdown-cart.dropdown").removeClass("disable-close"), $(".leo-dropdown-cart.dropup").removeClass("disable-close"), createModalAndDropdown(1, 0)
    }), activeEventFlyCartSlideBar(), $(".leo-fly-cart.enable-slidebar .leo-fly-cart-icon-wrapper").click(function() {
        $(".leo-fly-cart.enable-slidebar .leo-fly-cart-icon").trigger("click")
    }), $(".leo-fly-cart.enable-slidebar .leo-fly-cart-icon").click(function() {
        return showSlideBarCart($(this)), !1
    }), $(".leo-fly-cart.enable-dropdown .leo-fly-cart-icon-wrapper , .leo-fly-cart.enable-dropdown .leo-fly-cart-icon").click(function() {
        return showDropDownCart($(this), "flycart"), !1
    }), $(document).click(function(t) {
        t.stopPropagation();
        var e = $(".leo-dropdown-cart.dropdown.show");
        e.length && 0 === e.has(t.target).length && (e.hasClass("disable-close") || e.removeClass("show"));
        var a = $(".leo-dropdown-cart.dropup.show");
        a.length && 0 === a.has(t.target).length && (a.hasClass("disable-close") || a.removeClass("show"))
    }), getOffsetFlycartIcon(), $(window).resize(function() {
        $(".leo-dropdown-list-item").each(function() {
            $(this).parents(".leo-fly-cart-slidebar").length && checkFlyCartScrollBar($(this)), $(this).parents(".leo-fly-cart.type-fixed.enable-dropdown").length && checkFlyCartScrollBarDropDown($(this))
        }), getOffsetFlycartIcon()
    })
});