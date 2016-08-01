using InstaConsole.Data.Entities;
using InstaConsole.Exceptions.GeneralExceptions;
using InstaConsole.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InstaConsole.Repository
{
    public class FollowerNotesRepository
    {
        public IEnumerable<FollowerNote> GetAllForUser(Guid userId)
        {

            return new List<FollowerNote>();
        }

        //public FollowerNote Create(FollowerNote saveMe)
        //{
        //    using (var ctx = new InstaConsoleDbContext())
        //    {
        //        User stud = new User() { Id = Guid.NewGuid(), Username = "New Student" };

        //        saveMe

        //        ctx.Users.Add(saveMe);

        //        ctx.SaveChanges();
        //    }

        //    return saveMe
        //}
    }
}