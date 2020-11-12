"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const driver = db.Driver;
module.exports = {
    //insertion of a new company
    insertDriver(req, res) {
        sequelize
            .query("INSERT INTO driver (first_name, last_name, personal_ident, ref_drive_licence,trip_id ) VALUES('" +
            req.body.first_name +
            "', '" +
            req.body.last_name +
            "','" +
            req.body.personal_ident +
            "', '" +
            req.body.ref_drive_licence +
            "', '" +
            req.body.trip_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('driver added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateDriver(req, res) {
        return driver
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((driver) => {
            if (!driver) {
                return res.status(200).send({
                    message: ' inexistant driver',
                });
            }
            else {
                return driver
                    .update({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    personal_ident: req.body.personal_ident,
                    ref_drive_licence: req.body.ref_drive_licence,
                    trip_id: req.body.trip_id,
                })
                    .then(() => res
                    .status(200)
                    .send(`${req.body.first_name} was updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readDriver(req, res) {
        return driver
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((driver) => {
            if (!driver) {
                return res.status(200).send({
                    message: 'inexistant company',
                });
            }
            else {
                return res.status(200).send(driver);
            }
        });
    },
    deleteDriver(req, res) {
        sequelize
            .query("DELETE FROM driver WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('driver deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9kcml2ZXIudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvY29udHJvbGxlcnMvZHJpdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDbEUsNENBQTRDO0FBRTVDLE1BQU0sRUFBRSxHQUFHLHdCQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFekMsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztBQUUvQixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0FBRXpCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZiw0QkFBNEI7SUFDNUIsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ25CLFNBQVM7YUFDTixLQUFLLENBQ0osaUdBQWlHO1lBQy9GLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUNuQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ2xCLEtBQUs7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFDdkIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO1lBQzFCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDaEIsSUFBSSxFQUVOLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQ3JDLEVBQUUsQ0FDSDthQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQ3ZELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENB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ImltcG9ydCB7IFNlcXVlbGl6ZSwgUXVlcnlUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5jb25zdCBzZXF1ZWxpemVDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvc2VxdWVsaXplQ29uZmlnLmpzb24nKTtcbmltcG9ydCB7IGNyZWF0ZU1vZGVscyB9IGZyb20gJy4uL21vZGVscy10cyc7XG5pbXBvcnQgeyBDbGllbnRDb21wYW55RmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy10cy9DbGllbnRDb21wYW55JztcbmNvbnN0IGRiID0gY3JlYXRlTW9kZWxzKHNlcXVlbGl6ZUNvbmZpZyk7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IGRiLnNlcXVlbGl6ZTtcblxuY29uc3QgZHJpdmVyID0gZGIuRHJpdmVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy9pbnNlcnRpb24gb2YgYSBuZXcgY29tcGFueVxuICBpbnNlcnREcml2ZXIocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJJTlNFUlQgSU5UTyBkcml2ZXIgKGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgcGVyc29uYWxfaWRlbnQsIHJlZl9kcml2ZV9saWNlbmNlLHRyaXBfaWQgKSBWQUxVRVMoJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5maXJzdF9uYW1lICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkubGFzdF9uYW1lICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5wZXJzb25hbF9pZGVudCArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnJlZl9kcml2ZV9saWNlbmNlICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkudHJpcF9pZCArXG4gICAgICAgICAgXCInKVwiLFxuXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuSU5TRVJUIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgnZHJpdmVyIGFkZGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgdXBkYXRlRHJpdmVyKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIGRyaXZlclxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoZHJpdmVyKSA9PiB7XG4gICAgICAgIGlmICghZHJpdmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcgaW5leGlzdGFudCBkcml2ZXInLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBkcml2ZXJcbiAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICBmaXJzdF9uYW1lOiByZXEuYm9keS5maXJzdF9uYW1lLFxuICAgICAgICAgICAgICBsYXN0X25hbWU6IHJlcS5ib2R5Lmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgcGVyc29uYWxfaWRlbnQ6IHJlcS5ib2R5LnBlcnNvbmFsX2lkZW50LFxuICAgICAgICAgICAgICByZWZfZHJpdmVfbGljZW5jZTogcmVxLmJvZHkucmVmX2RyaXZlX2xpY2VuY2UsXG4gICAgICAgICAgICAgIHRyaXBfaWQ6IHJlcS5ib2R5LnRyaXBfaWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcmVzXG4gICAgICAgICAgICAgICAgLnN0YXR1cygyMDApXG4gICAgICAgICAgICAgICAgLnNlbmQoYCR7cmVxLmJvZHkuZmlyc3RfbmFtZX0gd2FzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICByZWFkRHJpdmVyKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIGRyaXZlclxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoZHJpdmVyKSA9PiB7XG4gICAgICAgIGlmICghZHJpdmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IGNvbXBhbnknLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChkcml2ZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgZGVsZXRlRHJpdmVyKHJlcSwgcmVzKSB7XG4gICAgc2VxdWVsaXplXG4gICAgICAucXVlcnkoXG4gICAgICAgIFwiREVMRVRFIEZST00gZHJpdmVyIFdIRVJFIGlkPSdcIiArIHJlcS5wYXJhbXMuaWQgKyBcIidcIixcbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5ERUxFVEUgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdkcml2ZXIgZGVsZXRlZCBzdWNjZXNzZnVsbHknKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG59O1xuIl19