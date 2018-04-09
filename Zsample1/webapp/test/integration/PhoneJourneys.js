/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"zsample1/sap/test/Zsample1/test/integration/NavigationJourneyPhone",
		"zsample1/sap/test/Zsample1/test/integration/NotFoundJourneyPhone",
		"zsample1/sap/test/Zsample1/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});