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
        sequelize.query("INSERT INTO project (name, brand, subproject, description,homePage, categ,modules) VALUES('" +
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL2NvbnRyb2xsZXJzL3Byb2plY3QudHMiLCJzb3VyY2VzIjpbIi9ob21lL2Jhc3NlbS9Eb2N1bWVudHMvUGVyc29ubmVsX1Byb2plY3QvYnVnLW1hc3Rlci9iYWNrZW5kL3NlcnZlci9jb250cm9sbGVycy9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDbEUsNENBQTRDO0FBRTVDLE1BQU0sRUFBRSxHQUFHLHdCQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFekMsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztBQUUvQixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO0FBRTNCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZiw0QkFBNEI7SUFDNUIsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3BCLFNBQVMsQ0FBQyxLQUFLLENBQ2IsNkZBQTZGO1lBQzNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNiLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDbkIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNwQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2pCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDZixLQUFLO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ2hCLElBQUksRUFFTixFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0gsQ0FBQztRQUNGLDhEQUE4RDtRQUM5RCxvREFBb0Q7SUFDdEQsQ0FBQztJQUNELGFBQWEsQ0FBQyxH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QUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELGFBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUNwQixTQUFTO2FBQ04sS0FBSyxDQUNKLGdDQUFnQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFDdEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7YUFDMUQsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VxdWVsaXplLCBRdWVyeVR5cGVzIH0gZnJvbSAnc2VxdWVsaXplJztcbmNvbnN0IHNlcXVlbGl6ZUNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9zZXF1ZWxpemVDb25maWcuanNvbicpO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWxzIH0gZnJvbSAnLi4vbW9kZWxzLXRzJztcbmltcG9ydCB7IFByb2plY3RGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzLXRzL1Byb2plY3QnO1xuY29uc3QgZGIgPSBjcmVhdGVNb2RlbHMoc2VxdWVsaXplQ29uZmlnKTtcblxuY29uc3Qgc2VxdWVsaXplID0gZGIuc2VxdWVsaXplO1xuXG5jb25zdCBwcm9qZWN0ID0gZGIuUHJvamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vaW5zZXJ0aW9uIG9mIGEgbmV3IGNvbXBhbnlcbiAgaW5zZXJ0UHJvamVjdChyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZS5xdWVyeShcbiAgICAgIFwiSU5TRVJUIElOVE8gcHJvamVjdCAobmFtZSwgYnJhbmQsIHN1YnByb2plY3QsIGRlc2NyaXB0aW9uLGhvbWVQYWdlLCBjYXRlZyxtb2R1bGVzKSBWQUxVRVMoJ1wiICtcbiAgICAgICAgcmVxLmJvZHkubmFtZSArXG4gICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgcmVxLmJvZHkuc3VicHJvamVjdCArXG4gICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgcmVxLmJvZHkuZGVzY3JpcHRpb24gK1xuICAgICAgICBcIicsICdcIiArXG4gICAgICAgIHJlcS5ib2R5LmhvbWVQYWdlICtcbiAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICByZXEuYm9keS5wdWJsaWMgK1xuICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgcmVxLmJvZHkubW9kdWxlcyArXG4gICAgICAgIFwiJylcIixcblxuICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5JTlNFUlQgfSxcbiAgICAgIHt9XG4gICAgKTtcbiAgICAvLyAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdQcm9qZWN0IGFkZGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgIC8vICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgdXBkYXRlUHJvamVjdChyZXEsIHJlcykge1xuICAgIHJldHVybiBwcm9qZWN0XG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcgaW5leGlzdGFudCBwcm9qZWN0J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwcm9qZWN0XG4gICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgbmFtZTogcmVxLmJvZHkubmFtZSxcbiAgICAgICAgICAgICAgc3VicHJvamVjdDogcmVxLmJvZHkuc3VicHJvamVjdCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlcS5ib2R5LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBob21lUGFnZTogcmVxLmJvZHkuaG9tZVBhZ2UsXG4gICAgICAgICAgICAgIHB1YmxpYzogcmVxLmJvZHkucHVibGljLFxuICAgICAgICAgICAgICBtb2R1bGVzOiByZXEuYm9keS5tb2R1bGVzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoYHRoZSBQcm9qZWN0IHdhcyB1cGRhdGVkIHN1Y2Nlc3NmdWxseWApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgcmVhZFByb2plY3QocmVxLCByZXMpIHtcbiAgICByZXR1cm4gcHJvamVjdFxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fVxuICAgICAgfSlcbiAgICAgIC50aGVuKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmICghcHJvamVjdCkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnaW5leGlzdGFudCBwcm9qZWN0J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sXG4gIC8vIHJlYWQgUHJvamVjdCB3aXRoIHBhZ2luYXRpb25cbiAgcmVhZFByb2plY3RDaHVuayhyZXEsIHJlcykge1xuICAgIGxldCBwYWdlID0gcmVxLmJvZHkucGFnZTtcbiAgICBsZXQgcGFnZVNpemUgPSByZXEuYm9keS5wYWdlU2l6ZTtcblxuICAgIHJldHVybiBwcm9qZWN0XG4gICAgICAuZmluZEFsbCh7XG4gICAgICAgIC8vIHdoZXJlOiB7fSxcbiAgICAgICAgb2Zmc2V0OiBwYWdlLFxuICAgICAgICBsaW1pdDogcGFnZVNpemVcbiAgICAgIH0pXG4gICAgICAudGhlbigocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ2luZXhpc3RhbnQgcHJvamVjdCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICBkZWxldGVQcm9qZWN0KHJlcSwgcmVzKSB7XG4gICAgc2VxdWVsaXplXG4gICAgICAucXVlcnkoXG4gICAgICAgIFwiREVMRVRFIEZST00gcHJvamVjdCBXSEVSRSBpZD0nXCIgKyByZXEucGFyYW1zLmlkICsgXCInXCIsXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuREVMRVRFIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgnUHJvamVjdCBkZWxldGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfVxufTtcbiJdfQ==