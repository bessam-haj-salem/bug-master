"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const issues = db.Issues;
module.exports = {
    //insertion of a new ISSUES
    insertIssues(req, res) {
        sequelize
            .query("INSERT INTO issues (categorie, subject, description,status, priority ,start_date, due_date, estimated_time, progress, file, spent_time, activity, updated_by, links ) VALUES('" +
            req.body.categorie +
            "', '" +
            req.body.subject +
            "', '" +
            req.body.description +
            "', '" +
            req.body.status +
            "', '" +
            req.body.priority +
            "','" +
            req.body.start_date +
            "','" +
            req.body.due_date +
            "', '" +
            req.body.estimated_time +
            "', '" +
            req.body.progress +
            "', '" +
            req.body.file +
            "', '" +
            req.body.spent_time +
            "','" +
            req.body.activity +
            "', '" +
            req.body.updated_by +
            "', '" +
            req.body.links +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res
            .status(200)
            .send({ success: true, message: 'insert issues succeded' }))
            .catch((error) => res.status(400).send(error));
    },
    updateIssues(req, res) {
        return issues
            .findOne({
            where: { id: req.params.id },
            attributes: {}
        })
            .then((issues) => {
            if (!issues) {
                return res.status(200).send({
                    message: ' inexistant issues'
                });
            }
            else {
                return issues
                    .update({
                    categorie: req.body.categorie,
                    subject: req.body.subject,
                    description: req.body.description,
                    status: req.body.status,
                    priority: req.body.priority,
                    start_date: req.body.start_date,
                    due_date: req.body.due_date,
                    estimated_time: req.body.estimated_time,
                    progress: req.body.progress,
                    file: req.body.file,
                    spent_time: req.body.spent_time,
                    activity: req.body.activity,
                    updated_by: req.body.updated_by,
                    links: req.body.links
                })
                    .then(() => res
                    .status(200)
                    .send({ success: true, message: 'insert issue succeded' }))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readissues(req, res) {
        return issues
            .findOne({
            where: { id: req.params.id },
            attributes: {}
        })
            .then((issues) => {
            if (!issues) {
                return res.status(200).send({
                    message: 'inexistant issues'
                });
            }
            else {
                return res.status(200).send(issues);
            }
        });
    },
    // read issues with pagination
    readissuesChunk(req, res) {
        let page = req.body.page;
        let pageSize = req.body.pageSize;
        return issues
            .findAll({
            // where: {},
            offset: page,
            limit: pageSize
        })
            .then((issues) => {
            if (!issues) {
                return res.status(200).send({
                    message: 'inexistant issues'
                });
            }
            else {
                return res.status(200).send(issues);
            }
        });
    },
    deleteissues(req, res) {
        sequelize
            .query("DELETE FROM issues WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res
            .status(200)
            .send({ success: true, message: 'insert issue succeded' }))
            .catch((error) => res.status(400).send(error));
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL2NvbnRyb2xsZXJzL2lzc3Vlcy50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL2NvbnRyb2xsZXJzL2lzc3Vlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ2xFLDRDQUE0QztBQUU1QyxNQUFNLEVBQUUsR0FBRyx3QkFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7QUFFL0IsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUV6QixNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsMkJBQTJCO0lBQzNCLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUNuQixTQUFTO2FBQ04sS0FBSyxDQUNKLGdMQUFnTDtZQUM5SyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDbEIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNoQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ3BCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDZixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2pCLEtBQUs7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDbkIsS0FBSztZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNqQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjO1lBQ3ZCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDakIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNiLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDbkIsS0FBSztZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNqQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ25CLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDZCxJQUFJLEVBRU4sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUNILEdBQUc7YUFDQSxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUM5RDthQUNBLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ25CLE9BQU8sTUFBTTthQUNWLE9BQU8sQ0FBQztZQUNQLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUM1QixVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDMUIsT0FBTyxFQUFFLG9CQUFvQjtpQkFDOUIsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNO3FCQUNWLE1BQU0sQ0FBQztvQkFDTixTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUM3QixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO29CQUN6QixXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXO29CQUNqQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO29CQUN2QixRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO29CQUMzQixVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVO29CQUMvQixRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO29CQUMzQixjQUFjLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjO29CQUN2QyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO29CQUMzQixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO29CQUNuQixVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVO29CQUMvQixRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO29CQUMzQixVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVO29CQUMvQixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO2lCQUN0QixDQUFDO3FCQUNELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FDVCxHQUFHO3FCQUNBLE1BQU0sQ0FBQyxHQUFHLENBQUM7cUJBQ1gsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUM3RDtxQkFDQSxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUNqQixPQUFPLE1BQU07YUFDVixPQUFPLENBQUM7WUFDUCxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDNUIsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDO2FBQ0QsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sRUFBRSxtQkFBbUI7aUJBQzdCLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCw4QkFBOEI7SUFDOUIsZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3RCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRWpDLE9BQU8sTUFBTTthQUNWLE9BQU8sQ0FBQztZQUNQLGFBQWE7WUFDYixNQUFNLEVBQUUsSUFBSTtZQUNaLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDMUIsT0FBTyxFQUFFLG1CQUFtQjtpQkFDN0IsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUNuQixTQUFTO2FBQ04sS0FBSyxDQUNKLCtCQUErQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFDckQsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUNILEdBQUc7YUFDQSxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUM3RDthQUNBLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSwgUXVlcnlUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5jb25zdCBzZXF1ZWxpemVDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvc2VxdWVsaXplQ29uZmlnLmpzb24nKTtcbmltcG9ydCB7IGNyZWF0ZU1vZGVscyB9IGZyb20gJy4uL21vZGVscy10cyc7XG5pbXBvcnQgeyBJc3N1ZXNGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzLXRzL0lzc3Vlcyc7XG5jb25zdCBkYiA9IGNyZWF0ZU1vZGVscyhzZXF1ZWxpemVDb25maWcpO1xuXG5jb25zdCBzZXF1ZWxpemUgPSBkYi5zZXF1ZWxpemU7XG5cbmNvbnN0IGlzc3VlcyA9IGRiLklzc3VlcztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vaW5zZXJ0aW9uIG9mIGEgbmV3IElTU1VFU1xuICBpbnNlcnRJc3N1ZXMocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJJTlNFUlQgSU5UTyBpc3N1ZXMgKGNhdGVnb3JpZSwgc3ViamVjdCwgZGVzY3JpcHRpb24sc3RhdHVzLCBwcmlvcml0eSAsc3RhcnRfZGF0ZSwgZHVlX2RhdGUsIGVzdGltYXRlZF90aW1lLCBwcm9ncmVzcywgZmlsZSwgc3BlbnRfdGltZSwgYWN0aXZpdHksIHVwZGF0ZWRfYnksIGxpbmtzICkgVkFMVUVTKCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuY2F0ZWdvcmllICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuc3ViamVjdCArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmRlc2NyaXB0aW9uICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuc3RhdHVzICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucHJpb3JpdHkgK1xuICAgICAgICAgIFwiJywnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnN0YXJ0X2RhdGUgK1xuICAgICAgICAgIFwiJywnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmR1ZV9kYXRlICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZXN0aW1hdGVkX3RpbWUgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5wcm9ncmVzcyArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmZpbGUgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5zcGVudF90aW1lICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5hY3Rpdml0eSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnVwZGF0ZWRfYnkgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5saW5rcyArXG4gICAgICAgICAgXCInKVwiLFxuXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuSU5TRVJUIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihcbiAgICAgICAgcmVzXG4gICAgICAgICAgLnN0YXR1cygyMDApXG4gICAgICAgICAgLnNlbmQoeyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnaW5zZXJ0IGlzc3VlcyBzdWNjZWRlZCcgfSlcbiAgICAgIClcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHVwZGF0ZUlzc3VlcyhyZXEsIHJlcykge1xuICAgIHJldHVybiBpc3N1ZXNcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge31cbiAgICAgIH0pXG4gICAgICAudGhlbigoaXNzdWVzKSA9PiB7XG4gICAgICAgIGlmICghaXNzdWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcgaW5leGlzdGFudCBpc3N1ZXMnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGlzc3Vlc1xuICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgIGNhdGVnb3JpZTogcmVxLmJvZHkuY2F0ZWdvcmllLFxuICAgICAgICAgICAgICBzdWJqZWN0OiByZXEuYm9keS5zdWJqZWN0LFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVxLmJvZHkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIHN0YXR1czogcmVxLmJvZHkuc3RhdHVzLFxuICAgICAgICAgICAgICBwcmlvcml0eTogcmVxLmJvZHkucHJpb3JpdHksXG4gICAgICAgICAgICAgIHN0YXJ0X2RhdGU6IHJlcS5ib2R5LnN0YXJ0X2RhdGUsXG4gICAgICAgICAgICAgIGR1ZV9kYXRlOiByZXEuYm9keS5kdWVfZGF0ZSxcbiAgICAgICAgICAgICAgZXN0aW1hdGVkX3RpbWU6IHJlcS5ib2R5LmVzdGltYXRlZF90aW1lLFxuICAgICAgICAgICAgICBwcm9ncmVzczogcmVxLmJvZHkucHJvZ3Jlc3MsXG4gICAgICAgICAgICAgIGZpbGU6IHJlcS5ib2R5LmZpbGUsXG4gICAgICAgICAgICAgIHNwZW50X3RpbWU6IHJlcS5ib2R5LnNwZW50X3RpbWUsXG4gICAgICAgICAgICAgIGFjdGl2aXR5OiByZXEuYm9keS5hY3Rpdml0eSxcbiAgICAgICAgICAgICAgdXBkYXRlZF9ieTogcmVxLmJvZHkudXBkYXRlZF9ieSxcbiAgICAgICAgICAgICAgbGlua3M6IHJlcS5ib2R5LmxpbmtzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcmVzXG4gICAgICAgICAgICAgICAgLnN0YXR1cygyMDApXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnaW5zZXJ0IGlzc3VlIHN1Y2NlZGVkJyB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHJlYWRpc3N1ZXMocmVxLCByZXMpIHtcbiAgICByZXR1cm4gaXNzdWVzXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGlzc3VlcykgPT4ge1xuICAgICAgICBpZiAoIWlzc3Vlcykge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnaW5leGlzdGFudCBpc3N1ZXMnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGlzc3Vlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICAvLyByZWFkIGlzc3VlcyB3aXRoIHBhZ2luYXRpb25cbiAgcmVhZGlzc3Vlc0NodW5rKHJlcSwgcmVzKSB7XG4gICAgbGV0IHBhZ2UgPSByZXEuYm9keS5wYWdlO1xuICAgIGxldCBwYWdlU2l6ZSA9IHJlcS5ib2R5LnBhZ2VTaXplO1xuXG4gICAgcmV0dXJuIGlzc3Vlc1xuICAgICAgLmZpbmRBbGwoe1xuICAgICAgICAvLyB3aGVyZToge30sXG4gICAgICAgIG9mZnNldDogcGFnZSxcbiAgICAgICAgbGltaXQ6IHBhZ2VTaXplXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGlzc3VlcykgPT4ge1xuICAgICAgICBpZiAoIWlzc3Vlcykge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnaW5leGlzdGFudCBpc3N1ZXMnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGlzc3Vlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICBkZWxldGVpc3N1ZXMocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJERUxFVEUgRlJPTSBpc3N1ZXMgV0hFUkUgaWQ9J1wiICsgcmVxLnBhcmFtcy5pZCArIFwiJ1wiLFxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLkRFTEVURSB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4oXG4gICAgICAgIHJlc1xuICAgICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAgIC5zZW5kKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ2luc2VydCBpc3N1ZSBzdWNjZWRlZCcgfSlcbiAgICAgIClcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH1cbn07XG4iXX0=