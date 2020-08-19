sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller,Toast) {
	"use strict";

	return Controller.extend("Training2.Training2.controller.View1", {
		onInit: function () {
			console.log("Initialised")
		},
		flagFunction:function(oEvent){
				var sId = oEvent.getSource().getId();
				if(this.flag){
					this.flag = false;
					this.getView().byId("name").setVisible(false);
					this.getView().byId(sId).setText("Disabled");
				}else{
					this.flag = true;
					this.getView().byId("name").setVisible(true);
					this.getView().byId(sId).setText("Enabled");
				}
		},
		displayFunction:function(){
			var output = this.getView().byId("name").getValue()
			Toast.show("The name is "+output)
		}
	});
});