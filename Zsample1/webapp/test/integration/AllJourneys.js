/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Employees in the list
// * All 3 Employees have at least one Orders

sap.ui.require([
	"sap/ui/test/Opa5",
	"zsample1/sap/test/Zsample1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zsample1/sap/test/Zsample1/test/integration/pages/App",
	"zsample1/sap/test/Zsample1/test/integration/pages/Browser",
	"zsample1/sap/test/Zsample1/test/integration/pages/Master",
	"zsample1/sap/test/Zsample1/test/integration/pages/Detail",
	"zsample1/sap/test/Zsample1/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zsample1.sap.test.Zsample1.view."
	});

	sap.ui.require([
		"zsample1/sap/test/Zsample1/test/integration/MasterJourney",
		"zsample1/sap/test/Zsample1/test/integration/NavigationJourney",
		"zsample1/sap/test/Zsample1/test/integration/NotFoundJourney",
		"zsample1/sap/test/Zsample1/test/integration/BusyJourney",
		"zsample1/sap/test/Zsample1/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});