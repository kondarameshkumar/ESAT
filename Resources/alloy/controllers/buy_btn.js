function Controller() {
    function handleBtnTouchStart() {
        $.btn.backgroundGradient = {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ "#317900", "#1e4c00" ]
        };
    }
    function handleBtnTouchEnd() {
        if (move) move = false; else {
            unselectedState();
            Storekit.addEventListener("transactionState", handleTransactionState);
            tempProductId = args.productid;
            Ti.API.info("tempProductId: " + tempProductId);
            requestProduct(tempProductId, function(product) {
                Ti.API.info("product: " + product);
                purchaseProduct(product);
            });
        }
    }
    function handleBtnTouchMove() {
        unselectedState();
        move = true;
    }
    function handleBtnTouchCancel() {
        unselectedState();
    }
    function unselectedState() {
        $.btn.backgroundGradient = {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ "#41a100", "#286600" ]
        };
    }
    function showLoading() {
        Ti.App.fireEvent("showLoading");
    }
    function hideLoading() {
        Ti.App.fireEvent("hideLoading");
    }
    function markProductAsPurchased(identifier) {
        Ti.API.info("Marking as purchased: " + identifier);
        purchasedState();
        purchaseModel.set({
            purchased: 1
        });
        purchaseModel.save();
    }
    function purchasedState() {
        $.btn.touchEnabled = false;
        $.btn.backgroundColor = "#d7d7d7";
        $.btn.borderColor = "#bbbbbb";
        $.btn.backgroundGradient = {};
        $.price_label.color = "#858585";
        $.price_label.font = {
            fontSize: 12,
            fontFamily: "AvenirLTStd-Black"
        };
        $.price_label.text = "BOUGHT";
    }
    function requestProduct(identifier, success) {
        Ti.API.info("request product identifier: " + identifier);
        showLoading();
        Storekit.requestProducts([ identifier ], function(evt) {
            hideLoading();
            if (evt.success) if (evt.invalid) alert("ERROR: We requested an invalid product!"); else {
                for (i = 0; evt.products.length > i; i++) Ti.API.info("product #" + i + " : " + evt.products[i]);
                success(evt.products[0]);
            } else alert("ERROR: We failed to talk to Apple!");
        });
    }
    function handleTransactionState(evt) {
        debugger;
        hideLoading();
        switch (evt.state) {
          case Storekit.FAILED:
            if (evt.cancelled) {
                alert("Purchase cancelled");
                Storekit.removeEventListener("transactionState", handleTransactionState);
            } else {
                alert("ERROR: Buying failed! " + evt.message);
                Storekit.removeEventListener("transactionState", handleTransactionState);
            }
            break;

          case Storekit.PURCHASED:
            if (verifyingReceipts) Storekit.verifyReceipt(evt, function(e) {
                if (e.success) if (e.valid) {
                    alert("Thanks! Receipt Verified");
                    markProductAsPurchased(evt.productIdentifier);
                    Storekit.removeEventListener("transactionState", handleTransactionState);
                } else {
                    alert("Sorry. Receipt is invalid");
                    Storekit.removeEventListener("transactionState", handleTransactionState);
                } else alert(e.message);
            }); else {
                alert("Thanks!");
                markProductAsPurchased(evt.productIdentifier);
                Storekit.removeEventListener("transactionState", handleTransactionState);
            }
            break;

          case Storekit.PURCHASING:
            Ti.API.info("Purchasing " + evt.productIdentifier);
            break;

          case Storekit.RESTORED:
            Ti.API.info("Restored " + evt.productIdentifier);
            Storekit.removeEventListener("transactionState", handleTransactionState);
        }
    }
    function purchaseProduct(product) {
        showLoading();
        Storekit.purchase(product);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "buy_btn";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.btn = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            height: 30,
            right: 10,
            borderRadius: 5,
            borderColor: "#205000",
            borderWidth: 1,
            backgroundGradient: {
                type: "linear",
                startPoint: {
                    x: "0%",
                    y: "0%"
                },
                endPoint: {
                    x: "0%",
                    y: "100%"
                },
                colors: [ "#41a100", "#286600" ]
            }
        });
        Alloy.isTablet && _.extend(o, {
            width: 100,
            height: 50
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: 75
        });
        _.extend(o, {
            id: "btn"
        });
        return o;
    }());
    $.__views.btn && $.addTopLevelView($.__views.btn);
    handleBtnTouchStart ? $.__views.btn.addEventListener("touchstart", handleBtnTouchStart) : __defers["$.__views.btn!touchstart!handleBtnTouchStart"] = true;
    handleBtnTouchEnd ? $.__views.btn.addEventListener("touchend", handleBtnTouchEnd) : __defers["$.__views.btn!touchend!handleBtnTouchEnd"] = true;
    handleBtnTouchMove ? $.__views.btn.addEventListener("touchmove", handleBtnTouchMove) : __defers["$.__views.btn!touchmove!handleBtnTouchMove"] = true;
    handleBtnTouchCancel ? $.__views.btn.addEventListener("touchcancel", handleBtnTouchCancel) : __defers["$.__views.btn!touchcancel!handleBtnTouchCancel"] = true;
    $.__views.price_label = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#fff",
            textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#fff",
            textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER
        });
        _.extend(o, {
            id: "price_label",
            touchEnabled: "false"
        });
        return o;
    }());
    $.__views.btn.add($.__views.price_label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var move = false;
    var args = arguments[0] || {};
    var purchaseModel;
    var found = false;
    var purchases = Alloy.Collections.purchase;
    purchases.each(function(purchase) {
        var purchaseJSON = purchase.toJSON();
        Ti.API.info(purchaseJSON.productid + " : " + purchaseJSON.purchased);
        if ("ca.csa.cepe.full" == purchaseJSON.productid && 1 == purchaseJSON.purchased) {
            found = true;
            purchasedState();
        }
        if (purchaseJSON.productid == args.productid) {
            purchaseModel = purchase;
            if (1 == purchaseJSON.purchased) {
                found = true;
                purchasedState();
            }
        }
    });
    found || ($.price_label.text = args.price);
    var tempProductId;
    var Storekit = require("ti.storekit");
    Storekit.receiptVerificationSandbox = true;
    Storekit.receiptVerificationSharedSecret = "50ccb644db314699af29fcea6a3694fc";
    var verifyingReceipts = false;
    __defers["$.__views.btn!touchstart!handleBtnTouchStart"] && $.__views.btn.addEventListener("touchstart", handleBtnTouchStart);
    __defers["$.__views.btn!touchend!handleBtnTouchEnd"] && $.__views.btn.addEventListener("touchend", handleBtnTouchEnd);
    __defers["$.__views.btn!touchmove!handleBtnTouchMove"] && $.__views.btn.addEventListener("touchmove", handleBtnTouchMove);
    __defers["$.__views.btn!touchcancel!handleBtnTouchCancel"] && $.__views.btn.addEventListener("touchcancel", handleBtnTouchCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;