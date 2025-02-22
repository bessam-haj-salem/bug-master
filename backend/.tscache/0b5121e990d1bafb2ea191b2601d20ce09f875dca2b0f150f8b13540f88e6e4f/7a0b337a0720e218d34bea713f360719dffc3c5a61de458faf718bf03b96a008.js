"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const price = db.Price;
module.exports = {
    //insertion of a new company
    insertPrice(req, res) {
        sequelize
            .query("INSERT INTO price (price_per_km, price_per_hour, forfait_price, vehicule_fleet_id) VALUES('" +
            req.body.price_per_km +
            "', '" +
            req.body.price_per_hour +
            "', '" +
            req.body.forfait_price +
            "', '" +
            req.body.vehicule_fleet_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('price added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updatePrice(req, res) {
        return price
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((price) => {
            if (!price) {
                return res.status(200).send({
                    message: ' inexistant price',
                });
            }
            else {
                return price
                    .update({
                    price_per_km: req.body.price_per_km,
                    price_per_hour: req.body.price_per_hour,
                    forfait_price: req.body.forfait_price,
                    vehicule_fleet_id: req.body.vehicule_fleet_id,
                })
                    .then(() => res.status(200).send(`price updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readPrice(req, res) {
        return price
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((price) => {
            if (!price) {
                return res.status(200).send({
                    message: 'inexistant price',
                });
            }
            else {
                return res.status(200).send(price);
            }
        });
    },
    deletePrice(req, res) {
        sequelize
            .query("DELETE FROM price WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('price deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9wcmljZS50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9wcmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ2xFLDRDQUE0QztBQUU1QyxNQUFNLEVBQUUsR0FBRyx3QkFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7QUFFL0IsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUV2QixNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsNEJBQTRCO0lBQzVCLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUNsQixTQUFTO2FBQ04sS0FBSyxDQUNKLDZGQUE2RjtZQUMzRixHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDckIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYztZQUN2QixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQ3RCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtZQUMxQixJQUFJLEVBRU4sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7YUFDdEQsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDbEIsT0FBTyxLQUFLO2FBQ1QsT0FBTyxDQUFDO1lBQ1AsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQzVCLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQzthQUNELElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMxQixPQUFPLEVBQUUsbUJBQW1CO2lCQUM3QixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxPQUFPLEtBQUs7cUJBQ1QsTUFBTSxDQUFDO29CQUNOLFlBQVksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQ25DLGNBQWMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWM7b0JBQ3ZDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWE7b0JBQ3JDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO2lCQUM5QyxDQUFDO3FCQUNELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3FCQUM5RCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUNoQixPQUFPLEtBQUs7YUFDVCxPQUFPLENBQUM7WUFDUCxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDNUIsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDO2FBQ0QsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sRUFBRSxrQkFBa0I7aUJBQzVCLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDbEIsU0FBUzthQUNOLEtBQUssQ0FDSiw4QkFBOEIsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQ3BELEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQ3JDLEVBQUUsQ0FDSDthQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2FBQ3hELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSwgUXVlcnlUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5jb25zdCBzZXF1ZWxpemVDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvc2VxdWVsaXplQ29uZmlnLmpzb24nKTtcbmltcG9ydCB7IGNyZWF0ZU1vZGVscyB9IGZyb20gJy4uL21vZGVscy10cyc7XG5pbXBvcnQgeyBQcmljZUZhY3RvcnkgfSBmcm9tICcuLi9tb2RlbHMtdHMvUHJpY2UnO1xuY29uc3QgZGIgPSBjcmVhdGVNb2RlbHMoc2VxdWVsaXplQ29uZmlnKTtcblxuY29uc3Qgc2VxdWVsaXplID0gZGIuc2VxdWVsaXplO1xuXG5jb25zdCBwcmljZSA9IGRiLlByaWNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy9pbnNlcnRpb24gb2YgYSBuZXcgY29tcGFueVxuICBpbnNlcnRQcmljZShyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIklOU0VSVCBJTlRPIHByaWNlIChwcmljZV9wZXJfa20sIHByaWNlX3Blcl9ob3VyLCBmb3JmYWl0X3ByaWNlLCB2ZWhpY3VsZV9mbGVldF9pZCkgVkFMVUVTKCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucHJpY2VfcGVyX2ttICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucHJpY2VfcGVyX2hvdXIgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5mb3JmYWl0X3ByaWNlICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkudmVoaWN1bGVfZmxlZXRfaWQgK1xuICAgICAgICAgIFwiJylcIixcblxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLklOU0VSVCB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzLnN0YXR1cygyMDApLnNlbmQoJ3ByaWNlIGFkZGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgdXBkYXRlUHJpY2UocmVxLCByZXMpIHtcbiAgICByZXR1cm4gcHJpY2VcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHByaWNlKSA9PiB7XG4gICAgICAgIGlmICghcHJpY2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJyBpbmV4aXN0YW50IHByaWNlJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcHJpY2VcbiAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICBwcmljZV9wZXJfa206IHJlcS5ib2R5LnByaWNlX3Blcl9rbSxcbiAgICAgICAgICAgICAgcHJpY2VfcGVyX2hvdXI6IHJlcS5ib2R5LnByaWNlX3Blcl9ob3VyLFxuICAgICAgICAgICAgICBmb3JmYWl0X3ByaWNlOiByZXEuYm9keS5mb3JmYWl0X3ByaWNlLFxuICAgICAgICAgICAgICB2ZWhpY3VsZV9mbGVldF9pZDogcmVxLmJvZHkudmVoaWN1bGVfZmxlZXRfaWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVzLnN0YXR1cygyMDApLnNlbmQoYHByaWNlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5YCkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgcmVhZFByaWNlKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIHByaWNlXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChwcmljZSkgPT4ge1xuICAgICAgICBpZiAoIXByaWNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IHByaWNlJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocHJpY2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgZGVsZXRlUHJpY2UocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJERUxFVEUgRlJPTSBwcmljZSBXSEVSRSBpZD0nXCIgKyByZXEucGFyYW1zLmlkICsgXCInXCIsXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuREVMRVRFIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgncHJpY2UgZGVsZXRlZCBzdWNjZXNzZnVsbHknKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG59O1xuIl19