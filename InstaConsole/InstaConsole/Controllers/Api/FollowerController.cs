using InstaConsole.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace InstaConsole.Controllers.Api
{
    public class FollowerController : ApiController
    {
        public List<FollowerDTO> Followers { get; set; }

        public IEnumerable<FollowerDTO> Get()
        {
            return this.Followers;
        }

        public string Get(string username)
        {
            return "infos about " + username;
        }

        [HttpGet]
        public string Delete(string username)
        {
            return "Delete " + username;
        }

        [HttpGet]
        public string Add(string username, FollowerDTO follower)
        {
            return "Update " + username;
        }

        [HttpGet]
        public string Update(string username, FollowerDTO follower)
        {
            return "Update " + username;
        }
    }
}
