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
        sequelize.query("INSERT INTO project (name, brand, subproject, description,homePage, categorie ,modules) VALUES('" +
            req.body.name +
            "', '" +
            req.body.subproject +
            "', '" +
            req.body.description +
            "', '" +
            req.body.homePage +
            "', '" +
            req.body.public +
            "','" +
            req.body.modules +
            "')", { type: sequelize.QueryTypes.INSERT }, {});
        //   .then(res.status(200).send('Project added successfully'))
        //   .catch((error) => res.status(400).send(error));
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
                    .then(() => res.status(200).send(`the Project was updated successfully`))
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
            .then(res.status(200).send('Project deleted successfully'))
            .catch((error) => res.status(400).send(error));
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL2NvbnRyb2xsZXJzL3Byb2plY3QudHMiLCJzb3VyY2VzIjpbIi9ob21lL2Jhc3NlbS9Eb2N1bWVudHMvUGVyc29ubmVsX1Byb2plY3QvYnVnLW1hc3Rlci9iYWNrZW5kL3NlcnZlci9jb250cm9sbGVycy9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDbEUsNENBQTRDO0FBRTVDLE1BQU0sRUFBRSxHQUFHLHdCQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFekMsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztBQUUvQixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO0FBRTNCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZiw0QkFBNEI7SUFDNUIsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3BCLFNBQVMsQ0FBQyxLQUFLLENBQ2Isa0dBQWtHO1lBQ2hHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNiLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDbkIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNwQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2pCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDZixLQUFLO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ2hCLElBQUksRUFFTixFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0gsQ0FBQztRQUNGLDhEQUE4RDtRQUM5RCxvREFBb0Q7SUFDdEQsQ0FBQztJQUNELGFBQWEsQ0FBQyxH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QUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELGFBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUNwQixTQUFTO2FBQ04sS0FBSyxDQUNKLGdDQUFnQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFDdEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7YUFDMUQsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VxdWVsaXplLCBRdWVyeVR5cGVzIH0gZnJvbSAnc2VxdWVsaXplJztcbmNvbnN0IHNlcXVlbGl6ZUNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9zZXF1ZWxpemVDb25maWcuanNvbicpO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWxzIH0gZnJvbSAnLi4vbW9kZWxzLXRzJztcbmltcG9ydCB7IFByb2plY3RGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzLXRzL1Byb2plY3QnO1xuY29uc3QgZGIgPSBjcmVhdGVNb2RlbHMoc2VxdWVsaXplQ29uZmlnKTtcblxuY29uc3Qgc2VxdWVsaXplID0gZGIuc2VxdWVsaXplO1xuXG5jb25zdCBwcm9qZWN0ID0gZGIuUHJvamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vaW5zZXJ0aW9uIG9mIGEgbmV3IGNvbXBhbnlcbiAgaW5zZXJ0UHJvamVjdChyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZS5xdWVyeShcbiAgICAgIFwiSU5TRVJUIElOVE8gcHJvamVjdCAobmFtZSwgYnJhbmQsIHN1YnByb2plY3QsIGRlc2NyaXB0aW9uLGhvbWVQYWdlLCBjYXRlZ29yaWUgLG1vZHVsZXMpIFZBTFVFUygnXCIgK1xuICAgICAgICByZXEuYm9keS5uYW1lICtcbiAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICByZXEuYm9keS5zdWJwcm9qZWN0ICtcbiAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICByZXEuYm9keS5kZXNjcmlwdGlvbiArXG4gICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgcmVxLmJvZHkuaG9tZVBhZ2UgK1xuICAgICAgICBcIicsICdcIiArXG4gICAgICAgIHJlcS5ib2R5LnB1YmxpYyArXG4gICAgICAgIFwiJywnXCIgK1xuICAgICAgICByZXEuYm9keS5tb2R1bGVzICtcbiAgICAgICAgXCInKVwiLFxuXG4gICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLklOU0VSVCB9LFxuICAgICAge31cbiAgICApO1xuICAgIC8vICAgLnRoZW4ocmVzLnN0YXR1cygyMDApLnNlbmQoJ1Byb2plY3QgYWRkZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICB1cGRhdGVQcm9qZWN0KHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIHByb2plY3RcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge31cbiAgICAgIH0pXG4gICAgICAudGhlbigocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJyBpbmV4aXN0YW50IHByb2plY3QnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHByb2plY3RcbiAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxuICAgICAgICAgICAgICBzdWJwcm9qZWN0OiByZXEuYm9keS5zdWJwcm9qZWN0LFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVxLmJvZHkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGhvbWVQYWdlOiByZXEuYm9keS5ob21lUGFnZSxcbiAgICAgICAgICAgICAgcHVibGljOiByZXEuYm9keS5wdWJsaWMsXG4gICAgICAgICAgICAgIG1vZHVsZXM6IHJlcS5ib2R5Lm1vZHVsZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PlxuICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChgdGhlIFByb2plY3Qgd2FzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICByZWFkUHJvamVjdChyZXEsIHJlcykge1xuICAgIHJldHVybiBwcm9qZWN0XG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IHByb2plY3QnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgLy8gcmVhZCBQcm9qZWN0IHdpdGggcGFnaW5hdGlvblxuICByZWFkUHJvamVjdENodW5rKHJlcSwgcmVzKSB7XG4gICAgbGV0IHBhZ2UgPSByZXEuYm9keS5wYWdlO1xuICAgIGxldCBwYWdlU2l6ZSA9IHJlcS5ib2R5LnBhZ2VTaXplO1xuXG4gICAgcmV0dXJuIHByb2plY3RcbiAgICAgIC5maW5kQWxsKHtcbiAgICAgICAgLy8gd2hlcmU6IHt9LFxuICAgICAgICBvZmZzZXQ6IHBhZ2UsXG4gICAgICAgIGxpbWl0OiBwYWdlU2l6ZVxuICAgICAgfSlcbiAgICAgIC50aGVuKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmICghcHJvamVjdCkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnaW5leGlzdGFudCBwcm9qZWN0J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sXG4gIGRlbGV0ZVByb2plY3QocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJERUxFVEUgRlJPTSBwcm9qZWN0IFdIRVJFIGlkPSdcIiArIHJlcS5wYXJhbXMuaWQgKyBcIidcIixcbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5ERUxFVEUgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdQcm9qZWN0IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9XG59O1xuIl19