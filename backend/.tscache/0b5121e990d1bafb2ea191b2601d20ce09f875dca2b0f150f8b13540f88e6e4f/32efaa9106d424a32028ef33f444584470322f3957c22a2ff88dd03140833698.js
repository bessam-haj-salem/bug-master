"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize, QueryTypes } = require('sequelize');
const sequelizeConfig = require('../config/sequelizeConfig.json');
//const db = createModels(sequelizeConfig);
//const sequelize=db.Sequelize;
const sequelize = new Sequelize("bessamDB", "phpmyadmin", "tgbyhnuj", {
    "host": "localhost",
    "dialect": "mysql",
    "port": 3306,
    "pool": {
        "max": 5,
        "min": 0,
        "idle": 20000,
        "acquire": 20000
    }
});
//const test = db.Test
var formidable = require('formidable');
var http = require('http'), util = require('util'), os = require('os');
const pwd = require('./password.js');
const transporter = require('./transporter.js');
var message = '';
const log = console.log;
function lance_scp(filename) {
    const host_to = process.env.host_to;
    const user_to = process.env.user_to;
    const password_to = process.env.password_to;
    const directory_from = process.env.directory_logo_from;
    const directory_to = process.env.directory_logo_to;
    var client = require('scp2');
    client.scp(directory_from + filename, {
        host: host_to,
        username: user_to,
        password: password_to,
        //privateKey:`AAAAB3NzaC1kc3MAAACBAMcAd9W3Bh+QkIlLTecjireTVq2k5pmENNIUtDj30P1W0Uw2xkbHj1lx5gAPXXizg+6OdFdt7Gk0niJplWrQTCucN1DcFRPAo2sbliGvqFr12zrX3oMV8xaKs9j1hAh7gzhYdYyU7Mx25soxmRh6qr0HAzjbeBTrsUTrTpGlm/o9AAAAFQDFT6UPIPuV7Gy3pVaLbWMq3WUiMwAAAIB3+wBXXe9mT8dcd/GPRSXG2NHk13CxyNI/GMOghFOn2z4WsqAHLCDouZO189x/yytK6vjrq2kQF7EDZpKPsmj98sIzatT+mrUgLpsrvSu/fCRw4IZpx5+OyjNjvLs9YNbrgprWZrx54vGqIM8Ec+RBsEVTqIj/3cIyZN0UJU4jbAAAAIEAl8zCmcLdKrKqezh9ipLxQIs6ZT21AGP+ziYkbp+2uh5m6V3/3RpS4Dtu3ny1vs6gO/wEfvjcRDD6knxcPJso2Ezu5mndM3sP2x81yFQhekYNHsF3diwbQ3KJQgLV32UZ5FEL2uP1Hj4BWKv4owCML3apxFo1cHSdqksmaNEBHWo`,
        path: directory_to
    }, function (err) { });
}
module.exports = {
    getList(req, res) {
        sequelize.query("SELECT * FROM  Test"
        // Test table
        , { type: sequelize.QueryTypes.SELECT }, {})
            .then(te => res.status(200).send(te[0]))
            .catch(error => res.status(400).send(error));
    },
    insertList(req, res) {
        sequelize.query("INSERT INTO Test (username,email,pays) VALUES ('" + req.body.username + "','" + req.body.email + "','" + req.body.pays + "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send("insert sucess"))
            .catch(error => res.status(400).send(error));
    },
    updateList(req, res) {
        sequelize.query("UPDATE Test SET pays='" + req.body.pays + "' WHERE id = 7 ", { type: sequelize.QueryTypes.UPDATE }, {})
            .then(res.status(200).send("update sucess"))
            .catch(error => res.status(400).send(error));
    },
    deleteList(req, res) {
        sequelize.query("DELETE FROM Test WHERE id='" + req.body.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send("delete sucess"))
            .catch(error => res.status(400).send(error));
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9saXN0Q29udHJvbC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9saXN0Q29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBRWxFLDJDQUEyQztBQUUzQywrQkFBK0I7QUFDL0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUMxQyxZQUFZLEVBQ1osVUFBVSxFQUNWO0lBQ0UsTUFBTSxFQUFFLFdBQVc7SUFDbkIsU0FBUyxFQUFFLE9BQU87SUFDbEIsTUFBTSxFQUFFLElBQUk7SUFDWixNQUFNLEVBQUU7UUFDUCxLQUFLLEVBQUUsQ0FBQztRQUNQLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxFQUFFLEtBQUs7UUFDYixTQUFTLEVBQUUsS0FBSztLQUNmO0NBRUosQ0FBQyxDQUFBO0FBQ0Ysc0JBQXNCO0FBR3RCLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV2QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQ3RCLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQ3RCLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsTUFBTSxHQUFHLEdBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2hELElBQVEsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNyQixNQUFNLEdBQUcsR0FBQyxPQUFPLENBQUMs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SSxDQUFDLEVBQUUsR0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUMsRUFBRyxFQUFJLENBQ3pHO2FBQ0EsSUFBSSxDQUNKLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3JDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUVDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgeyBTZXF1ZWxpemUsIFF1ZXJ5VHlwZXMgfSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xuY29uc3Qgc2VxdWVsaXplQ29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL3NlcXVlbGl6ZUNvbmZpZy5qc29uJyk7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbHMgfSBmcm9tICcuLi9tb2RlbHMtdHMnO1xuLy9jb25zdCBkYiA9IGNyZWF0ZU1vZGVscyhzZXF1ZWxpemVDb25maWcpO1xuXG4vL2NvbnN0IHNlcXVlbGl6ZT1kYi5TZXF1ZWxpemU7XG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFwiYmVzc2FtREJcIixcblwicGhwbXlhZG1pblwiLFxuXCJ0Z2J5aG51alwiLFxue1xuICBcImhvc3RcIjogXCJsb2NhbGhvc3RcIixcbiAgXCJkaWFsZWN0XCI6IFwibXlzcWxcIixcbiAgXCJwb3J0XCI6IDMzMDYsXG4gIFwicG9vbFwiOiB7XG4gICBcIm1heFwiOiA1LFxuICAgIFwibWluXCI6IDAsXG4gICAgXCJpZGxlXCI6IDIwMDAwLFxuICAgIFwiYWNxdWlyZVwiOiAyMDAwMFxuICAgIH1cblxufSlcbi8vY29uc3QgdGVzdCA9IGRiLlRlc3RcblxuXG52YXIgZm9ybWlkYWJsZSA9IHJlcXVpcmUoJ2Zvcm1pZGFibGUnKTtcblxudmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJyksXG4gICAgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKSxcbiAgICBvcyA9IHJlcXVpcmUoJ29zJyk7XG5jb25zdCBwd2Q9IHJlcXVpcmUoJy4vcGFzc3dvcmQuanMnKTtcbmNvbnN0IHRyYW5zcG9ydGVyID0gcmVxdWlyZSgnLi90cmFuc3BvcnRlci5qcycpO1xudmFyICAgICBtZXNzYWdlID0gJyc7XG5jb25zdCBsb2c9Y29uc29sZS5sb2dcblxuZnVuY3Rpb24gbGFuY2Vfc2NwKGZpbGVuYW1lKVxue1xuICBjb25zdCBob3N0X3RvID0gcHJvY2Vzcy5lbnYuaG9zdF90bztcbmNvbnN0IHVzZXJfdG8gPSBwcm9jZXNzLmVudi51c2VyX3RvO1xuY29uc3QgcGFzc3dvcmRfdG8gPSBwcm9jZXNzLmVudi5wYXNzd29yZF90bztcbmNvbnN0IGRpcmVjdG9yeV9mcm9tID0gcHJvY2Vzcy5lbnYuZGlyZWN0b3J5X2xvZ29fZnJvbTtcbiAgY29uc3QgZGlyZWN0b3J5X3RvID0gcHJvY2Vzcy5lbnYuZGlyZWN0b3J5X2xvZ29fdG87XG5cbiAgdmFyIGNsaWVudCA9IHJlcXVpcmUoJ3NjcDInKVxuICBjbGllbnQuc2NwKGRpcmVjdG9yeV9mcm9tK2ZpbGVuYW1lLCB7XG4gICAgICBob3N0OiBob3N0X3RvLFxuICAgICAgdXNlcm5hbWU6IHVzZXJfdG8sXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRfdG8sXG4gICAgLy9wcml2YXRlS2V5OmBBQUFBQjNOemFDMWtjM01BQUFDQkFNY0FkOVczQmgrUWtJbExUZWNqaXJlVFZxMms1cG1FTk5JVXREajMwUDFXMFV3MnhrYkhqMWx4NWdBUFhYaXpnKzZPZEZkdDdHazBuaUpwbFdyUVRDdWNOMURjRlJQQW8yc2JsaUd2cUZyMTJ6clgzb01WOHhhS3M5ajFoQWg3Z3poWWRZeVU3TXgyNXNveG1SaDZxcjBIQXpqYmVCVHJzVVRyVHBHbG0vbzlBQUFBRlFERlQ2VVBJUHVWN0d5M3BWYUxiV01xM1dVaU13QUFBSUIzK3dCWFhlOW1UOGRjZC9HUFJTWEcyTkhrMTNDeHlOSS9HTU9naEZPbjJ6NFdzcUFITENEb3VaTzE4OXgveXl0SzZ2anJxMmtRRjdFRFpwS1BzbWo5OHNJemF0VCttclVnTHBzcnZTdS9mQ1J3NElacHg1K095ak5qdkxzOVlOYnJncHJXWnJ4NTR2R3FJTThFYytSQnNFVlRxSWovM2NJeVpOMFVKVTRqYkFBQUFJRUFsOHpDbWNMZEtyS3Flemg5aXBMeFFJczZaVDIxQUdQK3ppWWticCsydWg1bTZWMy8zUnBTNER0dTNueTF2czZnTy93RWZ2amNSREQ2a254Y1BKc28yRXp1NW1uZE0zc1AyeDgxeUZRaGVrWU5Ic0YzZGl3YlEzS0pRZ0xWMzJVWjVGRUwydVAxSGo0QldLdjRvd0NNTDNhcHhGbzFjSFNkcWtzbWFORUJIV29gLFxuICAgICAgcGF0aDogZGlyZWN0b3J5X3RvXG4gIH0sIGZ1bmN0aW9uKGVycikge30pXG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgXG4gZ2V0TGlzdChyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZS5xdWVyeShcIlNFTEVDVCAqIEZST00gIFRlc3RcIlxuICAgIC8vIFRlc3QgdGFibGVcbiAgICAgICAgLCB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLlNFTEVDVH1cdCwge1x0IH1cdFx0ICAgXG4gICAgICAgICAgICAgICAgIClcdFx0XHRcdFx0ICAgICAgXG4gICAgICAgICAgLnRoZW4gKHRlID0+XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh0ZVswXSkpICAgICBcbiAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgICAgIFxuIH0sXG4gaW5zZXJ0TGlzdChyZXEscmVzKSB7XG4gICBzZXF1ZWxpemUucXVlcnkoXCJJTlNFUlQgSU5UTyBUZXN0ICh1c2VybmFtZSxlbWFpbCxwYXlzKSBWQUxVRVMgKCdcIityZXEuYm9keS51c2VybmFtZStcIicsJ1wiK3JlcS5ib2R5LmVtYWlsK1wiJywnXCIrcmVxLmJvZHkucGF5cytcIicpXCIsIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuSU5TRVJUfSAgLHsgIH1cbiAgIClcbiAgIC50aGVuIChcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChcImluc2VydCBzdWNlc3NcIikpICAgXG4gICAgLmNhdGNoKGVycm9yID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7ICAgIFxuIH0sXG4gdXBkYXRlTGlzdChyZXEscmVzKSB7XG4gIHNlcXVlbGl6ZS5xdWVyeShcIlVQREFURSBUZXN0IFNFVCBwYXlzPSdcIityZXEuYm9keS5wYXlzK1wiJyBXSEVSRSBpZCA9IDcgXCIsIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuVVBEQVRFfSAgLHsgIH1cbiAgKVxuICAudGhlbiAoXG4gICByZXMuc3RhdHVzKDIwMCkuc2VuZChcInVwZGF0ZSBzdWNlc3NcIikpICAgXG4gICAuY2F0Y2goZXJyb3IgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgICAgXG59LFxuZGVsZXRlTGlzdChyZXEsIHJlcykge1xuICBzZXF1ZWxpemUucXVlcnkoXCJERUxFVEUgRlJPTSBUZXN0IFdIRVJFIGlkPSdcIityZXEuYm9keS5pZCtcIidcIiwgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5ERUxFVEV9ICAseyAgfVxuICApXG4gIC50aGVuIChcbiAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFwiZGVsZXRlIHN1Y2Vzc1wiKSkgICBcbiAgIC5jYXRjaChlcnJvciA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xufVxuICAgXG4gfVxuICAgICAgXG4gICAgICAgICAgICAgXG5cbiJdfQ==