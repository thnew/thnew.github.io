using InstaConsole.Data.Entities;
using InstaConsole.Exceptions.GeneralExceptions;
using InstaConsole.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InstaConsole.Repository
{
    public class UserRepository
    {
        public User GetById(Guid userId)
        {

            return new User();
        }

        public User Create(User saveMe)
        {
            using (var context = new InstaConsoleDbContext())
            {
                saveMe.Id = Guid.NewGuid();
                saveMe.CreatedAt = DateTime.Now;
                saveMe.ModifiedAt = DateTime.Now;

                context.Users.Add(saveMe);

                context.SaveChanges();
            }

            return saveMe;
        }
    }
}