sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/base/Log",
	"sap/m/MessageToast"
], function (Controller, Filter, FilterOperator, Log, MessageToast) {
	"use strict";

	return Controller.extend("test-mta.test-mta-ui.controller.Home", {
		onInit: function () {},
	
/*		onAfterRendering: function () {
			var oSplitCont = this.getSplitContObj(),
				ref = oSplitCont.getDomRef() && oSplitCont.getDomRef().parentNode;
			// set all parent elements to 100% height, this should be done by app developer, but just in case
			if (ref && !ref._sapUI5HeightFixed) {
				ref._sapUI5HeightFixed = true;
				while (ref && ref !== document.documentElement) {
					var $ref = jQuery(ref);
					if ($ref.attr("data-sap-ui-root-content")) { // Shell as parent does this already
						break;
					}
					if (!ref.style.height) {
						ref.style.height = "100%";
					}
					ref = ref.parentNode;
				}
			}
		},

		onPressNavToDetail: function () {
			this.getSplitContObj().to(this.createId("detailDetail"));
		},

		onPressMasterBack: function () {
			this.getSplitContObj().backMaster();
		},

		onPressGoToMaster: function () {
			this.getSplitContObj().toMaster(this.createId("master2"));
		},*/
		
		onPressDetailBack: function () {
			this.getSplitContObj().backDetail();
		},
		
		onListItemPress: function (oEvent) {
			var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

			this.getSplitContObj().toDetail(this.createId(sToPageId));
			//var key = oEvent.getParameter("listItem").getTitle();
			this._getOrder(oEvent);
		},
		
		_getOrder: function(oEvent) {
			
		/*	var oModel = this.getView().getModel("oDataModel");
			this.getView.setModel(oModel);
			this.getView().bindElement("/Orders/" + key );*/
			//this.byId("listItem").scrollTo(0, 0);
    		this.getView().bindElement({
    		path: oEvent.getParameter("listItem").getBindingContextPath(),
    		model: "oDataModel"
      });	
		},
/*		  onRowPress: function (ev) {
    // this.byId("split").toDetail(this.createId("detail"));
      this.byId("detail2").scrollTo(0, 0);
      this.getView().bindElement({
        path: ev.getSource().getBindingContext("oDataModel").getPath(),
        model: "oDataModel"
      });
    },*/
	/*	onPressModeBtn: function (oEvent) {
			var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();

			this.getSplitContObj().setMode(sSplitAppMode);
			MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, { duration: 5000 });
		},
*/
		getSplitContObj: function () {
			var result = this.byId("SplitContDemo");
			if (!result) {
				Log.error("SplitApp object can't be found");
			}
			return result;
		}
	/*	filterGlobally: function (oEvent) {
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
			}*/
	});
});