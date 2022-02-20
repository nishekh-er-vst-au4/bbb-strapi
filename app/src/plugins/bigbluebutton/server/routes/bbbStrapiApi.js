"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/class",
      handler: "classController.find",
    },
    {
      method: "GET",
      path: "/class/:uid",
      handler: "classController.findOne",
    },
    {
      method: "GET",
      path: "/class/join/invite/:uid",
      handler: "classController.invite",
    },
    {
      method: "POST",
      path: "/class",
      handler: "classController.create",
    },
    {
      method: "PUT",
      path: "/class/:id",
      handler: "classController.update",
    },
    {
      method: "DELETE",
      path: "/class/:id",
      handler: "classController.delete",
    },

    // session routes
    {
      method: "GET",
      path: "/session",
      handler: "sessionController.find",
    },
    {
      method: "GET",
      path: "/session/:id",
      handler: "sessionController.findOne",
    },
    {
      method: "POST",
      path: "/session",
      handler: "sessionController.create",
    },
    {
      method: "DELETE",
      path: "/session/:id",
      handler: "sessionController.delete",
    },
    // bbb action routes

    {
      method: "POST",
      path: "/class/start/:uid",
      handler: "bbbController.startBBB",
    },
    {
      method: "POST",
      path: "/class/join",
      handler: "bbbController.joinBBB",
    },
    {
      method: "GET",
      path: "/class/status/:meetingId",
      handler: "bbbController.isMeetingRunning",
    },
    {
      method: "POST",
      path: "/class/end",
      handler: "bbbController.endMeeting",
    },
  ],
};
