"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const rent = db.Rent;
module.exports = {
    //insertion of a new company
    insertRent(req, res) {
        sequelize
            .query("INSERT INTO rent_with_driver (ref, date_rent, hour_rent, date_prev_return,hour_prev_return,date_return,deposit,client_company_id ) VALUES('" +
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
            req.body.client_company_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('rent added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateRent(req, res) {
        return rent
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((rent) => {
            if (!rent) {
                return res.status(200).send({
                    message: ' inexistant rent',
                });
            }
            else {
                return rent
                    .update({
                    ref: req.body.ref,
                    date_rent: req.body.date_rent,
                    hour_rent: req.body.hour_rent,
                    date_prev_return: req.body.date_prev_return,
                    date_return: req.body.date_return,
                    deposit: req.body.deposit,
                    client_company_id: req.body.client_company_id,
                })
                    .then(() => res.status(200).send(`rent updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readRent(req, res) {
        return rent
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((rent) => {
            if (!rent) {
                return res.status(200).send({
                    message: 'inexistant rent',
                });
            }
            else {
                return res.status(200).send(rent);
            }
        });
    },
    deleteRent(req, res) {
        sequelize
            .query("DELETE FROM rent WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('rent deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9yZW50LnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL2NvbnRyb2xsZXJzL3JlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNsRSw0Q0FBNEM7QUFFNUMsTUFBTSxFQUFFLEdBQUcsd0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRS9CLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFFckIsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLDRCQUE0QjtJQUM1QixVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDakIsU0FBUzthQUNOLEtBQUssQ0FDSiw2SUFBNkk7WUFDM0ksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ1osTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUNsQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ2xCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtZQUN6QixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFDekIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNwQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ2hCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtZQUMxQixJQUFJLEVBRU4sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FB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QUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQ3ZELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSwgUXVlcnlUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5jb25zdCBzZXF1ZWxpemVDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvc2VxdWVsaXplQ29uZmlnLmpzb24nKTtcbmltcG9ydCB7IGNyZWF0ZU1vZGVscyB9IGZyb20gJy4uL21vZGVscy10cyc7XG5pbXBvcnQgeyBSZW50RmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy10cy9SZW50JztcbmNvbnN0IGRiID0gY3JlYXRlTW9kZWxzKHNlcXVlbGl6ZUNvbmZpZyk7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IGRiLnNlcXVlbGl6ZTtcblxuY29uc3QgcmVudCA9IGRiLlJlbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvL2luc2VydGlvbiBvZiBhIG5ldyBjb21wYW55XG4gIGluc2VydFJlbnQocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJJTlNFUlQgSU5UTyByZW50X3dpdGhfZHJpdmVyIChyZWYsIGRhdGVfcmVudCwgaG91cl9yZW50LCBkYXRlX3ByZXZfcmV0dXJuLGhvdXJfcHJldl9yZXR1cm4sZGF0ZV9yZXR1cm4sZGVwb3NpdCxjbGllbnRfY29tcGFueV9pZCApIFZBTFVFUygnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnJlZiArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmRhdGVfcmVudCArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmhvdXJfcmVudCArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmRhdGVfcHJldl9yZXR1cm4gK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5ob3VyX3ByZXZfcmV0dXJuICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZGF0ZV9yZXR1cm4gK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5kZXBvc2l0ICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuY2xpZW50X2NvbXBhbnlfaWQgK1xuICAgICAgICAgIFwiJylcIixcblxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLklOU0VSVCB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzLnN0YXR1cygyMDApLnNlbmQoJ3JlbnQgYWRkZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICB1cGRhdGVSZW50KHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIHJlbnRcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlbnQpID0+IHtcbiAgICAgICAgaWYgKCFyZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcgaW5leGlzdGFudCByZW50JyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVudFxuICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgIHJlZjogcmVxLmJvZHkucmVmLFxuICAgICAgICAgICAgICBkYXRlX3JlbnQ6IHJlcS5ib2R5LmRhdGVfcmVudCxcbiAgICAgICAgICAgICAgaG91cl9yZW50OiByZXEuYm9keS5ob3VyX3JlbnQsXG4gICAgICAgICAgICAgIGRhdGVfcHJldl9yZXR1cm46IHJlcS5ib2R5LmRhdGVfcHJldl9yZXR1cm4sXG4gICAgICAgICAgICAgIGRhdGVfcmV0dXJuOiByZXEuYm9keS5kYXRlX3JldHVybixcbiAgICAgICAgICAgICAgZGVwb3NpdDogcmVxLmJvZHkuZGVwb3NpdCxcbiAgICAgICAgICAgICAgY2xpZW50X2NvbXBhbnlfaWQ6IHJlcS5ib2R5LmNsaWVudF9jb21wYW55X2lkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHJlcy5zdGF0dXMoMjAwKS5zZW5kKGByZW50IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5YCkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgcmVhZFJlbnQocmVxLCByZXMpIHtcbiAgICByZXR1cm4gcmVudFxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVudCkgPT4ge1xuICAgICAgICBpZiAoIXJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ2luZXhpc3RhbnQgcmVudCcsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgZGVsZXRlUmVudChyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIkRFTEVURSBGUk9NIHJlbnQgV0hFUkUgaWQ9J1wiICsgcmVxLnBhcmFtcy5pZCArIFwiJ1wiLFxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLkRFTEVURSB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzLnN0YXR1cygyMDApLnNlbmQoJ3JlbnQgZGVsZXRlZCBzdWNjZXNzZnVsbHknKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG59O1xuIl19