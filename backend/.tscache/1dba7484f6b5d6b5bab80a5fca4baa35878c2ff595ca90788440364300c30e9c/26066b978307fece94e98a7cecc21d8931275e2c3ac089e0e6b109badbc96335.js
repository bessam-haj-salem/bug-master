"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//sc
let express = require('express');
var str = '';
var sleep = require('sleep');
var Sequelize = require('sequelize');
let app = express();
// var fs = require('fs');
// let bodyParser = require('body-parser');
// let multer = require('multer');
// let upload = multer();
// let parser = require('xml2json');
// const xml2js = require('xml2js');
// const axios = require('axios');
// let xmlParser = require('xml2json'); //pour parser de xml-->json
// let convert = require('xml-js');
// var js2xmlparser = require('js2xmlparser'); //pour parser json--->xml
const Project = require('../controllers').project;
const Issues = require('../controllers').issues;
const Members = require('../controllers').members;
const MembersProject = require('../controllers').membersProject;
const IssuesMembers = require('../');
let WebSocket = require('ws');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
// api routes
// global error handler
module.exports = (app) => {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,uix,From,Authorization ');
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        next();
    });
    var path = require('path');
    //**Project */
    app.post('/apiRF/Project/insert', Project.insertProject);
    app.put('/apiRF/Project/update/:id', Project.updateProject);
    app.get('/apiRF/Project/read/:id', Project.readProject);
    app.delete('/apiRF/Project/delete/:id', Project.deleteProject);
    app.post('/apiRF/Project/readPage', Project.readProjectChunk);
    //**Issues */
    app.post('/apiRF/Issues/insert', Issues.insertIssues);
    app.put('/apiRF/Issues/update/:id', Issues.updateIssues);
    app.get('/apiRF/Issues/read/:id', Issues.readIssues);
    app.delete('/apiRF/Issues/delete/:id', Issues.deleteIssues);
    app.post('/apiRF/Issues/readPage', Issues.readIssuesChunk);
    //**Members */
    app.post('/apiRF/Members/insert', Members.insertMembers);
    app.put('/apiRF/Members/update/:id', Members.updateMembers);
    app.get('/apiRF/Members/read/:id', Members.readMembers);
    app.delete('/apiRF/Members/delete/:id', Members.deleteMembers);
    app.post('/apiRF/Members/readPage', Members.readMembersChunk);
    //**MembersProject */
    app.post('/apiRF/MembersProject/insert', MembersProject.insertMembersProject);
    app.put('/apiRF/MembersProject/update/:id', MembersProject.updateMembersProject);
    app.get('/apiRF/MembersProject/read/:id', MembersProject.readMembersProject);
    app.delete('/apiRF/MembersProject/delete/:id', MembersProject.deleteMembersProject);
    app.post('/apiRF/MembersProject/readPage', MembersProject.readMembersProjectChunk);
    //**IssuesMembers */
    app.post('/apiRF/IssuesMembers/insert', IssuesMembers.insertIssuesMembers);
    app.put('/apiRF/IssuesMembers/update/:id', IssuesMembers.updateIssuesMembers);
    app.get('/apiRF/IssuesMembers/read/:id', IssuesMembers.readIssuesMembers);
    app.delete('/apiRF/IssuesMembers/delete/:id', IssuesMembers.deleteIssuesMembers);
    app.post('/apiRF/IssuesMembers/readPage', IssuesMembers.readIssuesMembersChunk);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL3JvdXRlcy9pbmRleC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUk7QUFDSixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTdCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUVyQyxJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUNwQiwwQkFBMEI7QUFDMUIsMkNBQTJDO0FBQzNDLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekIsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyxrQ0FBa0M7QUFFbEMsbUVBQW1FO0FBQ25FLG1DQUFtQztBQUNuQyx3RUFBd0U7QUFFeEUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2xELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNoRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbEQsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsY0FBYyxDQUFDO0FBQ2hFLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUtwQyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIs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QWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ25GLG9CQUFvQjtJQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzNFLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDOUUsR0FBRyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMxRSxHQUFHLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxFQUFFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pGLEdBQUcsQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDbEYsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9zY1xubGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgc3RyID0gJyc7XG52YXIgc2xlZXAgPSByZXF1aXJlKCdzbGVlcCcpO1xuXG52YXIgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5cbmxldCBhcHAgPSBleHByZXNzKCk7XG4vLyB2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuLy8gbGV0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuLy8gbGV0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xuLy8gbGV0IHVwbG9hZCA9IG11bHRlcigpO1xuLy8gbGV0IHBhcnNlciA9IHJlcXVpcmUoJ3htbDJqc29uJyk7XG4vLyBjb25zdCB4bWwyanMgPSByZXF1aXJlKCd4bWwyanMnKTtcbi8vIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuLy8gbGV0IHhtbFBhcnNlciA9IHJlcXVpcmUoJ3htbDJqc29uJyk7IC8vcG91ciBwYXJzZXIgZGUgeG1sLS0+anNvblxuLy8gbGV0IGNvbnZlcnQgPSByZXF1aXJlKCd4bWwtanMnKTtcbi8vIHZhciBqczJ4bWxwYXJzZXIgPSByZXF1aXJlKCdqczJ4bWxwYXJzZXInKTsgLy9wb3VyIHBhcnNlciBqc29uLS0tPnhtbFxuXG5jb25zdCBQcm9qZWN0ID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5wcm9qZWN0O1xuY29uc3QgSXNzdWVzID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5pc3N1ZXM7XG5jb25zdCBNZW1iZXJzID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5tZW1iZXJzO1xuY29uc3QgTWVtYmVyc1Byb2plY3QgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLm1lbWJlcnNQcm9qZWN0O1xuY29uc3QgSXNzdWVzTWVtYmVycyA9IHJlcXVpcmUoJy4uLycpXG4vL2NvbnN0IGF1dGg9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykuYXV0aDtcblxuaW1wb3J0ICogYXMgcHJvY2Vzc3VzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5sZXQgV2ViU29ja2V0ID0gcmVxdWlyZSgnd3MnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGZvcm1pZGFibGUgPSByZXF1aXJlKCdmb3JtaWRhYmxlJyk7XG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG4vLyBhcGkgcm91dGVzXG5cbi8vIGdsb2JhbCBlcnJvciBoYW5kbGVyXG5cbm1vZHVsZS5leHBvcnRzID0gKGFwcCkgPT4ge1xuICBhcHAudXNlKGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICByZXMuaGVhZGVyKFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLFxuICAgICAgJ09yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQsdWl4LEZyb20sQXV0aG9yaXphdGlvbiAnXG4gICAgKTtcbiAgICByZXMuaGVhZGVyKFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLFxuICAgICAgJ1BPU1QsIEdFVCwgUFVULCBERUxFVEUsIE9QVElPTlMnXG4gICAgKTtcblxuICAgIG5leHQoKTtcbiAgfSk7XG4gIHZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG4gIC8vKipQcm9qZWN0ICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvUHJvamVjdC9pbnNlcnQnLCBQcm9qZWN0Lmluc2VydFByb2plY3QpO1xuICBhcHAucHV0KCcvYXBpUkYvUHJvamVjdC91cGRhdGUvOmlkJywgUHJvamVjdC51cGRhdGVQcm9qZWN0KTtcbiAgYXBwLmdldCgnL2FwaVJGL1Byb2plY3QvcmVhZC86aWQnLCBQcm9qZWN0LnJlYWRQcm9qZWN0KTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL1Byb2plY3QvZGVsZXRlLzppZCcsIFByb2plY3QuZGVsZXRlUHJvamVjdCk7XG4gIGFwcC5wb3N0KCcvYXBpUkYvUHJvamVjdC9yZWFkUGFnZScsIFByb2plY3QucmVhZFByb2plY3RDaHVuayk7XG4gIC8vKipJc3N1ZXMgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9Jc3N1ZXMvaW5zZXJ0JywgSXNzdWVzLmluc2VydElzc3Vlcyk7XG4gIGFwcC5wdXQoJy9hcGlSRi9Jc3N1ZXMvdXBkYXRlLzppZCcsIElzc3Vlcy51cGRhdGVJc3N1ZXMpO1xuICBhcHAuZ2V0KCcvYXBpUkYvSXNzdWVzL3JlYWQvOmlkJywgSXNzdWVzLnJlYWRJc3N1ZXMpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvSXNzdWVzL2RlbGV0ZS86aWQnLCBJc3N1ZXMuZGVsZXRlSXNzdWVzKTtcbiAgYXBwLnBvc3QoJy9hcGlSRi9Jc3N1ZXMvcmVhZFBhZ2UnLCBJc3N1ZXMucmVhZElzc3Vlc0NodW5rKTtcbiAgLy8qKk1lbWJlcnMgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9NZW1iZXJzL2luc2VydCcsIE1lbWJlcnMuaW5zZXJ0TWVtYmVycyk7XG4gIGFwcC5wdXQoJy9hcGlSRi9NZW1iZXJzL3VwZGF0ZS86aWQnLCBNZW1iZXJzLnVwZGF0ZU1lbWJlcnMpO1xuICBhcHAuZ2V0KCcvYXBpUkYvTWVtYmVycy9yZWFkLzppZCcsIE1lbWJlcnMucmVhZE1lbWJlcnMpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvTWVtYmVycy9kZWxldGUvOmlkJywgTWVtYmVycy5kZWxldGVNZW1iZXJzKTtcbiAgYXBwLnBvc3QoJy9hcGlSRi9NZW1iZXJzL3JlYWRQYWdlJywgTWVtYmVycy5yZWFkTWVtYmVyc0NodW5rKTtcbiAgLy8qKk1lbWJlcnNQcm9qZWN0ICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvTWVtYmVyc1Byb2plY3QvaW5zZXJ0JywgTWVtYmVyc1Byb2plY3QuaW5zZXJ0TWVtYmVyc1Byb2plY3QpO1xuICBhcHAucHV0KCcvYXBpUkYvTWVtYmVyc1Byb2plY3QvdXBkYXRlLzppZCcsIE1lbWJlcnNQcm9qZWN0LnVwZGF0ZU1lbWJlcnNQcm9qZWN0KTtcbiAgYXBwLmdldCgnL2FwaVJGL01lbWJlcnNQcm9qZWN0L3JlYWQvOmlkJywgTWVtYmVyc1Byb2plY3QucmVhZE1lbWJlcnNQcm9qZWN0KTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL01lbWJlcnNQcm9qZWN0L2RlbGV0ZS86aWQnLCBNZW1iZXJzUHJvamVjdC5kZWxldGVNZW1iZXJzUHJvamVjdCk7XG4gIGFwcC5wb3N0KCcvYXBpUkYvTWVtYmVyc1Byb2plY3QvcmVhZFBhZ2UnLCBNZW1iZXJzUHJvamVjdC5yZWFkTWVtYmVyc1Byb2plY3RDaHVuayk7XG4gIC8vKipJc3N1ZXNNZW1iZXJzICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvSXNzdWVzTWVtYmVycy9pbnNlcnQnLCBJc3N1ZXNNZW1iZXJzLmluc2VydElzc3Vlc01lbWJlcnMpO1xuICBhcHAucHV0KCcvYXBpUkYvSXNzdWVzTWVtYmVycy91cGRhdGUvOmlkJywgSXNzdWVzTWVtYmVycy51cGRhdGVJc3N1ZXNNZW1iZXJzKTtcbiAgYXBwLmdldCgnL2FwaVJGL0lzc3Vlc01lbWJlcnMvcmVhZC86aWQnLCBJc3N1ZXNNZW1iZXJzLnJlYWRJc3N1ZXNNZW1iZXJzKTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL0lzc3Vlc01lbWJlcnMvZGVsZXRlLzppZCcsIElzc3Vlc01lbWJlcnMuZGVsZXRlSXNzdWVzTWVtYmVycyk7XG4gIGFwcC5wb3N0KCcvYXBpUkYvSXNzdWVzTWVtYmVycy9yZWFkUGFnZScsIElzc3Vlc01lbWJlcnMucmVhZElzc3Vlc01lbWJlcnNDaHVuayk7XG59O1xuIl19