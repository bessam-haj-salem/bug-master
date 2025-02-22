//sc
let express = require('express');
var str = '';
var sleep = require('sleep');
var Sequelize = require('sequelize');
let app = express();
var fs = require('fs');
let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();
let parser = require('xml2json');
const xml2js = require('xml2js');
const axios = require('axios');
let xmlParser = require('xml2json'); //pour parser de xml-->json
let convert = require('xml-js');
var js2xmlparser = require('js2xmlparser'); //pour parser json--->xml
//sc
//*****************************
// const VehiculeFleet = require('../controllers').vehiculeFleet;
module.exports = (app) => {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,uix,From,Authorization ');
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    }
    //**vehiculeFleet **/
    // app.post('/apiRF/vehiculeFleet/insert', VehiculeFleet.insertVehicule);
    // app.put('/apiRF/vehiculeFleet/update/:id', VehiculeFleet.updateVehicule);
    // app.get('/apiRF/vehiculeFleet/read/:id', VehiculeFleet.readVehicule);
    // app.delete('/apiRF/vehiculeFleet/delete/:id', VehiculeFleet.deleteVehicule);
    // app.post('/apiRF/vehiculeFleet/readPage', VehiculeFleet.readVehiculeChunk);
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL3JvdXRlcy9pbmRleC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJO0FBQ0osSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU3QixJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFckMsSUFBSSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFDcEIsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN4QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0IsSUFBSSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDdEIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFL0IsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsMkJBQTJCO0FBQ2hFLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQyxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7QUFFckUsSUFBSTtBQUdKLCtCQUErQjtBQUcvQixpRUFBaUU7QUFHakUsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDOUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsTUFBTSxDQUNSLDhCQUE4QixFQUM5Qix3RUFBd0UsQ0FDekUsQ0FBQztRQUNGLEdBQUcsQ0FBQyxNQUFNLENBQ1IsOEJBQThCLEVBQzlCLGlDQUFpQyxDQUNsQyxDQUFDO0lBRUYsQ0FBQztJQUlILHFCQUFxQjtJQUNyQix5RUFBeUU7SUFDekUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSwrRUFBK0U7SUFDL0UsOEVBQThFO0tBRTdFLENBQUE7QUFBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL3NjXG5sZXQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbnZhciBzdHIgPSAnJztcbnZhciBzbGVlcCA9IHJlcXVpcmUoJ3NsZWVwJyk7XG5cbnZhciBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcblxubGV0IGFwcCA9IGV4cHJlc3MoKTtcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5sZXQgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5sZXQgbXVsdGVyID0gcmVxdWlyZSgnbXVsdGVyJyk7XG5sZXQgdXBsb2FkID0gbXVsdGVyKCk7XG5sZXQgcGFyc2VyID0gcmVxdWlyZSgneG1sMmpzb24nKTtcbmNvbnN0IHhtbDJqcyA9IHJlcXVpcmUoJ3htbDJqcycpO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG5sZXQgeG1sUGFyc2VyID0gcmVxdWlyZSgneG1sMmpzb24nKTsgLy9wb3VyIHBhcnNlciBkZSB4bWwtLT5qc29uXG5sZXQgY29udmVydCA9IHJlcXVpcmUoJ3htbC1qcycpO1xudmFyIGpzMnhtbHBhcnNlciA9IHJlcXVpcmUoJ2pzMnhtbHBhcnNlcicpOyAvL3BvdXIgcGFyc2VyIGpzb24tLS0+eG1sXG5cbi8vc2NcblxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cblxuLy8gY29uc3QgVmVoaWN1bGVGbGVldCA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykudmVoaWN1bGVGbGVldDtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChhcHApID0+IHtcbiAgYXBwLnVzZShmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgIHJlcy5oZWFkZXIoXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAnT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdCx1aXgsRnJvbSxBdXRob3JpemF0aW9uICdcbiAgICApO1xuICAgIHJlcy5oZWFkZXIoXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsXG4gICAgICAnUE9TVCwgR0VULCBQVVQsIERFTEVURSwgT1BUSU9OUydcbiAgICApO1xuXG4gICAgfVxuXG5cbiAgXG4gIC8vKip2ZWhpY3VsZUZsZWV0ICoqL1xuICAvLyBhcHAucG9zdCgnL2FwaVJGL3ZlaGljdWxlRmxlZXQvaW5zZXJ0JywgVmVoaWN1bGVGbGVldC5pbnNlcnRWZWhpY3VsZSk7XG4gIC8vIGFwcC5wdXQoJy9hcGlSRi92ZWhpY3VsZUZsZWV0L3VwZGF0ZS86aWQnLCBWZWhpY3VsZUZsZWV0LnVwZGF0ZVZlaGljdWxlKTtcbiAgLy8gYXBwLmdldCgnL2FwaVJGL3ZlaGljdWxlRmxlZXQvcmVhZC86aWQnLCBWZWhpY3VsZUZsZWV0LnJlYWRWZWhpY3VsZSk7XG4gIC8vIGFwcC5kZWxldGUoJy9hcGlSRi92ZWhpY3VsZUZsZWV0L2RlbGV0ZS86aWQnLCBWZWhpY3VsZUZsZWV0LmRlbGV0ZVZlaGljdWxlKTtcbiAgLy8gYXBwLnBvc3QoJy9hcGlSRi92ZWhpY3VsZUZsZWV0L3JlYWRQYWdlJywgVmVoaWN1bGVGbGVldC5yZWFkVmVoaWN1bGVDaHVuayk7XG5cbiAgKSB9XG4iXX0=