sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("test-mta.test-mta-ui.controller.Home", {
		onInit: function () {},
		filterGlobally: function (oEvent) {
				// add filter for search
				var aFilters = [];
				var sQuery = oEvent.getSource().getValue();
				if (sQuery && sQuery.length > 0) {
					var filter = new Filter("CustomerID", FilterOperator.Contains, sQuery);
					aFilters.push(filter);
				}
				// update list binding
				var oList = this.byId("table");
				var oBinding = oList.getBinding("rows");
				oBinding.filter(aFilters);
			}
	});
});