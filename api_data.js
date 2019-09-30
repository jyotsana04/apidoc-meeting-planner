define({ "api": [
  {
    "group": "meeting",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meeting/viewAllByUserId/:userId",
    "title": "view all meeting.",
    "header": {
      "fields": {
        "Authorization Headers": [
          {
            "group": "Authorization Headers",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken token of user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of user whose meetings are to be fetched (body/route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"meeting Details Found Successfully.\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"forUserId\": \"d5lYEaUq\",\n            \"createdBy\": \"\",\n            \"description\": \"this is  a dummy meeting\",\n            \"location\": \"office\",\n            \"end\": \"2019-09-29T08:49:10.000Z\",\n            \"start\": \"2019-09-29T08:49:10.000Z\",\n            \"title\": \"meeting 1\",\n            \"meetingId\": \"qOiUC5CT\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "meeting",
    "name": "GetApiV1MeetingViewallbyuseridUserid"
  },
  {
    "group": "meeting",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/viewSingleMeeting/:meetingId",
    "title": "view single meeting.",
    "header": {
      "fields": {
        "Authorization Headers": [
          {
            "group": "Authorization Headers",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken token of user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>meetingId of meeting whose detail is to be fetched (body/route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"meeting Details Found Successfully.\",\n    \"status\": 200,\n    \"data\": {\n        \"forUserId\": \"d5lYEaUq\",\n        \"createdBy\": \"\",\n        \"description\": \"this is  a dummy meeting edited\",\n        \"location\": \"office\",\n        \"end\": \"2019-09-29T08:49:10.000Z\",\n        \"start\": \"2019-09-29T08:49:10.000Z\",\n        \"title\": \"meeting 1\",\n        \"meetingId\": \"qOiUC5CT\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "meeting",
    "name": "GetApiV1ViewsinglemeetingMeetingid"
  },
  {
    "group": "meeting",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meeting/create/:userId",
    "title": "Add a meeting.",
    "header": {
      "fields": {
        "Authorization Headers": [
          {
            "group": "Authorization Headers",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of admin</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>UserId of the user to whom meeting is associated. (body/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the meeting (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "location",
            "description": "<p>location of the meeting (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "start",
            "description": "<p>start  date and time meeting will start (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "end",
            "description": "<p>end date and time meeting will end (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Meeting Created successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5d90ea7a8023e13d00d30b45\",\n        \"forUserId\": \"d5lYEaUq\",\n        \"createdBy\": \"\",\n        \"description\": \"this is  a dummy meeting\",\n        \"location\": \"office\",\n        \"end\": \"2019-09-29T08:49:10.000Z\",\n        \"start\": \"2019-09-29T08:49:10.000Z\",\n        \"title\": \"meeting 1\",\n        \"meetingId\": \"qOiUC5CT\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "meeting",
    "name": "PostApiV1MeetingCreateUserid"
  },
  {
    "group": "meeting",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meeting/delete/:meetingId",
    "title": "Delete a meeting.",
    "header": {
      "fields": {
        "Authorization Headers": [
          {
            "group": "Authorization Headers",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of Admin</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>meetingId of the meeting which is to be deleted. (body/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"meeting Deleted Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "meeting",
    "name": "PostApiV1MeetingDeleteMeetingid"
  },
  {
    "group": "meeting",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/meeting/edit/:meetingId",
    "title": "Edit a meeting.",
    "header": {
      "fields": {
        "Authorization Headers": [
          {
            "group": "Authorization Headers",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of Admin</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>meetingId of the meeting which is to be edited. (body/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "options",
            "description": "<p>options any parameter which is to be modified (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"meeting Edited Successfully.\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "meeting",
    "name": "PutApiV1MeetingEditMeetingid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/allUsers",
    "title": "Get all users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the admin. (auth headers) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n    \"error\": false,\n    \"message\": \"Users details found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"password\": \"$2a$10$FUJz0BaJkVulqgPDxjzKU.V2wc39JmpS8lHKfizccZyySpp97L4Zi\",\n            \"userName\": \"Bika-admin\",\n            \"role\": \"admin\",\n            \"createdOn\": \"2019-09-25T18:11:05.000Z\",\n            \"mobileNumber\": \"9723694557\",\n            \"countryCode\": \"91\",\n            \"email\": \"ad4min@gmail.com\",\n            \"lastName\": \"paul\",\n            \"firstName\": \"Bika\",\n            \"userId\": \"xC0vgS-\"\n        },\n        {\n            \"password\": \"$2a$10$J7gtwRvHpptWePksIgB4IOvgAucqpWfWl5ozyTeNoE/Q3JwSHtxKC\",\n            \"userName\": \"jyotsana-user\",\n            \"role\": \"normalUser\",\n            \"createdOn\": \"2019-09-29T15:15:08.000Z\",\n            \"mobileNumber\": \"9568412369\",\n            \"countryCode\": \"91\",\n            \"email\": \"jyotsana@gmail.com\",\n            \"lastName\": \"negi\",\n            \"firstName\": \"jyotsana\",\n            \"userId\": \"d5lYEaq\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersAllusers"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/findForReset/:token",
    "title": "fetching user detail for password reset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token sent to the user in mail.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n    \"error\": false,\n    \"message\": \"User Details Found Successfully.\",\n    \"status\": 200,\n    \"data\": {\n        \"userName\": \"jyotsana-user\",\n        \"role\": \"normalUser\",\n        \"createdOn\": \"2019-09-29T15:15:08.000Z\",\n        \"mobileNumber\": \"9568412369\",\n        \"countryCode\": \"91\",\n        \"email\": \"jyotsana.negi04@gmail.com\",\n        \"lastName\": \"negi\",\n        \"firstName\": \"jyotsana\",\n        \"userId\": \"d5lYEaUq\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersFindforresetToken"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/userdetail/:userId",
    "title": "for getting single user detail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user unique Id (auth headers) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"User Details Found Successfully.\",\n   \"status\": 200,\n   \"data\": {\n       \"userName\": \"jyotsana-user\",\n       \"role\": \"normalUser\",\n       \"createdOn\": \"2019-09-29T15:15:08.000Z\",\n       \"mobileNumber\": \"9568412369\",\n       \"countryCode\": \"91\",\n       \"email\": \"jyotsana.negi04@gmail.com\",\n       \"lastName\": \"negi\",\n       \"firstName\": \"jyotsana\",\n       \"userId\": \"d5lYEaUq\"\n   }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersUserdetailUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "User login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n            \"error\": false,\n            \"message\": \"Login Successful\",\n            \"status\": 200,\n            \"data\": {\n                \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkVfQy1RdVViIiwiaWF0IjoxNTY5NzcwMzY3OTI5LCJleHAiOjE1Njk4NTY3NjcsInN1YiI6ImF1dGhUb2tlbiIsImlzcyI6ImVkTXlQcmFjIiwiZGF0YSI6eyJ1c2VyTmFtZSI6Imp5b3RzYW5hLXVzZXIiLCJyb2xlIjoibm9ybWFsVXNlciIsInJlc2V0UGFzc3dvcmRFeHBpcmVzIjpudWxsLCJyZXNldFBhc3N3b3JkVG9rZW4iOiIiLCJtb2JpbGVOdW1iZXIiOiI5NTY4NDEyMzY5IiwiY291bnRyeUNvZGUiOiI5MSIsImVtYWlsIjoianlvdHNhbmEubmVnaTA0QGdtYWlsLmNvbSIsImxhc3ROYW1lIjoibmVnaSIsImZpcnN0TmFtZSI6Imp5b3RzYW5hIiwidXNlcklkIjoiZDVsWUVhVXEifX0.gRFLITywuhieX3TqezN4gTyzMZBCk9RqcI84lGReZlQ\",\n                \"userDetails\": {\n                    \"userName\": \"jyotsana-user\",\n                    \"role\": \"normalUser\",\n                    \"resetPasswordExpires\": null,\n                    \"resetPasswordToken\": \"\",\n                    \"mobileNumber\": \"9568412369\",\n                    \"countryCode\": \"91\",\n                    \"email\": \"jyotsana.negi04@gmail.com\",\n                    \"lastName\": \"negi\",\n                    \"firstName\": \"jyotsana\",\n                    \"userId\": \"d5lYEaUq\"\n                }\n            }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "logout .",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (auth headers) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/recoverPassword",
    "title": "forgot password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n    \"error\": false,\n    \"message\": \"reset token mail generation Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5d90ca7cb8d92f1324804118\",\n        \"password\": \"$2a$10$pZu0ndA3SNIzU9/MxG5u8O8j3lp0YywhdO3WhAxKcP.gzhpu/THhS\",\n        \"userName\": \"jyotsana-user\",\n        \"__v\": 0,\n        \"role\": \"normalUser\",\n        \"resetPasswordExpires\": \"2019-09-30T15:43:58.245Z\",\n        \"resetPasswordToken\": \"5ccc6c0d50dcaa434f10ec49a3a99c0257360058\",\n        \"createdOn\": \"2019-09-29T15:15:08.000Z\",\n        \"mobileNumber\": \"9568412369\",\n        \"countryCode\": \"91\",\n        \"email\": \"jyotsana.negi04@gmail.com\",\n        \"lastName\": \"negi\",\n        \"firstName\": \"jyotsana\",\n        \"userId\": \"d5lYEaUq\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersRecoverpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/setNewPassword",
    "title": "setting new password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newPassword",
            "description": "<p>newPassword of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "verifyPassword",
            "description": "<p>verifyPassword of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n    \"error\": false,\n    \"message\": \"update user password\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5d90ca7cb8d92f1324804118\",\n        \"password\": \"$2a$10$J7gtwRvHpptWePksIgB4IOvgAucqpWfWl5ozyTeNoE/Q3JwSHtxKC\",\n        \"userName\": \"jyotsana-user\",\n        \"__v\": 0,\n        \"role\": \"normalUser\",\n        \"createdOn\": \"2019-09-29T15:15:08.000Z\",\n        \"mobileNumber\": \"9568412369\",\n        \"countryCode\": \"91\",\n        \"email\": \"jyotsana.negi04@gmail.com\",\n        \"lastName\": \"negi\",\n        \"firstName\": \"jyotsana\",\n        \"userId\": \"d5lYEaUq\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSetnewpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "User SignUp.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName  of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName  of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber  of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode  of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "                {\n                \"error\": false,\n                \"message\": \"User created\",\n                \"status\": 200,\n                \"data\": {\n                    \"__v\": 0,\n                    \"userName\": \"jyotsana-user\",\n                    \"_id\": \"5d90ca7cb8d92f1324804118\",\n                    \"role\": \"normalUser\",\n                    \"resetPasswordExpires\": null,\n                    \"resetPasswordToken\": \"\",\n                    \"createdOn\": \"2019-09-29T15:15:08.000Z\",\n                    \"mobileNumber\": \"9568412369\",\n                    \"countryCode\": \"91\",\n                    \"email\": \"jyotsana.negi04@gmail.com\",\n                    \"lastName\": \"negi\",\n                    \"firstName\": \"jyotsana\",\n                    \"userId\": \"d5lYEaUq\"\n                }\n        }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  }
] });
