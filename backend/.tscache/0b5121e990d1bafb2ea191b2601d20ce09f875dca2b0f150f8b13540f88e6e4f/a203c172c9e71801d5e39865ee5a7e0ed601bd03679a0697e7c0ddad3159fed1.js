"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModels = void 0;
const sequelize_1 = require("sequelize");
const Test_1 = require("./Test");
const Hotel_1 = require("./Hotel");
const Image_1 = require("./Image");
const Aeroport_1 = require("./Aeroport");
const Vehicule_1 = require("./Vehicule");
const Prix_1 = require("./Prix");
//************api rafahia*****************
const ClientCompany_1 = require("./ClientCompany");
const Trip_1 = require("./Trip");
const Driver_1 = require("./Driver");
const Passenger_1 = require("./Passenger");
const Passeport_1 = require("./Passeport");
const PersonalGroup_1 = require("./PersonalGroup");
const Price_1 = require("./Price");
const VehiculeFleet_1 = require("./VehiculeFleet");
const PassengerLuggage_1 = require("./PassengerLuggage");
const ProformaInvoice_1 = require("./ProformaInvoice");
const Stopover_1 = require("./Stopover");
const TechnicalInspection_1 = require("./TechnicalInspection");
const VehiculeInsurance_1 = require("./VehiculeInsurance");
const VehiculeMaintenance_1 = require("./VehiculeMaintenance");
const Tva_1 = require("./Tva");
const TripDriver_1 = require("./TripDriver");
const TripClientCompany_1 = require("./TripClientCompany");
const TradeMargin_1 = require("./TradeMargin");
const Rent_1 = require("./Rent");
//********************************************************* */
//sc-26-2020
//mappage
//mappage
//scsc-26-03-2020
exports.createModels = (sequelizeConfig) => {
    const { database, username, password, params } = sequelizeConfig;
    const sequelize = new sequelize_1.Sequelize(database, username, password, params);
    const db = {
        sequelize,
        Sequelize: sequelize_1.Sequelize,
        //Agence: AgenceFactory(sequelize, Sequelize),
        Test: Test_1.TestFactory(sequelize, sequelize_1.Sequelize),
        Hotel: Hotel_1.HotelFactory(sequelize, sequelize_1.Sequelize),
        Image: Image_1.ImageFactory(sequelize, sequelize_1.Sequelize),
        Aeroport: Aeroport_1.AeroportFactory(sequelize, sequelize_1.Sequelize),
        Vehicule: Vehicule_1.VehiculeFactory(sequelize, sequelize_1.Sequelize),
        Prix: Prix_1.PrixFactory(sequelize, sequelize_1.Sequelize),
        //***************api rafahia**************** */
        ClientCompany: ClientCompany_1.ClientCompanyFactory(sequelize, sequelize_1.Sequelize),
        Trip: Trip_1.TripFactory(sequelize, sequelize_1.Sequelize),
        Driver: Driver_1.DriverFactory(sequelize, sequelize_1.Sequelize),
        Passenger: Passenger_1.PassengerFactory(sequelize, sequelize_1.Sequelize),
        Passeport: Passeport_1.PasseportFactory(sequelize, sequelize_1.Sequelize),
        PersonalGroup: PersonalGroup_1.PersonalGroupFactory(sequelize, sequelize_1.Sequelize),
        Price: Price_1.PriceFactory(sequelize, sequelize_1.Sequelize),
        VehiculeFleet: VehiculeFleet_1.VehiculeFleetFactory(sequelize, sequelize_1.Sequelize),
        PassengerLuggage: PassengerLuggage_1.PassengerLuggageFactory(sequelize, sequelize_1.Sequelize),
        ProformaInvoice: ProformaInvoice_1.ProformaInvoiceFactory(sequelize, sequelize_1.Sequelize),
        Stopover: Stopover_1.StopoverFactory(sequelize, sequelize_1.Sequelize),
        TechnicalInspection: TechnicalInspection_1.TechnicalInspectionFactory(sequelize, sequelize_1.Sequelize),
        VehiculeInsurance: VehiculeInsurance_1.VehiculeInsuranceFactory(sequelize, sequelize_1.Sequelize),
        VehiculeMaintenance: VehiculeMaintenance_1.VehiculeMaintenanceFactory(sequelize, sequelize_1.Sequelize),
        Tva: Tva_1.TvaFactory(sequelize, sequelize_1.Sequelize),
        TripDriver: TripDriver_1.TripDriverFactory(sequelize, sequelize_1.Sequelize),
        TripPassenger: TripDriver_1.TripDriverFactory(sequelize, sequelize_1.Sequelize),
        TripClientCompany: TripClientCompany_1.TripClientCompanyFactory(sequelize, sequelize_1.Sequelize),
        TradeMargin: TradeMargin_1.TradeMarginFactory(sequelize, sequelize_1.Sequelize),
        Rent: Rent_1.RentFactory(sequelize, sequelize_1.Sequelize),
    };
    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
    return db;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvbW9kZWxzLXRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzQztBQUl0QyxpQ0FBcUM7QUFDckMsbUNBQXVDO0FBQ3ZDLG1DQUF1QztBQUV2Qyx5Q0FBNkM7QUFDN0MseUNBQTZDO0FBQzdDLGlDQUFxQztBQUVyQywwQ0FBMEM7QUFDMUMsbURBQXVEO0FBQ3ZELGlDQUFxQztBQUNyQyxxQ0FBeUM7QUFDekMsMkNBQStDO0FBQy9DLDJDQUErQztBQUMvQyxtREFBdUQ7QUFDdkQsbUNBQXVDO0FBQ3ZDLG1EQUF1RDtBQUN2RCx5REFBNkQ7QUFDN0QsdURBQTJEO0FBQzNELHlDQUE2QztBQUM3QywrREFBbUU7QUFDbkUsMkRBQStEO0FBQy9ELCtEQUFtRTtBQUNuRSwrQkFBbUM7QUFDbkMsNkNBQWlEO0FBRWpELDJEQUErRDtBQUMvRCwrQ0FBbUQ7QUFDbkQsaUNBQXFDO0FBQ3JDLDhEQUE4RDtBQUM5RCxZQUFZO0FBRVosU0FBUztBQUNULFNBQVM7QUFDVCxpQkFBaUI7QUFFSixRQUFBLFlBQVksR0FBRyxDQUFDLGVBQW9CLEVBQWUsRUFBRTtJQUNoRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsZUFBZSxDQUFDO0lBQ2pFLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUV0RSxNQUFNLEVBQUUsR0FBZ0I7UUFDdEIsU0FBUztRQUNULFNBQVMsRUFBVCxxQkFBUztRQUVULDhDQUE4QztRQUM5QyxJQUFJLEVBQUUsa0JBQVcsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUN2QyxLQUFLLEVBQUUsb0JBQVksQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUN6QyxLQUFLLEVBQUUsb0JBQVksQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUV6QyxRQUFRLEVBQUUsMEJBQWUsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUMvQyxRQUFRLEVBQUUsMEJBQWUsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUMvQyxJQUFJLEVBQUUsa0JBQVcsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUV2QywrQ0FBK0M7UUFDL0MsYUFBYSxFQUFFLG9DQUFvQixDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ3pELElBQUksRUFBRSxrQkFBVyxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ3ZDLE1BQU0sRUFBRSxzQkFBYSxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQzNDLFNBQVMsRUFBRSw0QkFBZ0IsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUNqRCxTQUFTLEVBQUUsNEJBQWdCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDakQsYUFBYSxFQUFFLG9DQUFvQixDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ3pELEtBQUssRUFBRSxvQkFBWSxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ3pDLGFBQWEsRUFBRSxvQ0FBb0IsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUN6RCxnQkFBZ0IsRUFBRSwwQ0FBdUIsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUMvRCxlQUFlLEVBQUUsd0NBQXNCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDN0QsUUFBUSxFQUFFLDBCQUFlLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDL0MsbUJBQW1CLEVBQUUsZ0RBQTBCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDckUsaUJBQWlCLEVBQUUsNENBQXdCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDakUsbUJBQW1CLEVBQUUsZ0RBQTBCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDckUsR0FBRyxFQUFFLGdCQUFVLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDckMsVUFBVSxFQUFFLDhCQUFpQixDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ25ELGFBQWEsRUFBRSw4QkFBaUIsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUN0RCxpQkFBaUIsRUFBRSw0Q0FBd0IsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUNqRSxXQUFXLEVBQUUsZ0NBQWtCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDckQsSUFBSSxFQUFFLGtCQUFXLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7S0FFeEMsQ0FBQztJQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7UUFDcEMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQzNCLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCB7IERiSW50ZXJmYWNlIH0gZnJvbSAnLi4vdHlwaW5ncy9EYkludGVyZmFjZSc7XG5cbmltcG9ydCB7IEFnZW5jZUZhY3RvcnkgfSBmcm9tICcuL0FnZW5jZSc7XG5pbXBvcnQgeyBUZXN0RmFjdG9yeSB9IGZyb20gJy4vVGVzdCc7XG5pbXBvcnQgeyBIb3RlbEZhY3RvcnkgfSBmcm9tICcuL0hvdGVsJztcbmltcG9ydCB7IEltYWdlRmFjdG9yeSB9IGZyb20gJy4vSW1hZ2UnO1xuXG5pbXBvcnQgeyBBZXJvcG9ydEZhY3RvcnkgfSBmcm9tICcuL0Flcm9wb3J0JztcbmltcG9ydCB7IFZlaGljdWxlRmFjdG9yeSB9IGZyb20gJy4vVmVoaWN1bGUnO1xuaW1wb3J0IHsgUHJpeEZhY3RvcnkgfSBmcm9tICcuL1ByaXgnO1xuXG4vLyoqKioqKioqKioqKmFwaSByYWZhaGlhKioqKioqKioqKioqKioqKipcbmltcG9ydCB7IENsaWVudENvbXBhbnlGYWN0b3J5IH0gZnJvbSAnLi9DbGllbnRDb21wYW55JztcbmltcG9ydCB7IFRyaXBGYWN0b3J5IH0gZnJvbSAnLi9UcmlwJztcbmltcG9ydCB7IERyaXZlckZhY3RvcnkgfSBmcm9tICcuL0RyaXZlcic7XG5pbXBvcnQgeyBQYXNzZW5nZXJGYWN0b3J5IH0gZnJvbSAnLi9QYXNzZW5nZXInO1xuaW1wb3J0IHsgUGFzc2Vwb3J0RmFjdG9yeSB9IGZyb20gJy4vUGFzc2Vwb3J0JztcbmltcG9ydCB7IFBlcnNvbmFsR3JvdXBGYWN0b3J5IH0gZnJvbSAnLi9QZXJzb25hbEdyb3VwJztcbmltcG9ydCB7IFByaWNlRmFjdG9yeSB9IGZyb20gJy4vUHJpY2UnO1xuaW1wb3J0IHsgVmVoaWN1bGVGbGVldEZhY3RvcnkgfSBmcm9tICcuL1ZlaGljdWxlRmxlZXQnO1xuaW1wb3J0IHsgUGFzc2VuZ2VyTHVnZ2FnZUZhY3RvcnkgfSBmcm9tICcuL1Bhc3Nlbmdlckx1Z2dhZ2UnO1xuaW1wb3J0IHsgUHJvZm9ybWFJbnZvaWNlRmFjdG9yeSB9IGZyb20gJy4vUHJvZm9ybWFJbnZvaWNlJztcbmltcG9ydCB7IFN0b3BvdmVyRmFjdG9yeSB9IGZyb20gJy4vU3RvcG92ZXInO1xuaW1wb3J0IHsgVGVjaG5pY2FsSW5zcGVjdGlvbkZhY3RvcnkgfSBmcm9tICcuL1RlY2huaWNhbEluc3BlY3Rpb24nO1xuaW1wb3J0IHsgVmVoaWN1bGVJbnN1cmFuY2VGYWN0b3J5IH0gZnJvbSAnLi9WZWhpY3VsZUluc3VyYW5jZSc7XG5pbXBvcnQgeyBWZWhpY3VsZU1haW50ZW5hbmNlRmFjdG9yeSB9IGZyb20gJy4vVmVoaWN1bGVNYWludGVuYW5jZSc7XG5pbXBvcnQgeyBUdmFGYWN0b3J5IH0gZnJvbSAnLi9UdmEnO1xuaW1wb3J0IHsgVHJpcERyaXZlckZhY3RvcnkgfSBmcm9tICcuL1RyaXBEcml2ZXInO1xuaW1wb3J0IHsgVHJpcFBhc3NlbmdlckZhY3RvcnkgfSBmcm9tICcuL1RyaXBQYXNzZW5nZXInO1xuaW1wb3J0IHsgVHJpcENsaWVudENvbXBhbnlGYWN0b3J5IH0gZnJvbSAnLi9UcmlwQ2xpZW50Q29tcGFueSc7XG5pbXBvcnQgeyBUcmFkZU1hcmdpbkZhY3RvcnkgfSBmcm9tICcuL1RyYWRlTWFyZ2luJztcbmltcG9ydCB7IFJlbnRGYWN0b3J5IH0gZnJvbSAnLi9SZW50Jztcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vL3NjLTI2LTIwMjBcblxuLy9tYXBwYWdlXG4vL21hcHBhZ2Vcbi8vc2NzYy0yNi0wMy0yMDIwXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNb2RlbHMgPSAoc2VxdWVsaXplQ29uZmlnOiBhbnkpOiBEYkludGVyZmFjZSA9PiB7XG4gIGNvbnN0IHsgZGF0YWJhc2UsIHVzZXJuYW1lLCBwYXNzd29yZCwgcGFyYW1zIH0gPSBzZXF1ZWxpemVDb25maWc7XG4gIGNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoZGF0YWJhc2UsIHVzZXJuYW1lLCBwYXNzd29yZCwgcGFyYW1zKTtcblxuICBjb25zdCBkYjogRGJJbnRlcmZhY2UgPSB7XG4gICAgc2VxdWVsaXplLFxuICAgIFNlcXVlbGl6ZSxcblxuICAgIC8vQWdlbmNlOiBBZ2VuY2VGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBUZXN0OiBUZXN0RmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgSG90ZWw6IEhvdGVsRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgSW1hZ2U6IEltYWdlRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG5cbiAgICBBZXJvcG9ydDogQWVyb3BvcnRGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBWZWhpY3VsZTogVmVoaWN1bGVGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBQcml4OiBQcml4RmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG5cbiAgICAvLyoqKioqKioqKioqKioqKmFwaSByYWZhaGlhKioqKioqKioqKioqKioqKiAqL1xuICAgIENsaWVudENvbXBhbnk6IENsaWVudENvbXBhbnlGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBUcmlwOiBUcmlwRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgRHJpdmVyOiBEcml2ZXJGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBQYXNzZW5nZXI6IFBhc3NlbmdlckZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFBhc3NlcG9ydDogUGFzc2Vwb3J0RmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgUGVyc29uYWxHcm91cDogUGVyc29uYWxHcm91cEZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFByaWNlOiBQcmljZUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFZlaGljdWxlRmxlZXQ6IFZlaGljdWxlRmxlZXRGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBQYXNzZW5nZXJMdWdnYWdlOiBQYXNzZW5nZXJMdWdnYWdlRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgUHJvZm9ybWFJbnZvaWNlOiBQcm9mb3JtYUludm9pY2VGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBTdG9wb3ZlcjogU3RvcG92ZXJGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBUZWNobmljYWxJbnNwZWN0aW9uOiBUZWNobmljYWxJbnNwZWN0aW9uRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVmVoaWN1bGVJbnN1cmFuY2U6IFZlaGljdWxlSW5zdXJhbmNlRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVmVoaWN1bGVNYWludGVuYW5jZTogVmVoaWN1bGVNYWludGVuYW5jZUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFR2YTogVHZhRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVHJpcERyaXZlcjogVHJpcERyaXZlckZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFRyaXBQYXNzZW5nZXI6IFRyaXBEcml2ZXJGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBUcmlwQ2xpZW50Q29tcGFueTogVHJpcENsaWVudENvbXBhbnlGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBUcmFkZU1hcmdpbjogVHJhZGVNYXJnaW5GYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBSZW50OiBSZW50RmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4gIH07XG5cbiAgT2JqZWN0LmtleXMoZGIpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgIGlmIChkYlttb2RlbE5hbWVdLmFzc29jaWF0ZSkge1xuICAgICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRiO1xufTtcbiJdfQ==