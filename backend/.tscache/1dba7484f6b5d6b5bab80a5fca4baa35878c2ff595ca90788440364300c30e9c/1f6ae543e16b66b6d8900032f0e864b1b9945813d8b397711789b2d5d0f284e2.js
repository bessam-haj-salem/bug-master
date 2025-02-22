"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersProjectFactory = void 0;
exports.MembersProjectFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        project_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        members_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    };
    const MembersProject = sequelize.define('members_project', attributes, {
        freezeTableName: true
    });
    MembersProject.associate = (models) => {
        MembersProject.belongsTo(models.Project, {
            foreignKey: 'id',
        });
    };
    MembersProject.associate = (models) => {
        MembersProject.belongsTo(models.Members, {
            foreignKey: 'id',
        });
    };
    return MembersProject;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL21vZGVscy10cy9NZW1iZXJzUHJvamVjdC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL21vZGVscy10cy9NZW1iZXJzUHJvamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFjYSxRQUFBLHFCQUFxQixHQUFHLENBQ25DLFNBQThCLEVBQzlCLFNBQThCLEVBQ29DLEVBQUU7SUFDcEUsTUFBTSxVQUFVLEdBQWlEO1FBQy9ELEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUNwQjtRQUVELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUVELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtLQUNGLENBQUM7SUFFRixNQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUdyQyxpQkFBaUIsRUFBRSxVQUFVLEVBQUU7UUFDL0IsZUFBZSxFQUFFLElBQUk7S0FDdEIsQ0FBQyxDQUFDO0lBRUgsY0FBYyxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3BDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN2QyxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixjQUFjLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDcEMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLE9BQU8sY0FBYyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBTZXF1ZWxpemVBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdHlwaW5ncy9TZXF1ZWxpemVBdHRyaWJ1dGVzJztcbmV4cG9ydCBpbnRlcmZhY2UgbWVtYmVyc1Byb2plY3RBdHRyaWJ1dGUge1xuICBpZDogbnVtYmVyO1xuICBwcm9qZWN0X2lkOiBudW1iZXI7XG4gIG1lbWJlcnNfaWQ6IG51bWJlcjtcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICB1cGRhdGVkQXQ6IERhdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIG1lbWJlcnNQcm9qZWN0SW5zdGFuY2VcbiAgZXh0ZW5kcyBTZXF1ZWxpemUuSW5zdGFuY2U8bWVtYmVyc1Byb2plY3RBdHRyaWJ1dGU+LFxuICAgIG1lbWJlcnNQcm9qZWN0QXR0cmlidXRlIHt9XG5cbmV4cG9ydCBjb25zdCBNZW1iZXJzUHJvamVjdEZhY3RvcnkgPSAoXG4gIHNlcXVlbGl6ZTogU2VxdWVsaXplLlNlcXVlbGl6ZSxcbiAgRGF0YVR5cGVzOiBTZXF1ZWxpemUuRGF0YVR5cGVzXG4pOiBTZXF1ZWxpemUuTW9kZWw8bWVtYmVyc1Byb2plY3RJbnN0YW5jZSwgbWVtYmVyc1Byb2plY3RBdHRyaWJ1dGU+ID0+IHtcbiAgY29uc3QgYXR0cmlidXRlczogU2VxdWVsaXplQXR0cmlidXRlczxtZW1iZXJzUHJvamVjdEF0dHJpYnV0ZT4gPSB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZVxuICAgIH0sXG5cbiAgICBwcm9qZWN0X2lkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcblxuICAgIG1lbWJlcnNfaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICB1cGRhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBNZW1iZXJzUHJvamVjdCA9IHNlcXVlbGl6ZS5kZWZpbmU8XG4gICAgbWVtYmVyc1Byb2plY3RJbnN0YW5jZSxcbiAgICBtZW1iZXJzUHJvamVjdEF0dHJpYnV0ZVxuICA+KCdtZW1iZXJzX3Byb2plY3QnLCBhdHRyaWJ1dGVzLCB7XG4gICAgZnJlZXplVGFibGVOYW1lOiB0cnVlXG4gIH0pO1xuXG4gIE1lbWJlcnNQcm9qZWN0LmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBNZW1iZXJzUHJvamVjdC5iZWxvbmdzVG8obW9kZWxzLlByb2plY3QsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICdpZCcsXG4gICAgfSk7XG4gIH07XG4gIE1lbWJlcnNQcm9qZWN0LmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBNZW1iZXJzUHJvamVjdC5iZWxvbmdzVG8obW9kZWxzLk1lbWJlcnMsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICdpZCcsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE1lbWJlcnNQcm9qZWN0O1xufTtcbiJdfQ==