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
const UsualCustomer_1 = require("./UsualCustomer");
const Passeport_1 = require("./Passeport");
const PersonalGroup_1 = require("./PersonalGroup");
const Price_1 = require("./Price");
const VehiculeFleet_1 = require("./VehiculeFleet");
const PassengerLuggage_1 = require("./PassengerLuggage");
const ProformaInvoice_1 = require("./ProformaInvoice");
const TechnicalInspection_1 = require("./TechnicalInspection");
const VehiculeInsurance_1 = require("./VehiculeInsurance");
const VehiculeMaintenance_1 = require("./VehiculeMaintenance");
const Tva_1 = require("./Tva");
const TripDriver_1 = require("./TripDriver");
const TripUsualCustomer_1 = require("./TripUsualCustomer");
const TripClientCompany_1 = require("./TripClientCompany");
const TradeMargin_1 = require("./TradeMargin");
const UsualCustomerClientCompany_1 = require("./UsualCustomerClientCompany");
const RentClientCompany_1 = require("./RentClientCompany");
const RentUsualCustomer_1 = require("./RentUsualCustomer");
const RentWithDriverClientCompany_1 = require("./RentWithDriverClientCompany");
const RentWithDriverUsualCustomer_1 = require("./RentWithDriverUsualCustomer");
const RentWithDriverClientCompanyDriver_1 = require("./RentWithDriverClientCompanyDriver");
const RentWithDriverUsualCustomerDriver_1 = require("./RentWithDriverUsualCustomerDriver");
const StopoverTrip_1 = require("./StopoverTrip");
const StopoverUsualCustomer_1 = require("./StopoverUsualCustomer");
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
        UsualCustomer: UsualCustomer_1.UsualCustomerFactory(sequelize, sequelize_1.Sequelize),
        Passeport: Passeport_1.PasseportFactory(sequelize, sequelize_1.Sequelize),
        PersonalGroup: PersonalGroup_1.PersonalGroupFactory(sequelize, sequelize_1.Sequelize),
        Price: Price_1.PriceFactory(sequelize, sequelize_1.Sequelize),
        VehiculeFleet: VehiculeFleet_1.VehiculeFleetFactory(sequelize, sequelize_1.Sequelize),
        PassengerLuggage: PassengerLuggage_1.PassengerLuggageFactory(sequelize, sequelize_1.Sequelize),
        ProformaInvoice: ProformaInvoice_1.ProformaInvoiceFactory(sequelize, sequelize_1.Sequelize),
        TechnicalInspection: TechnicalInspection_1.TechnicalInspectionFactory(sequelize, sequelize_1.Sequelize),
        VehiculeInsurance: VehiculeInsurance_1.VehiculeInsuranceFactory(sequelize, sequelize_1.Sequelize),
        VehiculeMaintenance: VehiculeMaintenance_1.VehiculeMaintenanceFactory(sequelize, sequelize_1.Sequelize),
        Tva: Tva_1.TvaFactory(sequelize, sequelize_1.Sequelize),
        TripDriver: TripDriver_1.TripDriverFactory(sequelize, sequelize_1.Sequelize),
        TripUsualCustomer: TripUsualCustomer_1.TripUsualCustomerFactory(sequelize, sequelize_1.Sequelize),
        TripClientCompany: TripClientCompany_1.TripClientCompanyFactory(sequelize, sequelize_1.Sequelize),
        TradeMargin: TradeMargin_1.TradeMarginFactory(sequelize, sequelize_1.Sequelize),
        UsualCustomerClientCompany: UsualCustomerClientCompany_1.UsualCustomerClientCompanyFactory(sequelize, sequelize_1.Sequelize),
        RentClientCompany: RentClientCompany_1.RentClientCompanyFactory(sequelize, sequelize_1.Sequelize),
        RentUsualCustomer: RentUsualCustomer_1.RentUsualCustomerFactory(sequelize, sequelize_1.Sequelize),
        RentWithDriverClientCompany: RentWithDriverClientCompany_1.RentWithDriverClientCompanyFactory(sequelize, sequelize_1.Sequelize),
        RentWithDriverUsualCustomer: RentWithDriverUsualCustomer_1.RentWithDriverUsualCustomerFactory(sequelize, sequelize_1.Sequelize),
        RentWithDriverClientCompanyDriver: RentWithDriverClientCompanyDriver_1.RentWithDriverClientCompanyDriverFactory(sequelize, sequelize_1.Sequelize),
        RentWithDriverUsualCustomerDriver: RentWithDriverUsualCustomerDriver_1.RentWithDriverUsualCustomerDriverFactory(sequelize, sequelize_1.Sequelize),
        StopoverTrip: StopoverTrip_1.StopoverTripFactory(sequelize, sequelize_1.Sequelize),
        StopoverUsualCustomer: StopoverUsualCustomer_1.StopoverUsualCustomerFactory(sequelize, sequelize_1.Sequelize),
    };
    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
    return db;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvbW9kZWxzLXRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzQztBQUl0QyxpQ0FBcUM7QUFDckMsbUNBQXVDO0FBQ3ZDLG1DQUF1QztBQUV2Qyx5Q0FBNkM7QUFDN0MseUNBQTZDO0FBQzdDLGlDQUFxQztBQUVyQywwQ0FBMEM7QUFDMUMsbURBQXVEO0FBQ3ZELGlDQUFxQztBQUNyQyxxQ0FBeUM7QUFDekMsbURBQXVEO0FBQ3ZELDJDQUErQztBQUMvQyxtREFBdUQ7QUFDdkQsbUNBQXVDO0FBQ3ZDLG1EQUF1RDtBQUN2RCx5REFBNkQ7QUFDN0QsdURBQTJEO0FBQzNELCtEQUFtRTtBQUNuRSwyREFBK0Q7QUFDL0QsK0RBQW1FO0FBQ25FLCtCQUFtQztBQUNuQyw2Q0FBaUQ7QUFDakQsMkRBQStEO0FBQy9ELDJEQUErRDtBQUMvRCwrQ0FBbUQ7QUFDbkQsNkVBQWlGO0FBQ2pGLDJEQUErRDtBQUMvRCwyREFBK0Q7QUFDL0QsK0VBQW1GO0FBQ25GLCtFQUFtRjtBQUNuRiwyRkFBK0Y7QUFDL0YsMkZBQStGO0FBQy9GLGlEQUFxRDtBQUNyRCxtRUFBdUU7QUFDdkUsOERBQThEO0FBQzlELFlBQVk7QUFFWixTQUFTO0FBQ1QsU0FBUztBQUNULGlCQUFpQjtBQUVKLFFBQUEsWUFBWSxHQUFHLENBQUMsZUFBb0IsRUFBZSxFQUFFO0lBQ2hFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxlQUFlLENBQUM7SUFDakUsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXRFLE1BQU0sRUFBRSxHQUFnQjtRQUN0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Q0FBQyxTQUFTLEVBQUU7WUFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IHsgRGJJbnRlcmZhY2UgfSBmcm9tICcuLi90eXBpbmdzL0RiSW50ZXJmYWNlJztcblxuaW1wb3J0IHsgQWdlbmNlRmFjdG9yeSB9IGZyb20gJy4vQWdlbmNlJztcbmltcG9ydCB7IFRlc3RGYWN0b3J5IH0gZnJvbSAnLi9UZXN0JztcbmltcG9ydCB7IEhvdGVsRmFjdG9yeSB9IGZyb20gJy4vSG90ZWwnO1xuaW1wb3J0IHsgSW1hZ2VGYWN0b3J5IH0gZnJvbSAnLi9JbWFnZSc7XG5cbmltcG9ydCB7IEFlcm9wb3J0RmFjdG9yeSB9IGZyb20gJy4vQWVyb3BvcnQnO1xuaW1wb3J0IHsgVmVoaWN1bGVGYWN0b3J5IH0gZnJvbSAnLi9WZWhpY3VsZSc7XG5pbXBvcnQgeyBQcml4RmFjdG9yeSB9IGZyb20gJy4vUHJpeCc7XG5cbi8vKioqKioqKioqKioqYXBpIHJhZmFoaWEqKioqKioqKioqKioqKioqKlxuaW1wb3J0IHsgQ2xpZW50Q29tcGFueUZhY3RvcnkgfSBmcm9tICcuL0NsaWVudENvbXBhbnknO1xuaW1wb3J0IHsgVHJpcEZhY3RvcnkgfSBmcm9tICcuL1RyaXAnO1xuaW1wb3J0IHsgRHJpdmVyRmFjdG9yeSB9IGZyb20gJy4vRHJpdmVyJztcbmltcG9ydCB7IFVzdWFsQ3VzdG9tZXJGYWN0b3J5IH0gZnJvbSAnLi9Vc3VhbEN1c3RvbWVyJztcbmltcG9ydCB7IFBhc3NlcG9ydEZhY3RvcnkgfSBmcm9tICcuL1Bhc3NlcG9ydCc7XG5pbXBvcnQgeyBQZXJzb25hbEdyb3VwRmFjdG9yeSB9IGZyb20gJy4vUGVyc29uYWxHcm91cCc7XG5pbXBvcnQgeyBQcmljZUZhY3RvcnkgfSBmcm9tICcuL1ByaWNlJztcbmltcG9ydCB7IFZlaGljdWxlRmxlZXRGYWN0b3J5IH0gZnJvbSAnLi9WZWhpY3VsZUZsZWV0JztcbmltcG9ydCB7IFBhc3Nlbmdlckx1Z2dhZ2VGYWN0b3J5IH0gZnJvbSAnLi9QYXNzZW5nZXJMdWdnYWdlJztcbmltcG9ydCB7IFByb2Zvcm1hSW52b2ljZUZhY3RvcnkgfSBmcm9tICcuL1Byb2Zvcm1hSW52b2ljZSc7XG5pbXBvcnQgeyBUZWNobmljYWxJbnNwZWN0aW9uRmFjdG9yeSB9IGZyb20gJy4vVGVjaG5pY2FsSW5zcGVjdGlvbic7XG5pbXBvcnQgeyBWZWhpY3VsZUluc3VyYW5jZUZhY3RvcnkgfSBmcm9tICcuL1ZlaGljdWxlSW5zdXJhbmNlJztcbmltcG9ydCB7IFZlaGljdWxlTWFpbnRlbmFuY2VGYWN0b3J5IH0gZnJvbSAnLi9WZWhpY3VsZU1haW50ZW5hbmNlJztcbmltcG9ydCB7IFR2YUZhY3RvcnkgfSBmcm9tICcuL1R2YSc7XG5pbXBvcnQgeyBUcmlwRHJpdmVyRmFjdG9yeSB9IGZyb20gJy4vVHJpcERyaXZlcic7XG5pbXBvcnQgeyBUcmlwVXN1YWxDdXN0b21lckZhY3RvcnkgfSBmcm9tICcuL1RyaXBVc3VhbEN1c3RvbWVyJztcbmltcG9ydCB7IFRyaXBDbGllbnRDb21wYW55RmFjdG9yeSB9IGZyb20gJy4vVHJpcENsaWVudENvbXBhbnknO1xuaW1wb3J0IHsgVHJhZGVNYXJnaW5GYWN0b3J5IH0gZnJvbSAnLi9UcmFkZU1hcmdpbic7XG5pbXBvcnQgeyBVc3VhbEN1c3RvbWVyQ2xpZW50Q29tcGFueUZhY3RvcnkgfSBmcm9tICcuL1VzdWFsQ3VzdG9tZXJDbGllbnRDb21wYW55JztcbmltcG9ydCB7IFJlbnRDbGllbnRDb21wYW55RmFjdG9yeSB9IGZyb20gJy4vUmVudENsaWVudENvbXBhbnknO1xuaW1wb3J0IHsgUmVudFVzdWFsQ3VzdG9tZXJGYWN0b3J5IH0gZnJvbSAnLi9SZW50VXN1YWxDdXN0b21lcic7XG5pbXBvcnQgeyBSZW50V2l0aERyaXZlckNsaWVudENvbXBhbnlGYWN0b3J5IH0gZnJvbSAnLi9SZW50V2l0aERyaXZlckNsaWVudENvbXBhbnknO1xuaW1wb3J0IHsgUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRmFjdG9yeSB9IGZyb20gJy4vUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyJztcbmltcG9ydCB7IFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueURyaXZlckZhY3RvcnkgfSBmcm9tICcuL1JlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueURyaXZlcic7XG5pbXBvcnQgeyBSZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXJGYWN0b3J5IH0gZnJvbSAnLi9SZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXInO1xuaW1wb3J0IHsgU3RvcG92ZXJUcmlwRmFjdG9yeSB9IGZyb20gJy4vU3RvcG92ZXJUcmlwJztcbmltcG9ydCB7IFN0b3BvdmVyVXN1YWxDdXN0b21lckZhY3RvcnkgfSBmcm9tICcuL1N0b3BvdmVyVXN1YWxDdXN0b21lcic7XG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLy9zYy0yNi0yMDIwXG5cbi8vbWFwcGFnZVxuLy9tYXBwYWdlXG4vL3Njc2MtMjYtMDMtMjAyMFxuXG5leHBvcnQgY29uc3QgY3JlYXRlTW9kZWxzID0gKHNlcXVlbGl6ZUNvbmZpZzogYW55KTogRGJJbnRlcmZhY2UgPT4ge1xuICBjb25zdCB7IGRhdGFiYXNlLCB1c2VybmFtZSwgcGFzc3dvcmQsIHBhcmFtcyB9ID0gc2VxdWVsaXplQ29uZmlnO1xuICBjb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKGRhdGFiYXNlLCB1c2VybmFtZSwgcGFzc3dvcmQsIHBhcmFtcyk7XG5cbiAgY29uc3QgZGI6IERiSW50ZXJmYWNlID0ge1xuICAgIHNlcXVlbGl6ZSxcbiAgICBTZXF1ZWxpemUsXG5cbiAgICAvL0FnZW5jZTogQWdlbmNlRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVGVzdDogVGVzdEZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIEhvdGVsOiBIb3RlbEZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIEltYWdlOiBJbWFnZUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuXG4gICAgQWVyb3BvcnQ6IEFlcm9wb3J0RmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVmVoaWN1bGU6IFZlaGljdWxlRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgUHJpeDogUHJpeEZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuXG4gICAgLy8qKioqKioqKioqKioqKiphcGkgcmFmYWhpYSoqKioqKioqKioqKioqKiogKi9cbiAgICBDbGllbnRDb21wYW55OiBDbGllbnRDb21wYW55RmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVHJpcDogVHJpcEZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIERyaXZlcjogRHJpdmVyRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVXN1YWxDdXN0b21lcjogVXN1YWxDdXN0b21lckZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFBhc3NlcG9ydDogUGFzc2Vwb3J0RmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgUGVyc29uYWxHcm91cDogUGVyc29uYWxHcm91cEZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFByaWNlOiBQcmljZUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFZlaGljdWxlRmxlZXQ6IFZlaGljdWxlRmxlZXRGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBQYXNzZW5nZXJMdWdnYWdlOiBQYXNzZW5nZXJMdWdnYWdlRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgUHJvZm9ybWFJbnZvaWNlOiBQcm9mb3JtYUludm9pY2VGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBUZWNobmljYWxJbnNwZWN0aW9uOiBUZWNobmljYWxJbnNwZWN0aW9uRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVmVoaWN1bGVJbnN1cmFuY2U6IFZlaGljdWxlSW5zdXJhbmNlRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVmVoaWN1bGVNYWludGVuYW5jZTogVmVoaWN1bGVNYWludGVuYW5jZUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFR2YTogVHZhRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVHJpcERyaXZlcjogVHJpcERyaXZlckZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFRyaXBVc3VhbEN1c3RvbWVyOiBUcmlwVXN1YWxDdXN0b21lckZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFRyaXBDbGllbnRDb21wYW55OiBUcmlwQ2xpZW50Q29tcGFueUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFRyYWRlTWFyZ2luOiBUcmFkZU1hcmdpbkZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFVzdWFsQ3VzdG9tZXJDbGllbnRDb21wYW55OiBVc3VhbEN1c3RvbWVyQ2xpZW50Q29tcGFueUZhY3RvcnkoXG4gICAgICBzZXF1ZWxpemUsXG4gICAgICBTZXF1ZWxpemVcbiAgICApLFxuICAgIFJlbnRDbGllbnRDb21wYW55OiBSZW50Q2xpZW50Q29tcGFueUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFJlbnRVc3VhbEN1c3RvbWVyOiBSZW50VXN1YWxDdXN0b21lckZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueTogUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55RmFjdG9yeShcbiAgICAgIHNlcXVlbGl6ZSxcbiAgICAgIFNlcXVlbGl6ZVxuICAgICksXG4gICAgUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyOiBSZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJGYWN0b3J5KFxuICAgICAgc2VxdWVsaXplLFxuICAgICAgU2VxdWVsaXplXG4gICAgKSxcbiAgICBSZW50V2l0aERyaXZlckNsaWVudENvbXBhbnlEcml2ZXI6IFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueURyaXZlckZhY3RvcnkoXG4gICAgICBzZXF1ZWxpemUsXG4gICAgICBTZXF1ZWxpemVcbiAgICApLFxuICAgIFJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckRyaXZlcjogUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyRmFjdG9yeShcbiAgICAgIHNlcXVlbGl6ZSxcbiAgICAgIFNlcXVlbGl6ZVxuICAgICksXG4gICAgU3RvcG92ZXJUcmlwOiBTdG9wb3ZlclRyaXBGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBTdG9wb3ZlclVzdWFsQ3VzdG9tZXI6IFN0b3BvdmVyVXN1YWxDdXN0b21lckZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4gIH07XG5cbiAgT2JqZWN0LmtleXMoZGIpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgIGlmIChkYlttb2RlbE5hbWVdLmFzc29jaWF0ZSkge1xuICAgICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRiO1xufTtcbiJdfQ==