"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const rentWithDriverUsualCustomerDriver = db.RentWithDriverUsualCustomerDriver;
module.exports = {
    insertRentWithDriverUsualCustomerDriver(req, res) {
        sequelize
            .query("INSERT INTO rent_with_driver_usual_customer_Driver (rent_with_driver_usual_customer_id, driver_id  ) VALUES('" +
            req.body.rent_with_driver_usual_customer_id +
            "', '" +
            req.body.driver_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res
            .status(200)
            .send('rentWithDriverUsualCustomerDriver added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateRentWithDriverUsualCustomerDriver(req, res) {
        return rentWithDriverUsualCustomerDriver
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((rentWithDriverUsualCustomerDriver) => {
            if (!rentWithDriverUsualCustomerDriver) {
                return res.status(200).send({
                    message: ' rentWithDriverUsualCustomerDriver inexistant ',
                });
            }
            else {
                return rentWithDriverUsualCustomerDriver
                    .update({
                    rent_with_driver_usual_customer_id: req.body.rent_with_driver_usual_customer_id,
                    driver_id: req.body.driver_id,
                })
                    .then(() => res
                    .status(200)
                    .send(`rentWithDriverUsualCustomerDriver updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readRentWithDriverUsualCustomerDriver(req, res) {
        return rentWithDriverUsualCustomerDriver
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((rentWithDriverUsualCustomerDriver) => {
            if (!rentWithDriverUsualCustomerDriver) {
                return res.status(200).send({
                    message: 'rentWithDriverUsualCustomerDriver inexistant ',
                });
            }
            else {
                return res.status(200).send(rentWithDriverUsualCustomerDriver);
            }
        });
    },
    // read rentWithDriverUsualCustomerDriver with pagination
    readRentWithDriverUsualCustomerDriverChunk(req, res) {
        let page = req.body.page;
        let pageSize = req.body.pageSize;
        return rentWithDriverUsualCustomerDriver
            .findAll({
            // where: {},
            offset: page,
            limit: pageSize,
        })
            .then((rentWithDriverUsualCustomerDriver) => {
            if (!rentWithDriverUsualCustomerDriver) {
                return res.status(200).send({
                    message: 'inexistant rentWithDriverUsualCustomerDriver',
                });
            }
            else {
                return res.status(200).send(rentWithDriverUsualCustomerDriver);
            }
        });
    },
    deleteRentWithDriverUsualCustomerDriver(req, res) {
        sequelize
            .query("DELETE FROM rent_with_driver_usual_customer_Driver WHERE id='" +
            req.params.id +
            "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res
            .status(200)
            .send('rentWithDriverUsualCustomerDriver deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9yZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvY29udHJvbGxlcnMvcmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDbEUsNENBQTRDO0FBRTVDLE1BQU0sRUFBRSxHQUFHLHdCQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFekMsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztBQUUvQixNQUFNLGlDQUFpQyxHQUFHLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztBQUUvRSxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsdUNBQXVDLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDOUMsU0FBUzthQUNOLEtBQUssQ0FDSiwrR0FBK0c7WUFDN0csR0FBRyxDQUFDLElBQUksQ0FBQyxrQ0FBa0M7WUFDM0MsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUNsQixJQUFJLEVBRU4sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUNILEdBQUc7YUFDQSxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDLHNEQUFzRCxDQUFDLENBQ2hFO2FBQ0EsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCx1Q0FBdUMsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUM5QyxPQUFP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QUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDYixHQUFHLEVBQ0wsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUNILEdBQUc7YUFDQSxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDLHdEQUF3RCxDQUFDLENBQ2xFO2FBQ0EsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VxdWVsaXplLCBRdWVyeVR5cGVzIH0gZnJvbSAnc2VxdWVsaXplJztcbmNvbnN0IHNlcXVlbGl6ZUNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9zZXF1ZWxpemVDb25maWcuanNvbicpO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWxzIH0gZnJvbSAnLi4vbW9kZWxzLXRzJztcbmltcG9ydCB7IFJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckRyaXZlckZhY3RvcnkgfSBmcm9tICcuLi9tb2RlbHMtdHMvUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyJztcbmNvbnN0IGRiID0gY3JlYXRlTW9kZWxzKHNlcXVlbGl6ZUNvbmZpZyk7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IGRiLnNlcXVlbGl6ZTtcblxuY29uc3QgcmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyID0gZGIuUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5zZXJ0UmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyKHJlcSwgcmVzKSB7XG4gICAgc2VxdWVsaXplXG4gICAgICAucXVlcnkoXG4gICAgICAgIFwiSU5TRVJUIElOVE8gcmVudF93aXRoX2RyaXZlcl91c3VhbF9jdXN0b21lcl9Ecml2ZXIgKHJlbnRfd2l0aF9kcml2ZXJfdXN1YWxfY3VzdG9tZXJfaWQsIGRyaXZlcl9pZCAgKSBWQUxVRVMoJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5yZW50X3dpdGhfZHJpdmVyX3VzdWFsX2N1c3RvbWVyX2lkICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZHJpdmVyX2lkICtcbiAgICAgICAgICBcIicpXCIsXG5cbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5JTlNFUlQgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKFxuICAgICAgICByZXNcbiAgICAgICAgICAuc3RhdHVzKDIwMClcbiAgICAgICAgICAuc2VuZCgncmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyIGFkZGVkIHN1Y2Nlc3NmdWxseScpXG4gICAgICApXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICB1cGRhdGVSZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIocmVxLCByZXMpIHtcbiAgICByZXR1cm4gcmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIpID0+IHtcbiAgICAgICAgaWYgKCFyZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJyByZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIgaW5leGlzdGFudCAnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXJcbiAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICByZW50X3dpdGhfZHJpdmVyX3VzdWFsX2N1c3RvbWVyX2lkOlxuICAgICAgICAgICAgICAgIHJlcS5ib2R5LnJlbnRfd2l0aF9kcml2ZXJfdXN1YWxfY3VzdG9tZXJfaWQsXG4gICAgICAgICAgICAgIGRyaXZlcl9pZDogcmVxLmJvZHkuZHJpdmVyX2lkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgICAgIHJlc1xuICAgICAgICAgICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAgICAgICAgIC5zZW5kKGByZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIgdXBkYXRlZCBzdWNjZXNzZnVsbHlgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHJlYWRSZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIocmVxLCByZXMpIHtcbiAgICByZXR1cm4gcmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIpID0+IHtcbiAgICAgICAgaWYgKCFyZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ3JlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckRyaXZlciBpbmV4aXN0YW50ICcsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckRyaXZlcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICAvLyByZWFkIHJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckRyaXZlciB3aXRoIHBhZ2luYXRpb25cbiAgcmVhZFJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckRyaXZlckNodW5rKHJlcSwgcmVzKSB7XG4gICAgbGV0IHBhZ2UgPSByZXEuYm9keS5wYWdlO1xuICAgIGxldCBwYWdlU2l6ZSA9IHJlcS5ib2R5LnBhZ2VTaXplO1xuXG4gICAgcmV0dXJuIHJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckRyaXZlclxuICAgICAgLmZpbmRBbGwoe1xuICAgICAgICAvLyB3aGVyZToge30sXG4gICAgICAgIG9mZnNldDogcGFnZSxcbiAgICAgICAgbGltaXQ6IHBhZ2VTaXplLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIpID0+IHtcbiAgICAgICAgaWYgKCFyZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ2luZXhpc3RhbnQgcmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sXG4gIGRlbGV0ZVJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckRyaXZlcihyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIkRFTEVURSBGUk9NIHJlbnRfd2l0aF9kcml2ZXJfdXN1YWxfY3VzdG9tZXJfRHJpdmVyIFdIRVJFIGlkPSdcIiArXG4gICAgICAgICAgcmVxLnBhcmFtcy5pZCArXG4gICAgICAgICAgXCInXCIsXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuREVMRVRFIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihcbiAgICAgICAgcmVzXG4gICAgICAgICAgLnN0YXR1cygyMDApXG4gICAgICAgICAgLnNlbmQoJ3JlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckRyaXZlciBkZWxldGVkIHN1Y2Nlc3NmdWxseScpXG4gICAgICApXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxufTtcbiJdfQ==