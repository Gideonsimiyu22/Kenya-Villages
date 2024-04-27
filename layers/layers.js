var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ken_admbnda_adm1_iebc_20191031_1 = new ol.format.GeoJSON();
var features_ken_admbnda_adm1_iebc_20191031_1 = format_ken_admbnda_adm1_iebc_20191031_1.readFeatures(json_ken_admbnda_adm1_iebc_20191031_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ken_admbnda_adm1_iebc_20191031_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ken_admbnda_adm1_iebc_20191031_1.addFeatures(features_ken_admbnda_adm1_iebc_20191031_1);
var lyr_ken_admbnda_adm1_iebc_20191031_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ken_admbnda_adm1_iebc_20191031_1, 
                style: style_ken_admbnda_adm1_iebc_20191031_1,
                popuplayertitle: "ken_admbnda_adm1_iebc_20191031",
                interactive: true,
                title: '<img src="styles/legend/ken_admbnda_adm1_iebc_20191031_1.png" /> ken_admbnda_adm1_iebc_20191031'
            });
var format_kenya_villages_2 = new ol.format.GeoJSON();
var features_kenya_villages_2 = format_kenya_villages_2.readFeatures(json_kenya_villages_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenya_villages_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenya_villages_2.addFeatures(features_kenya_villages_2);
var lyr_kenya_villages_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kenya_villages_2, 
                style: style_kenya_villages_2,
                popuplayertitle: "kenya_villages",
                interactive: true,
                title: '<img src="styles/legend/kenya_villages_2.png" /> kenya_villages'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ken_admbnda_adm1_iebc_20191031_1.setVisible(true);lyr_kenya_villages_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ken_admbnda_adm1_iebc_20191031_1,lyr_kenya_villages_2];
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_kenya_villages_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KENYAVIL_': 'KENYAVIL_', 'KENYAVIL_I': 'KENYAVIL_I', 'NAME': 'NAME', 'COUNTRY': 'COUNTRY', 'THEME': 'THEME', 'ADMINCODE': 'ADMINCODE', 'LONGDD': 'LONGDD', 'LATDD': 'LATDD', });
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_kenya_villages_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KENYAVIL_': 'TextEdit', 'KENYAVIL_I': 'TextEdit', 'NAME': 'TextEdit', 'COUNTRY': 'TextEdit', 'THEME': 'TextEdit', 'ADMINCODE': 'TextEdit', 'LONGDD': 'TextEdit', 'LATDD': 'TextEdit', });
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'inline label - always visible', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_kenya_villages_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KENYAVIL_': 'no label', 'KENYAVIL_I': 'no label', 'NAME': 'inline label - always visible', 'COUNTRY': 'no label', 'THEME': 'no label', 'ADMINCODE': 'no label', 'LONGDD': 'no label', 'LATDD': 'no label', });
lyr_kenya_villages_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});