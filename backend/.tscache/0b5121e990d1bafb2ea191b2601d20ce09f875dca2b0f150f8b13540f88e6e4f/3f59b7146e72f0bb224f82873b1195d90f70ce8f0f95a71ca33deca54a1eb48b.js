"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const rentUsualCustomer = db.RentUsualCustomer;
module.exports = {
    insertRentUsualCustomer(req, res) {
        sequelize
            .query("INSERT INTO rent_usual_customer (ref, date_rent, hour_rent, date_prev_return,hour_prev_return,date_return,deposit,usual_customer_id ) VALUES('" +
            req.body.ref +
            "', '" +
            req.body.date_rent +
            "', '" +
            req.body.hour_rent +
            "', '" +
            req.body.date_prev_return +
            "', '" +
            req.body.hour_prev_return +
            "', '" +
            req.body.date_return +
            "', '" +
            req.body.deposit +
            "', '" +
            req.body.usual_customer_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('rent added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateRentUsualCustomer(req, res) {
        return rentUsualCustomer
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((rentUsualCustomer) => {
            if (!rentUsualCustomer) {
                return res.status(200).send({
                    message: ' inexistant rent',
                });
            }
            else {
                return rentUsualCustomer
                    .update({
                    ref: req.body.ref,
                    date_rent: req.body.date_rent,
                    hour_rent: req.body.hour_rent,
                    date_prev_return: req.body.date_prev_return,
                    date_return: req.body.date_return,
                    deposit: req.body.deposit,
                    usual_customer_id: req.body.usual_customer_id,
                })
                    .then(() => res.status(200).send(`rent updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readRentUsualCustomer(req, res) {
        return rentUsualCustomer
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((rentUsualCustomer) => {
            if (!rentUsualCustomer) {
                return res.status(200).send({
                    message: 'inexistant rent',
                });
            }
            else {
                return res.status(200).send(rentUsualCustomer);
            }
        });
    },
    // read price with pagination
    readRentUsualCustomerChunk(req, res) {
        let page = req.body.page;
        let pageSize = req.body.pageSize;
        return rentUsualCustomer
            .findAll({
            // where: {},
            offset: page,
            limit: pageSize,
        })
            .then((rentUsualCustomer) => {
            if (!rentUsualCustomer) {
                return res.status(200).send({
                    message: 'inexistant usual Customer',
                });
            }
            else {
                return res.status(200).send(rentUsualCustomer);
            }
        });
    },
    deleteRentUsualCustomer(req, res) {
        sequelize
            .query("DELETE FROM rent_usual_customer  WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('rent deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9yZW50VXN1YWxDdXN0b21lci50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9yZW50VXN1YWxDdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ2xFLDRDQUE0QztBQUU1QyxNQUFNLEVBQUUsR0FBRyx3QkFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7QUFFL0IsTUFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7QUFFL0MsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQzlCLFNBQVM7YUFDTixLQUFLLENBQ0osZ0pBQWdKO1lBQzlJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztZQUNaLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDbEIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUNsQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFDekIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ3pCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDcEIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNoQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFDMUIsSUFBSSxFQUVOLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQ3JDLEVBQUUsQ0FDSDthQUNBLElBQUksQ0FBQyxHQUFH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QixPQUFPLENBQUM7WUFDUCxhQUFhO1lBQ2IsTUFBTSxFQUFFLElBQUk7WUFDWixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDO2FBQ0QsSUFBSSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3RCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sRUFBRSwyQkFBMkI7aUJBQ3JDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNoRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELHVCQUF1QixDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQzlCLFNBQVM7YUFDTixLQUFLLENBQ0osNkNBQTZDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUNuRSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0g7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQzthQUN2RCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXF1ZWxpemUsIFF1ZXJ5VHlwZXMgfSBmcm9tICdzZXF1ZWxpemUnO1xuY29uc3Qgc2VxdWVsaXplQ29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL3NlcXVlbGl6ZUNvbmZpZy5qc29uJyk7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbHMgfSBmcm9tICcuLi9tb2RlbHMtdHMnO1xuaW1wb3J0IHsgUmVudFVzdWFsQ3VzdG9tZXJGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzLXRzL1JlbnRVc3VhbEN1c3RvbWVyJztcbmNvbnN0IGRiID0gY3JlYXRlTW9kZWxzKHNlcXVlbGl6ZUNvbmZpZyk7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IGRiLnNlcXVlbGl6ZTtcblxuY29uc3QgcmVudFVzdWFsQ3VzdG9tZXIgPSBkYi5SZW50VXN1YWxDdXN0b21lcjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluc2VydFJlbnRVc3VhbEN1c3RvbWVyKHJlcSwgcmVzKSB7XG4gICAgc2VxdWVsaXplXG4gICAgICAucXVlcnkoXG4gICAgICAgIFwiSU5TRVJUIElOVE8gcmVudF91c3VhbF9jdXN0b21lciAocmVmLCBkYXRlX3JlbnQsIGhvdXJfcmVudCwgZGF0ZV9wcmV2X3JldHVybixob3VyX3ByZXZfcmV0dXJuLGRhdGVfcmV0dXJuLGRlcG9zaXQsdXN1YWxfY3VzdG9tZXJfaWQgKSBWQUxVRVMoJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5yZWYgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5kYXRlX3JlbnQgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5ob3VyX3JlbnQgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5kYXRlX3ByZXZfcmV0dXJuICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuaG91cl9wcmV2X3JldHVybiArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmRhdGVfcmV0dXJuICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZGVwb3NpdCArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnVzdWFsX2N1c3RvbWVyX2lkICtcbiAgICAgICAgICBcIicpXCIsXG5cbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5JTlNFUlQgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdyZW50IGFkZGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgdXBkYXRlUmVudFVzdWFsQ3VzdG9tZXIocmVxLCByZXMpIHtcbiAgICByZXR1cm4gcmVudFVzdWFsQ3VzdG9tZXJcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlbnRVc3VhbEN1c3RvbWVyKSA9PiB7XG4gICAgICAgIGlmICghcmVudFVzdWFsQ3VzdG9tZXIpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJyBpbmV4aXN0YW50IHJlbnQnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZW50VXN1YWxDdXN0b21lclxuICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgIHJlZjogcmVxLmJvZHkucmVmLFxuICAgICAgICAgICAgICBkYXRlX3JlbnQ6IHJlcS5ib2R5LmRhdGVfcmVudCxcbiAgICAgICAgICAgICAgaG91cl9yZW50OiByZXEuYm9keS5ob3VyX3JlbnQsXG4gICAgICAgICAgICAgIGRhdGVfcHJldl9yZXR1cm46IHJlcS5ib2R5LmRhdGVfcHJldl9yZXR1cm4sXG4gICAgICAgICAgICAgIGRhdGVfcmV0dXJuOiByZXEuYm9keS5kYXRlX3JldHVybixcbiAgICAgICAgICAgICAgZGVwb3NpdDogcmVxLmJvZHkuZGVwb3NpdCxcbiAgICAgICAgICAgICAgdXN1YWxfY3VzdG9tZXJfaWQ6IHJlcS5ib2R5LnVzdWFsX2N1c3RvbWVyX2lkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHJlcy5zdGF0dXMoMjAwKS5zZW5kKGByZW50IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5YCkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgcmVhZFJlbnRVc3VhbEN1c3RvbWVyKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIHJlbnRVc3VhbEN1c3RvbWVyXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZW50VXN1YWxDdXN0b21lcikgPT4ge1xuICAgICAgICBpZiAoIXJlbnRVc3VhbEN1c3RvbWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IHJlbnQnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChyZW50VXN1YWxDdXN0b21lcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICAvLyByZWFkIHByaWNlIHdpdGggcGFnaW5hdGlvblxuICByZWFkUmVudFVzdWFsQ3VzdG9tZXJDaHVuayhyZXEsIHJlcykge1xuICAgIGxldCBwYWdlID0gcmVxLmJvZHkucGFnZTtcbiAgICBsZXQgcGFnZVNpemUgPSByZXEuYm9keS5wYWdlU2l6ZTtcblxuICAgIHJldHVybiByZW50VXN1YWxDdXN0b21lclxuICAgICAgLmZpbmRBbGwoe1xuICAgICAgICAvLyB3aGVyZToge30sXG4gICAgICAgIG9mZnNldDogcGFnZSxcbiAgICAgICAgbGltaXQ6IHBhZ2VTaXplLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZW50VXN1YWxDdXN0b21lcikgPT4ge1xuICAgICAgICBpZiAoIXJlbnRVc3VhbEN1c3RvbWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IHVzdWFsIEN1c3RvbWVyJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocmVudFVzdWFsQ3VzdG9tZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgZGVsZXRlUmVudFVzdWFsQ3VzdG9tZXIocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJERUxFVEUgRlJPTSByZW50X3VzdWFsX2N1c3RvbWVyICBXSEVSRSBpZD0nXCIgKyByZXEucGFyYW1zLmlkICsgXCInXCIsXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuREVMRVRFIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgncmVudCBkZWxldGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbn07XG4iXX0=