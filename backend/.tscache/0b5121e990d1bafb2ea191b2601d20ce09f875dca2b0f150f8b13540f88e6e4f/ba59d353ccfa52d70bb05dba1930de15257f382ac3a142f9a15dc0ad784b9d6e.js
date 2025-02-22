"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvaFactory = void 0;
exports.TvaFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        taux: {
            type: DataTypes.DECIMAL(10, 3),
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
    const Tva = sequelize.define('tva', attributes, {
        freezeTableName: true,
    });
    Tva.associate = (models) => {
        Tva.hasMany(models.VehiculeFleet, {
            foreignKey: 'tva_id',
        });
    };
    return Tva;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVHZhLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL21vZGVscy10cy9UdmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBY2EsUUFBQSxVQUFVLEdBQUcsQ0FDeEIsU0FBOEIsRUFDOUIsU0FBOEIsRUFDYyxFQUFFO0lBQzlDLE1BQU0sVUFBVSxHQUFzQztRQUNwRCxFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7U0FDcEI7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQTRCLEtBQUssRUFBRSxVQUFVLEVBQUU7UUFDekUsZUFBZSxFQUFFLElBQUk7S0FDdEIsQ0FBQyxDQUFDO0lBQ0gsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3pCLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUNoQyxVQUFVLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBTZXF1ZWxpemVBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdHlwaW5ncy9TZXF1ZWxpemVBdHRyaWJ1dGVzJztcblxuZXhwb3J0IGludGVyZmFjZSB0dmFBdHRyaWJ1dGUge1xuICBpZDogbnVtYmVyO1xuICB0YXV4OiBudW1iZXI7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSB0dmFJbnN0YW5jZVxuICBleHRlbmRzIFNlcXVlbGl6ZS5JbnN0YW5jZTx0dmFBdHRyaWJ1dGU+LFxuICAgIHR2YUF0dHJpYnV0ZSB7fVxuXG5leHBvcnQgY29uc3QgVHZhRmFjdG9yeSA9IChcbiAgc2VxdWVsaXplOiBTZXF1ZWxpemUuU2VxdWVsaXplLFxuICBEYXRhVHlwZXM6IFNlcXVlbGl6ZS5EYXRhVHlwZXNcbik6IFNlcXVlbGl6ZS5Nb2RlbDx0dmFJbnN0YW5jZSwgdHZhQXR0cmlidXRlPiA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZXM6IFNlcXVlbGl6ZUF0dHJpYnV0ZXM8dHZhQXR0cmlidXRlPiA9IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIoMTEpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgIH0sXG4gICAgdGF1eDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRFQ0lNQUwoMTAsIDMpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgdXBkYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBUdmEgPSBzZXF1ZWxpemUuZGVmaW5lPHR2YUluc3RhbmNlLCB0dmFBdHRyaWJ1dGU+KCd0dmEnLCBhdHRyaWJ1dGVzLCB7XG4gICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxuICB9KTtcbiAgVHZhLmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBUdmEuaGFzTWFueShtb2RlbHMuVmVoaWN1bGVGbGVldCwge1xuICAgICAgZm9yZWlnbktleTogJ3R2YV9pZCcsXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBUdmE7XG59O1xuIl19