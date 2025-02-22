"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const tripDriver = db.TripDriver;
module.exports = {
    //insertion of a new company
    insertTripDriver(req, res) {
        sequelize
            .query("INSERT INTO trip_driver (trip_id,driver_id  ) VALUES('" +
            req.body.trip_id +
            "', '" +
            req.body.driver_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('tripDriver added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateTripDriver(req, res) {
        return tripDriver
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((tripDriver) => {
            if (!tripDriver) {
                return res.status(200).send({
                    message: ' tripDriver inexistant ',
                });
            }
            else {
                return tripDriver
                    .update({
                    trip_id: req.body.trip_id,
                    driver_id: req.body.driver_id,
                })
                    .then(() => res.status(200).send(`tripDriver updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readTripDriver(req, res) {
        return tripDriver
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((tripDriver) => {
            if (!tripDriver) {
                return res.status(200).send({
                    message: 'tripDriver inexistant ',
                });
            }
            else {
                return res.status(200).send(tripDriver);
            }
        });
    },
    deleteTripDriver(req, res) {
        sequelize
            .query("DELETE FROM trip_driver WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('tripDriver deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy90cmlwRHJpdmVyLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL2NvbnRyb2xsZXJzL3RyaXBEcml2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNsRSw0Q0FBNEM7QUFFNUMsTUFBTSxFQUFFLEdBQUcsd0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRS9CLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFFakMsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLDRCQUE0QjtJQUM1QixnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUN2QixTQUFTO2FBQ04sS0FBSyxDQUNKLHdEQUF3RDtZQUN0RCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDaEIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUNsQixJQUFJLEVBRU4sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7YUFDM0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUN2QixPQUFPLFVBQVU7YUFDZCxPQUFPLENBQUM7WUFDUCxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDNUIsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDO2FBQ0QsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDZixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMxQixPQUFPLEVBQUUseUJBQXlCO2lCQUNuQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxPQUFPLFVBQVU7cUJBQ2QsTUFBTSxDQUFDO29CQUNOLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87b0JBQ3pCLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7aUJBQzlCLENBQUM7cUJBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7cUJBQ25FLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNsRDtRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3JCLE9BQU8sVUFBVTthQUNkLE9BQU8sQ0FBQztZQUNQLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUM1QixVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNmLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sRUFBRSx3QkFBd0I7aUJBQ2xDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDekM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUN2QixTQUFTO2FBQ04sS0FBSyxDQUNKLG9DQUFvQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFDMUQsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7YUFDN0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VxdWVsaXplLCBRdWVyeVR5cGVzIH0gZnJvbSAnc2VxdWVsaXplJztcbmNvbnN0IHNlcXVlbGl6ZUNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9zZXF1ZWxpemVDb25maWcuanNvbicpO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWxzIH0gZnJvbSAnLi4vbW9kZWxzLXRzJztcbmltcG9ydCB7IFRyaXBEcml2ZXJGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzLXRzL1RyaXBEcml2ZXInO1xuY29uc3QgZGIgPSBjcmVhdGVNb2RlbHMoc2VxdWVsaXplQ29uZmlnKTtcblxuY29uc3Qgc2VxdWVsaXplID0gZGIuc2VxdWVsaXplO1xuXG5jb25zdCB0cmlwRHJpdmVyID0gZGIuVHJpcERyaXZlcjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vaW5zZXJ0aW9uIG9mIGEgbmV3IGNvbXBhbnlcbiAgaW5zZXJ0VHJpcERyaXZlcihyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIklOU0VSVCBJTlRPIHRyaXBfZHJpdmVyICh0cmlwX2lkLGRyaXZlcl9pZCAgKSBWQUxVRVMoJ1wiICtcbiAgICAgICAgICByZXEuYm9keS50cmlwX2lkICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZHJpdmVyX2lkICtcbiAgICAgICAgICBcIicpXCIsXG5cbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5JTlNFUlQgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCd0cmlwRHJpdmVyIGFkZGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgdXBkYXRlVHJpcERyaXZlcihyZXEsIHJlcykge1xuICAgIHJldHVybiB0cmlwRHJpdmVyXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCh0cmlwRHJpdmVyKSA9PiB7XG4gICAgICAgIGlmICghdHJpcERyaXZlcikge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnIHRyaXBEcml2ZXIgaW5leGlzdGFudCAnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cmlwRHJpdmVyXG4gICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgdHJpcF9pZDogcmVxLmJvZHkudHJpcF9pZCxcbiAgICAgICAgICAgICAgZHJpdmVyX2lkOiByZXEuYm9keS5kcml2ZXJfaWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVzLnN0YXR1cygyMDApLnNlbmQoYHRyaXBEcml2ZXIgdXBkYXRlZCBzdWNjZXNzZnVsbHlgKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICByZWFkVHJpcERyaXZlcihyZXEsIHJlcykge1xuICAgIHJldHVybiB0cmlwRHJpdmVyXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCh0cmlwRHJpdmVyKSA9PiB7XG4gICAgICAgIGlmICghdHJpcERyaXZlcikge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAndHJpcERyaXZlciBpbmV4aXN0YW50ICcsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHRyaXBEcml2ZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgZGVsZXRlVHJpcERyaXZlcihyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIkRFTEVURSBGUk9NIHRyaXBfZHJpdmVyIFdIRVJFIGlkPSdcIiArIHJlcS5wYXJhbXMuaWQgKyBcIidcIixcbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5ERUxFVEUgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCd0cmlwRHJpdmVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxufTtcbiJdfQ==