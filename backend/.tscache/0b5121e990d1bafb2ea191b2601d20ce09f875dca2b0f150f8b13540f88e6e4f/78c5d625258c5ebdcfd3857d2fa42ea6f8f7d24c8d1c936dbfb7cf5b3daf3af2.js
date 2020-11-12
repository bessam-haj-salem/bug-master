"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverFactory = void 0;
exports.DriverFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        personal_ident: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        ref_drive_licence: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    };
    const Driver = sequelize.define('driver', attributes, {
        freezeTableName: true,
    });
    Driver.associate = (models) => {
        Driver.hasMany(models.TripDriver, {
            foreignKey: 'driver_id',
        });
    };
    Driver.associate = (models) => {
        Driver.hasMany(models.Rent_with_driver_usual_customer_Driver, {
            foreignKey: 'driver_id',
        });
    };
    Driver.associate = (models) => {
        Driver.hasMany(models.Rent_with_driver_usual_customer_Driver, {
            foreignKey: 'driver_id',
        });
    };
    return Driver;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvRHJpdmVyLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL21vZGVscy10cy9Ecml2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBaUJhLFFBQUEsYUFBYSxHQUFHLENBQzNCLFNBQThCLEVBQzlCLFNBQThCLEVBQ29CLEVBQUU7SUFDcEQsTUFBTSxVQUFVLEdBQXlDO1FBQ3ZELEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUNwQjtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELGlCQUFpQixFQUFFO1lBQ2pCLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtLQUNGLENBQUM7SUFFRixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUM3QixRQUFRLEVBQ1IsVUFBVSxFQUNWO1FBQ0UsZUFBZSxFQUFFLElBQUk7S0FDdEIsQ0FDRixDQUFDO0lBQ0YsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUNoQyxVQUFVLEVBQUUsV0FBVztTQUN4QixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsc0NBQXNDLEVBQUU7WUFDNUQsVUFBVSxFQUFFLFdBQVc7U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLHNDQUFzQyxFQUFFO1lBQzVELFVBQVUsRUFBRSxXQUFXO1NBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBTZXF1ZWxpemVBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdHlwaW5ncy9TZXF1ZWxpemVBdHRyaWJ1dGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBkcml2ZXJBdHRyaWJ1dGUge1xuICBpZDogbnVtYmVyO1xuICBmaXJzdF9uYW1lPzogc3RyaW5nO1xuICBsYXN0X25hbWU/OiBzdHJpbmc7XG4gIHBlcnNvbmFsX2lkZW50Pzogc3RyaW5nO1xuICByZWZfZHJpdmVfbGljZW5jZT86IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICB1cGRhdGVkQXQ6IERhdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIGRyaXZlckluc3RhbmNlXG4gIGV4dGVuZHMgU2VxdWVsaXplLkluc3RhbmNlPGRyaXZlckF0dHJpYnV0ZT4sXG4gICAgZHJpdmVyQXR0cmlidXRlIHt9XG5cbmV4cG9ydCBjb25zdCBEcml2ZXJGYWN0b3J5ID0gKFxuICBzZXF1ZWxpemU6IFNlcXVlbGl6ZS5TZXF1ZWxpemUsXG4gIERhdGFUeXBlczogU2VxdWVsaXplLkRhdGFUeXBlc1xuKTogU2VxdWVsaXplLk1vZGVsPGRyaXZlckluc3RhbmNlLCBkcml2ZXJBdHRyaWJ1dGU+ID0+IHtcbiAgY29uc3QgYXR0cmlidXRlczogU2VxdWVsaXplQXR0cmlidXRlczxkcml2ZXJBdHRyaWJ1dGU+ID0ge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgfSxcbiAgICBmaXJzdF9uYW1lOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgbGFzdF9uYW1lOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgcGVyc29uYWxfaWRlbnQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICByZWZfZHJpdmVfbGljZW5jZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgdXBkYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBEcml2ZXIgPSBzZXF1ZWxpemUuZGVmaW5lPGRyaXZlckluc3RhbmNlLCBkcml2ZXJBdHRyaWJ1dGU+KFxuICAgICdkcml2ZXInLFxuICAgIGF0dHJpYnV0ZXMsXG4gICAge1xuICAgICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxuICAgIH1cbiAgKTtcbiAgRHJpdmVyLmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBEcml2ZXIuaGFzTWFueShtb2RlbHMuVHJpcERyaXZlciwge1xuICAgICAgZm9yZWlnbktleTogJ2RyaXZlcl9pZCcsXG4gICAgfSk7XG4gIH07XG4gIERyaXZlci5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgRHJpdmVyLmhhc01hbnkobW9kZWxzLlJlbnRfd2l0aF9kcml2ZXJfdXN1YWxfY3VzdG9tZXJfRHJpdmVyLCB7XG4gICAgICBmb3JlaWduS2V5OiAnZHJpdmVyX2lkJyxcbiAgICB9KTtcbiAgfTtcbiAgRHJpdmVyLmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBEcml2ZXIuaGFzTWFueShtb2RlbHMuUmVudF93aXRoX2RyaXZlcl91c3VhbF9jdXN0b21lcl9Ecml2ZXIsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICdkcml2ZXJfaWQnLFxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gRHJpdmVyO1xufTtcbiJdfQ==