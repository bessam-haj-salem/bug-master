"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalGroupFactory = void 0;
exports.PersonalGroupFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        group_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        group_number: {
            type: DataTypes.INTEGER(11),
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
    const PersonalGroup = sequelize.define('personal_group', attributes, {
        freezeTableName: true,
    });
    PersonalGroup.associate = (models) => {
        PersonalGroup.hasMany(models.Passenger, {
            foreignKey: 'passenger_id',
        });
    };
    return PersonalGroup;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvUGVyc29uYWxHcm91cC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvUGVyc29uYWxHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFnQmEsUUFBQSxvQkFBb0IsR0FBRyxDQUNsQyxTQUE4QixFQUM5QixTQUE4QixFQUNrQyxFQUFFO0lBQ2xFLE1BQU0sVUFBVSxHQUFnRDtRQUM5RCxFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7U0FDcEI7UUFDRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxZQUFZLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7S0FDRixDQUFDO0lBRUYsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FHcEMsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFO1FBQzlCLGVBQWUsRUFBRSxJQUFJO0tBQ3RCLENBQUMsQ0FBQztJQUNILGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDdEMsVUFBVSxFQUFFLGNBQWM7U0FDM0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IFNlcXVlbGl6ZUF0dHJpYnV0ZXMgfSBmcm9tICcuLi90eXBpbmdzL1NlcXVlbGl6ZUF0dHJpYnV0ZXMnO1xuLy90YWJsZSBob3RlbFxuXG5leHBvcnQgaW50ZXJmYWNlIHBlcnNvbmFsR3JvdXBBdHRyaWJ1dGUge1xuICBpZDogbnVtYmVyO1xuICBncm91cF9uYW1lPzogc3RyaW5nO1xuICBncm91cF9udW1iZXI/OiBudW1iZXI7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSBwZXJzb25hbEdyb3VwSW5zdGFuY2VcbiAgZXh0ZW5kcyBTZXF1ZWxpemUuSW5zdGFuY2U8cGVyc29uYWxHcm91cEF0dHJpYnV0ZT4sXG4gICAgcGVyc29uYWxHcm91cEF0dHJpYnV0ZSB7fVxuXG5leHBvcnQgY29uc3QgUGVyc29uYWxHcm91cEZhY3RvcnkgPSAoXG4gIHNlcXVlbGl6ZTogU2VxdWVsaXplLlNlcXVlbGl6ZSxcbiAgRGF0YVR5cGVzOiBTZXF1ZWxpemUuRGF0YVR5cGVzXG4pOiBTZXF1ZWxpemUuTW9kZWw8cGVyc29uYWxHcm91cEluc3RhbmNlLCBwZXJzb25hbEdyb3VwQXR0cmlidXRlPiA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZXM6IFNlcXVlbGl6ZUF0dHJpYnV0ZXM8cGVyc29uYWxHcm91cEF0dHJpYnV0ZT4gPSB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICB9LFxuICAgIGdyb3VwX25hbWU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBncm91cF9udW1iZXI6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBjcmVhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIHVwZGF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgUGVyc29uYWxHcm91cCA9IHNlcXVlbGl6ZS5kZWZpbmU8XG4gICAgcGVyc29uYWxHcm91cEluc3RhbmNlLFxuICAgIHBlcnNvbmFsR3JvdXBBdHRyaWJ1dGVcbiAgPigncGVyc29uYWxfZ3JvdXAnLCBhdHRyaWJ1dGVzLCB7XG4gICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxuICB9KTtcbiAgUGVyc29uYWxHcm91cC5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgUGVyc29uYWxHcm91cC5oYXNNYW55KG1vZGVscy5QYXNzZW5nZXIsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICdwYXNzZW5nZXJfaWQnLFxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gUGVyc29uYWxHcm91cDtcbn07XG4iXX0=