"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const project = db.Project;
module.exports = {
    //insertion of a new company
    insertProject(req, res) {
        sequelize
            .query("INSERT INTO project (name, subproject, description,homePage, categorie ,modules) VALUES('" +
            req.body.name +
            "', '" +
            req.body.subproject +
            "', '" +
            req.body.description +
            "', '" +
            req.body.homePage +
            "', '" +
            req.body.categorie +
            "','" +
            req.body.modules +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res
            .status(200)
            .send({ success: true, message: 'insert vehicule succeded' }))
            .catch((error) => res.status(400).send(error));
    },
    updateProject(req, res) {
        return project
            .findOne({
            where: { id: req.params.id },
            attributes: {}
        })
            .then((project) => {
            if (!project) {
                return res.status(200).send({
                    message: ' inexistant project'
                });
            }
            else {
                return project
                    .update({
                    name: req.body.name,
                    subproject: req.body.subproject,
                    description: req.body.description,
                    homePage: req.body.homePage,
                    public: req.body.public,
                    modules: req.body.modules
                })
                    .then(() => res
                    .status(200)
                    .send({ success: true, message: 'insert vehicule succeded' }))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readProject(req, res) {
        return project
            .findOne({
            where: { id: req.params.id },
            attributes: {}
        })
            .then((project) => {
            if (!project) {
                return res.status(200).send({
                    message: 'inexistant project'
                });
            }
            else {
                return res.status(200).send(project);
            }
        });
    },
    // read Project with pagination
    readProjectChunk(req, res) {
        let page = req.body.page;
        let pageSize = req.body.pageSize;
        return project
            .findAll({
            // where: {},
            offset: page,
            limit: pageSize
        })
            .then((project) => {
            if (!project) {
                return res.status(200).send({
                    message: 'inexistant project'
                });
            }
            else {
                return res.status(200).send(project);
            }
        });
    },
    deleteProject(req, res) {
        sequelize
            .query("DELETE FROM project WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res
            .status(200)
            .send({ success: true, message: 'insert vehicule succeded' }))
            .catch((error) => res.status(400).send(error));
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL2NvbnRyb2xsZXJzL3Byb2plY3QudHMiLCJzb3VyY2VzIjpbIi9ob21lL2Jhc3NlbS9Eb2N1bWVudHMvUGVyc29ubmVsX1Byb2plY3QvYnVnLW1hc3Rlci9iYWNrZW5kL3NlcnZlci9jb250cm9sbGVycy9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDbEUsNENBQTRDO0FBRTVDLE1BQU0sRUFBRSxHQUFHLHdCQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFekMsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztBQUUvQixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO0FBRTNCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZiw0QkFBNEI7SUFDNUIsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3BCLFNBQVM7YUFDTixLQUFLLENBQ0osMkZBQTJGO1lBQ3pGLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNiLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDbkIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNwQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2pCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDbEIsS0FBSztZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNoQixJQUFJLEVBRU4sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUNILEdBQUc7YUFDQSxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxDQUNoRTthQUNBLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3BCLE9BQU8sT0FBTzthQUNYLE9BQU8sQ0FBQztZQUNQLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUM1QixVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sRUFBRSxxQkFBcUI7aUJBQy9CLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sT0FBTztxQkFDWCxNQUFNLENBQUM7b0JBQ04sSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtvQkFDbkIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTtvQkFDL0IsV0FBVyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVztvQkFDakMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtvQkFDM0IsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTtvQkFDdkIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztpQkFDMUIsQ0FBQztxQkFDRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQ1QsR0FBRztxQkFDQSxNQUFNLENBQUMsR0FBRyxDQUFDO3FCQUNYLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLENBQUMsQ0FDaEU7cUJBQ0EsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDbEIsT0FBTyxPQUFPO2FBQ1gsT0FBTyxDQUFDO1lBQ1AsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQzVCLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQzthQUNELElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDMUIsT0FBTyxFQUFFLG9CQUFvQjtpQkFDOUIsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELCtCQUErQjtJQUMvQixnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUN2QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVqQyxPQUFPLE9BQU87YUFDWCxPQUFPLENBQUM7WUFDUCxhQUFhO1lBQ2IsTUFBTSxFQUFFLElBQUk7WUFDWixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDO2FBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMxQixPQUFPLEVBQUUsb0JBQW9CO2lCQUM5QixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3BCLFNBQVM7YUFDTixLQUFLLENBQ0osZ0NBQWdDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUN0RCxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0g7YUFDQSxJQUFJLENBQ0gsR0FBRzthQUNBLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDWCxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxDQUFDLENBQ2hFO2FBQ0EsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VxdWVsaXplLCBRdWVyeVR5cGVzIH0gZnJvbSAnc2VxdWVsaXplJztcbmNvbnN0IHNlcXVlbGl6ZUNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9zZXF1ZWxpemVDb25maWcuanNvbicpO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWxzIH0gZnJvbSAnLi4vbW9kZWxzLXRzJztcbmltcG9ydCB7IFByb2plY3RGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzLXRzL1Byb2plY3QnO1xuY29uc3QgZGIgPSBjcmVhdGVNb2RlbHMoc2VxdWVsaXplQ29uZmlnKTtcblxuY29uc3Qgc2VxdWVsaXplID0gZGIuc2VxdWVsaXplO1xuXG5jb25zdCBwcm9qZWN0ID0gZGIuUHJvamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vaW5zZXJ0aW9uIG9mIGEgbmV3IGNvbXBhbnlcbiAgaW5zZXJ0UHJvamVjdChyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIklOU0VSVCBJTlRPIHByb2plY3QgKG5hbWUsIHN1YnByb2plY3QsIGRlc2NyaXB0aW9uLGhvbWVQYWdlLCBjYXRlZ29yaWUgLG1vZHVsZXMpIFZBTFVFUygnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5Lm5hbWUgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5zdWJwcm9qZWN0ICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZGVzY3JpcHRpb24gK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5ob21lUGFnZSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmNhdGVnb3JpZSArXG4gICAgICAgICAgXCInLCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkubW9kdWxlcyArXG4gICAgICAgICAgXCInKVwiLFxuXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuSU5TRVJUIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihcbiAgICAgICAgcmVzXG4gICAgICAgICAgLnN0YXR1cygyMDApXG4gICAgICAgICAgLnNlbmQoeyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnaW5zZXJ0IHZlaGljdWxlIHN1Y2NlZGVkJyB9KVxuICAgICAgKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgdXBkYXRlUHJvamVjdChyZXEsIHJlcykge1xuICAgIHJldHVybiBwcm9qZWN0XG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcgaW5leGlzdGFudCBwcm9qZWN0J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwcm9qZWN0XG4gICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgbmFtZTogcmVxLmJvZHkubmFtZSxcbiAgICAgICAgICAgICAgc3VicHJvamVjdDogcmVxLmJvZHkuc3VicHJvamVjdCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlcS5ib2R5LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBob21lUGFnZTogcmVxLmJvZHkuaG9tZVBhZ2UsXG4gICAgICAgICAgICAgIHB1YmxpYzogcmVxLmJvZHkucHVibGljLFxuICAgICAgICAgICAgICBtb2R1bGVzOiByZXEuYm9keS5tb2R1bGVzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcmVzXG4gICAgICAgICAgICAgICAgLnN0YXR1cygyMDApXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnaW5zZXJ0IHZlaGljdWxlIHN1Y2NlZGVkJyB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHJlYWRQcm9qZWN0KHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIHByb2plY3RcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge31cbiAgICAgIH0pXG4gICAgICAudGhlbigocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ2luZXhpc3RhbnQgcHJvamVjdCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICAvLyByZWFkIFByb2plY3Qgd2l0aCBwYWdpbmF0aW9uXG4gIHJlYWRQcm9qZWN0Q2h1bmsocmVxLCByZXMpIHtcbiAgICBsZXQgcGFnZSA9IHJlcS5ib2R5LnBhZ2U7XG4gICAgbGV0IHBhZ2VTaXplID0gcmVxLmJvZHkucGFnZVNpemU7XG5cbiAgICByZXR1cm4gcHJvamVjdFxuICAgICAgLmZpbmRBbGwoe1xuICAgICAgICAvLyB3aGVyZToge30sXG4gICAgICAgIG9mZnNldDogcGFnZSxcbiAgICAgICAgbGltaXQ6IHBhZ2VTaXplXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IHByb2plY3QnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgZGVsZXRlUHJvamVjdChyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIkRFTEVURSBGUk9NIHByb2plY3QgV0hFUkUgaWQ9J1wiICsgcmVxLnBhcmFtcy5pZCArIFwiJ1wiLFxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLkRFTEVURSB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4oXG4gICAgICAgIHJlc1xuICAgICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAgIC5zZW5kKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ2luc2VydCB2ZWhpY3VsZSBzdWNjZWRlZCcgfSlcbiAgICAgIClcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH1cbn07XG4iXX0=