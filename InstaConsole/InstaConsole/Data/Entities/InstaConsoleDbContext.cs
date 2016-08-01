using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace InstaConsole.Data.Entities
{
    public class InstaConsoleDbContext : DbContext
    {
        public InstaConsoleDbContext()
            : base("DefaultConnection")
        {
            Database.SetInitializer(new DropCreateDatabaseIfModelChanges<InstaConsoleDbContext>());
        }

        public DbSet<User> Users { get; set; }
        public DbSet<FollowerNote> FollowerNotes { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
    }
}