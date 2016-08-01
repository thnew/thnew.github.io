using InstaConsole.Controllers.ModelBinders;
using InstaConsole.Data.Entities;
using InstaConsole.Models;
using InstaConsole.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace InstaConsole.Controllers
{
    public class FollowerController : Controller
    {
        public List<FollowerApiDto> Followers { get; set; }
        private FollowerNotesRepository repository = new FollowerNotesRepository();
        private UserRepository userRepository = new UserRepository();

        //public IEnumerable<FollowerDTO> Get()
        //{
        //    return this.Followers;
        //}

        public ActionResult Get(string username)
        {
            var result = new JavaScriptResult();

            result.Script = "var x = '" + username + ". I created an user';";

            this.repository.GetAllForUser(Guid.NewGuid());

            var newUser = new User() { Username = "New Student" };
            this.userRepository.Create(newUser);

            return result;
        }

        [HttpGet]
        public string Delete(string username)
        {
            return "Delete " + username;
        }

        [HttpGet]
        public string Add(string username, [ModelBinder(typeof(FollowerApiDtoModelBinder))]FollowerApiDto follower)
        {
            return "Update " + username;
        }

        [HttpGet]
        public string Update(string username, FollowerApiDto follower)
        {
            return "Update " + username;
        }
    }
}
