sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.test.PROJECTTEST.controller.MainView", {
            onInit: function () {},

		onPress: function(oEvent) {
			alert("Pum!");
		},
        });
    }
);
