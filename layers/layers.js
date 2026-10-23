var wms_layers = [];

var format_KotaSemarang_BatasADM_0 = new ol.format.GeoJSON();
var features_KotaSemarang_BatasADM_0 = format_KotaSemarang_BatasADM_0.readFeatures(json_KotaSemarang_BatasADM_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaSemarang_BatasADM_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaSemarang_BatasADM_0.addFeatures(features_KotaSemarang_BatasADM_0);
var lyr_KotaSemarang_BatasADM_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaSemarang_BatasADM_0, 
                style: style_KotaSemarang_BatasADM_0,
                popuplayertitle: 'Kota Semarang_Batas ADM',
                interactive: true,
                title: '<img src="styles/legend/KotaSemarang_BatasADM_0.png" /> Kota Semarang_Batas ADM'
            });

lyr_KotaSemarang_BatasADM_0.setVisible(true);
var layersList = [lyr_KotaSemarang_BatasADM_0];
lyr_KotaSemarang_BatasADM_0.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_KotaSemarang_BatasADM_0.set('fieldImages', {'GID_3': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'NL_NAME_2': '', 'NAME_3': '', 'VARNAME_3': '', 'NL_NAME_3': '', 'TYPE_3': '', 'ENGTYPE_3': '', 'CC_3': '', 'HASC_3': '', });
lyr_KotaSemarang_BatasADM_0.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_KotaSemarang_BatasADM_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});