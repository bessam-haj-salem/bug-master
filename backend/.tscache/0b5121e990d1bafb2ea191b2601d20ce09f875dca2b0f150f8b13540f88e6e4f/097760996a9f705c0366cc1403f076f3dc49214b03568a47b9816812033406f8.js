"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const usualCustomer = db.UsualCustomer;
module.exports = {
    //insertion of a new company
    insertUsualCustomer(req, res) {
        sequelize
            .query("INSERT INTO usual_customer (first_name, last_name, personal_ident, age, special_condition,  personal_group_id ) VALUES('" +
            req.body.first_name +
            "', '" +
            req.body.last_name +
            "','" +
            req.body.personal_ident +
            "', '" +
            req.body.age +
            "', '" +
            req.body.special_condition +
            "', '" +
            req.body.personal_group_id +
            "', '" +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('usualCustomer added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateUsualCustomer(req, res) {
        return usualCustomer
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((usualCustomer) => {
            if (!usualCustomer) {
                return res.status(200).send({
                    message: ' inexistant usualCustomer',
                });
            }
            else {
                return usualCustomer
                    .update({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    personal_ident: req.body.personal_ident,
                    age: req.body.age,
                    special_condition: req.body.special_condition,
                    trip_id: req.body.trip_id,
                    personal_group_id: req.body.personal_group_id,
                    client_company_id: req.body.client_company_id,
                })
                    .then(() => res
                    .status(200)
                    .send(`${req.body.first_name} was updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readUsualCustomer(req, res) {
        return usualCustomer
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((usualCustomer) => {
            if (!usualCustomer) {
                return res.status(200).send({
                    message: 'inexistant usualCustomer',
                });
            }
            else {
                return res.status(200).send(usualCustomer);
            }
        });
    },
    deleteUsualCustomer(req, res) {
        sequelize
            .query("DELETE FROM usual_customer WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('usualCustomer deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy91c3VhbEN1c3RvbWVyLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL2NvbnRyb2xsZXJzL3VzdWFsQ3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNsRSw0Q0FBNEM7QUFFNUMsTUFBTSxFQUFFLEdBQUcsd0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRS9CLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7QUFFdkMsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLDRCQUE0QjtJQUM1QixtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUMxQixTQUFTO2FBQ04sS0FBSyxDQUNKLDBIQUEwSDtZQUN4SCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDbkIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUNsQixLQUFLO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjO1lBQ3ZCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDWixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFDMUIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO1lBQzFCLE1BQU07WUFDTixJQUFJLEVBRU4sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7YUFDOUQsS0FBSyxDQUFD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SSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLENBQUM7YUFDaEUsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VxdWVsaXplLCBRdWVyeVR5cGVzIH0gZnJvbSAnc2VxdWVsaXplJztcbmNvbnN0IHNlcXVlbGl6ZUNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9zZXF1ZWxpemVDb25maWcuanNvbicpO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWxzIH0gZnJvbSAnLi4vbW9kZWxzLXRzJztcbmltcG9ydCB7IFVzdWFsQ3VzdG9tZXJGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzLXRzL1VzdWFsQ3VzdG9tZXInO1xuY29uc3QgZGIgPSBjcmVhdGVNb2RlbHMoc2VxdWVsaXplQ29uZmlnKTtcblxuY29uc3Qgc2VxdWVsaXplID0gZGIuc2VxdWVsaXplO1xuXG5jb25zdCB1c3VhbEN1c3RvbWVyID0gZGIuVXN1YWxDdXN0b21lcjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vaW5zZXJ0aW9uIG9mIGEgbmV3IGNvbXBhbnlcbiAgaW5zZXJ0VXN1YWxDdXN0b21lcihyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIklOU0VSVCBJTlRPIHVzdWFsX2N1c3RvbWVyIChmaXJzdF9uYW1lLCBsYXN0X25hbWUsIHBlcnNvbmFsX2lkZW50LCBhZ2UsIHNwZWNpYWxfY29uZGl0aW9uLCAgcGVyc29uYWxfZ3JvdXBfaWQgKSBWQUxVRVMoJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5maXJzdF9uYW1lICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkubGFzdF9uYW1lICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5wZXJzb25hbF9pZGVudCArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmFnZSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnNwZWNpYWxfY29uZGl0aW9uICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucGVyc29uYWxfZ3JvdXBfaWQgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICBcIicpXCIsXG5cbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5JTlNFUlQgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCd1c3VhbEN1c3RvbWVyIGFkZGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgdXBkYXRlVXN1YWxDdXN0b21lcihyZXEsIHJlcykge1xuICAgIHJldHVybiB1c3VhbEN1c3RvbWVyXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCh1c3VhbEN1c3RvbWVyKSA9PiB7XG4gICAgICAgIGlmICghdXN1YWxDdXN0b21lcikge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnIGluZXhpc3RhbnQgdXN1YWxDdXN0b21lcicsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHVzdWFsQ3VzdG9tZXJcbiAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICBmaXJzdF9uYW1lOiByZXEuYm9keS5maXJzdF9uYW1lLFxuICAgICAgICAgICAgICBsYXN0X25hbWU6IHJlcS5ib2R5Lmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgcGVyc29uYWxfaWRlbnQ6IHJlcS5ib2R5LnBlcnNvbmFsX2lkZW50LFxuICAgICAgICAgICAgICBhZ2U6IHJlcS5ib2R5LmFnZSxcbiAgICAgICAgICAgICAgc3BlY2lhbF9jb25kaXRpb246IHJlcS5ib2R5LnNwZWNpYWxfY29uZGl0aW9uLFxuICAgICAgICAgICAgICB0cmlwX2lkOiByZXEuYm9keS50cmlwX2lkLFxuICAgICAgICAgICAgICBwZXJzb25hbF9ncm91cF9pZDogcmVxLmJvZHkucGVyc29uYWxfZ3JvdXBfaWQsXG4gICAgICAgICAgICAgIGNsaWVudF9jb21wYW55X2lkOiByZXEuYm9keS5jbGllbnRfY29tcGFueV9pZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PlxuICAgICAgICAgICAgICByZXNcbiAgICAgICAgICAgICAgICAuc3RhdHVzKDIwMClcbiAgICAgICAgICAgICAgICAuc2VuZChgJHtyZXEuYm9keS5maXJzdF9uYW1lfSB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHlgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHJlYWRVc3VhbEN1c3RvbWVyKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIHVzdWFsQ3VzdG9tZXJcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHVzdWFsQ3VzdG9tZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c3VhbEN1c3RvbWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IHVzdWFsQ3VzdG9tZXInLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c3VhbEN1c3RvbWVyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sXG4gIGRlbGV0ZVVzdWFsQ3VzdG9tZXIocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJERUxFVEUgRlJPTSB1c3VhbF9jdXN0b21lciBXSEVSRSBpZD0nXCIgKyByZXEucGFyYW1zLmlkICsgXCInXCIsXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuREVMRVRFIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgndXN1YWxDdXN0b21lciBkZWxldGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbn07XG4iXX0=