var commandClass = require("./command");
var command = new commandClass();
var interface = [
  {
    "method": "GET",
    "path": "/command/group",
    "param": {
      project: String,
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.group
  },
  {
    "method": "GET",
    "path": "/command/grouplist",
    "param": {
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.groupList
  },
  {
    "method": "GET",
    "path": "/command/project",
    "param": {
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.project
  },
  {
    "method": "GET",
    "path": "/command/team",
    "param": {
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.team
  },
  {
    "method": "GET",
    "path": "/command/doc",
    "param": {
      project: String,
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.doc
  },
  {
    "method": "GET",
    "path": "/command/doclist",
    "param": {
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.docList
  },
  {
    "method": "GET",
    "path": "/command/docproject",
    "param": {
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.docProject
  },
  {
    "method": "GET",
    "path": "/command/docgroup",
    "param": {
      project: String,
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.docGroup
  },
  {
    "method": "GET",
    "path": "/command/docgrouplist",
    "param": {
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.docGroupList
  },
  {
    "method": "GET",
    "path": "/command/interface",
    "param": {
      project: String,
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.interface
  },
  {
    "method": "GET",
    "path": "/command/interfacelist",
    "param": {
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.interfaceList
  },
  {
    "method": "GET",
    "path": "/command/poll",
    "param": {
      project: String,
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.poll
  },
  {
    "method": "GET",
    "path": "/command/polllist",
    "param": {
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.pollList
  },
  {
    "method": "GET",
    "path": "/command/collection",
    "param": {
      project: String,
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.collection
  },
  {
    "method": "GET",
    "path": "/command/collectionlist",
    "param": {
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.collectionList
  },
  {
    "method": "GET",
    "path": "/command/testproject",
    "param": {
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.testProject
  },
  {
    "method": "GET",
    "path": "/command/testmodule",
    "param": {
      project: String,
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.testModule
  },
  {
    "method": "GET",
    "path": "/command/testmodlelist",
    "param": {
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.testModuleList
  },
  {
    "method": "GET",
    "path": "/command/testgroup",
    "param": {
      project: String,
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.testGroup
  },
  {
    "method": "GET",
    "path": "/command/testgrouplist",
    "param": {
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.testGroupList
  },
  {
    "method": "GET",
    "path": "/command/test",
    "param": {
      project: String,
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.test
  },
  {
    "method": "GET",
    "path": "/command/testlist",
    "param": {
      query: {
        type: String,
        optional: 1
      },
      select: {
        type: String,
        optional: 1
      },
      option: {
        type: String,
        optional: 1
      }
    },
    "data": {},
    user: 1,
    handle: command.testList
  },
];

module.exports = interface;