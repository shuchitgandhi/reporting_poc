'use strict';

const request = require('request-promise');

module.exports = function(app) {
  // Get all events
  app.get('/events', (req, res) => {
    request({
      uri: 'http://ec2-34-229-39-54.compute-1.amazonaws.com/jasperserver-pro/rest_v2/queryExecutor/organizations/Pearson/Domains/Pearson_User_Login_Domain?j_username=superuser&j_password=play@1234&q=<query><queryFields><queryField id="user_info_view.user_id"/><queryField id="user_info_view.user_name"/><queryField id="user_info_view.role"/><queryField id="user_info_view.district_id"/><queryField id="user_info_view.school_id"/><queryField id="user_info_view.teacher_id"/><queryField id="user_event_view.event_type"/><queryField id="user_event_view.platform"/><queryField id="user_event_view.timestamp"/></queryFields></query>',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then(function(response) {
      res.json(JSON.parse(response));
    }).catch(function(error) {
      res.send('Error in fetching data!');
    });
  });

  // Get events by districtId
  app.get('/events/districtId/:districtId', (req, res) => {
    request({
      uri: 'http://ec2-34-229-39-54.compute-1.amazonaws.com/jasperserver-pro/rest_v2/queryExecutor/organizations/Pearson/Domains/Pearson_User_Login_Domain?j_username=superuser&j_password=play@1234&q=<query><queryFields><queryField id="user_info_view.user_id"/><queryField id="user_info_view.user_name"/><queryField id="user_info_view.role"/><queryField id="user_info_view.district_id"/><queryField id="user_info_view.school_id"/><queryField id="user_info_view.teacher_id"/><queryField id="user_event_view.event_type"/><queryField id="user_event_view.platform"/><queryField id="user_event_view.timestamp"/></queryFields><queryFilterString>user_info_view.district_id==\'' + req.params.districtId + '\'</queryFilterString></query>',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then(function(response) {
      res.json(JSON.parse(response));
    }).catch(function(error) {
      res.send('Error in fetching data!');
    });
  });

  // Get events by schoolId
  app.get('/events/schoolId/:schoolId', (req, res) => {
    request({
      uri: 'http://ec2-34-229-39-54.compute-1.amazonaws.com/jasperserver-pro/rest_v2/queryExecutor/organizations/Pearson/Domains/Pearson_User_Login_Domain?j_username=superuser&j_password=play@1234&q=<query><queryFields><queryField id="user_info_view.user_id"/><queryField id="user_info_view.user_name"/><queryField id="user_info_view.role"/><queryField id="user_info_view.district_id"/><queryField id="user_info_view.school_id"/><queryField id="user_info_view.teacher_id"/><queryField id="user_event_view.event_type"/><queryField id="user_event_view.platform"/><queryField id="user_event_view.timestamp"/></queryFields><queryFilterString>user_info_view.school_id==\'' + req.params.schoolId + '\'</queryFilterString></query>',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then(function(response) {
      res.json(JSON.parse(response));
    }).catch(function(error) {
      res.send('Error in fetching data!');
    });
  });

  // Get events by teacherId
  app.get('/events/teacherId/:teacherId', (req, res) => {
    request({
      uri: 'http://ec2-34-229-39-54.compute-1.amazonaws.com/jasperserver-pro/rest_v2/queryExecutor/organizations/Pearson/Domains/Pearson_User_Login_Domain?j_username=superuser&j_password=play@1234&q=<query><queryFields><queryField id="user_info_view.user_id"/><queryField id="user_info_view.user_name"/><queryField id="user_info_view.role"/><queryField id="user_info_view.district_id"/><queryField id="user_info_view.school_id"/><queryField id="user_info_view.teacher_id"/><queryField id="user_event_view.event_type"/><queryField id="user_event_view.platform"/><queryField id="user_event_view.timestamp"/></queryFields><queryFilterString>user_info_view.teacher_id==\'' + req.params.teacherId + '\'</queryFilterString></query>',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then(function(response) {
      res.json(JSON.parse(response));
    }).catch(function(error) {
      res.send('Error in fetching data!');
    });
  });
};
