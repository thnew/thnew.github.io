using InstaConsole.Controllers.ModelBinders;
using InstaConsole.Data.Entities;
using InstaConsole.Models;
using InstaConsole.Repository;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace InstaConsole.Controllers.ScriptApi
{
    public class FollowerController : ScriptApiController
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

        [Authorize(Roles="User")]
        [HttpGet]
        public ActionResult Update(string username, [ModelBinder(typeof(FollowerApiDtoModelBinder))]FollowerApiDto follower)
        {
            System.Threading.Thread.Sleep(2000);
            return new ScriptApiActionResult(follower.TargetAttribute, follower);
        }
    }
}
